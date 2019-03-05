import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

library.add( faCalendarAlt )

export default ({ data }) => {
  const post = data.markdownRemark.frontmatter;
  const titleStyle = {
      position: 'absolute',
      bottom: '15px',
      left: '15px',
      fontSize: '48px',
      color: '#fff',
      zIndex: '3'
  }
  const bgStyle = {
    backgroundImage: `url(` + post.featuredImage.publicURL + `)`
  }
    return (
    <Layout>
      <Helmet>
        <title>Trago2Wheels - {post.title}</title>
      </Helmet>
        <div className="container-fluid motorbikeParallax" style={ bgStyle } >
          <div className="container" style={{ position:'relative', height:'100%' }}>
            <h1 style={ titleStyle }>{ post.title }</h1>
          </div>
        </div>
        <div className="container spacing single">
          <div className="bikeContainer">
            <div className="row">
              <div className="col-sm-6">
                <Img fluid={post.eventImage.childImageSharp.fluid} />              
              </div>
              <div className="col-sm-6">
                <h2>{post.title}</h2>
                <p><FontAwesomeIcon icon="calendar-alt" /> { post.ezDate }</p>
                <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                <h3 style={{ color: '#000' }}>Sign Up</h3>
                <p style={{ margin: '0' }}>Stay up to date with the latest news and events by joining our mailing list.</p>
                <p><small>We promise not to spam you.</small></p>
                <div id="mc_embed_signup">
                  <form action="https://trago.us20.list-manage.com/subscribe/post?u=71e927d89bfcabbe8d580dbf2&amp;id=64904a42d0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                      <div id="mc_embed_signup_scroll">
                          <div className="mc-field-group">
                              <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" placeholder="Email*" />
                          </div>
                          <div className="mc-field-group">
                              <input type="text" name="FNAME" className="" id="mce-FNAME" placeholder="First Name" />
                          </div>
                          <div className="mc-field-group">
                              <input type="text" name="LNAME" className="" id="mce-LNAME" placeholder="Last Name" />
                          </div>
                          <div id="mce-responses" className="clear">
                              <div className="response" id="mce-error-response" style={{display:'none'}}></div>
                              <div className="response" id="mce-success-response" style={{display:'none'}}></div>
                          </div>
                          <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                              <input type="text" name="b_71e927d89bfcabbe8d580dbf2_64904a42d0" tabIndex="-1" value="" />
                          </div>
                          <div className="clear">
                              <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                          </div>
                      </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export const query = graphql`
query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
              title
              eventDate
              ezDate
              featuredImage {
                publicURL
                name
              }
              eventImage {
                childImageSharp {
                  fluid(maxWidth:600) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
        }
    }
`
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

library.add( faInfoCircle )

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
  const voucher = (parseFloat(post.oldprice.replace(/,/g, '')) / 10).toFixed(2);
    return (
    <Layout>
      <Helmet>
        <title>Trago2Wheels - {post.title}</title>
      </Helmet>
        <div className="container-fluid motorbikeParallax" style={bgStyle} >
          <div className="container" style={{position:'relative', height:'100%'}}>
            <h1 style={titleStyle}>{post.title}</h1>
          </div>
        </div>
        <div className="container spacing single">
          <div className="bikeContainer">
            <div className="row">
              <div className="col-sm-6">
                <Img
                  fluid={post.mainImage.childImageSharp.fluid}
                />
              </div>
              <div className="col-sm-6">
              <h2>{post.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                <ul className="bikeInfo">
                  <li><FontAwesomeIcon icon="info-circle" /> Weight <span>{post.weight}kg</span></li>
                  <li><FontAwesomeIcon icon="info-circle" /> Engine <span>{post.Engine}</span></li>
                  <li><FontAwesomeIcon icon="info-circle" /> Displacement <span>{post.displacement}cc</span></li>
                  <li><FontAwesomeIcon icon="info-circle" /> Max Power <span>{post.maxpower}bhp</span></li>
                  <li><FontAwesomeIcon icon="info-circle" /> Transmission <span>{post.transmission}</span></li>
                  <li><FontAwesomeIcon icon="info-circle" /> Fuel Tank <span>{post.fueltank} Litres</span></li>
                </ul>
                <p style={{
                  textAlign:'right',
                  fontWeight: '700',
                  fontSize: '22px'
                }}>
                  &pound;{post.oldprice}
                </p>
                <p style={{ textAlign:'right' }}>Voucher: £{voucher}</p>
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
              oldprice
              newprice
              maxpower
              fueltank
              transmission
              Engine
              weight
              displacement
              featuredImage {
                publicURL
                name
              }
              mainImage {
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
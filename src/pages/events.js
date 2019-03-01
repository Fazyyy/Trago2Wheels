import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

library.add( faCalendarAlt )

export default ({ data }) => (
  <Layout>
  <Helmet>
    <title>Trago2Wheels - Events</title>
  </Helmet>
  <div className="pageBanner eventsBanner">
    <div className="container">
      <div class="row">
        <div class="col">
          <h1>Events</h1>
          <p>View our upcoming events</p>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid">
      <div className="container" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
          <div className="row">
              {data.allMarkdownRemark.edges.map(({ node }) => (
                  <div className="col-md-4">
                      <div className="event-item">
                          <div className="imageSection">
                              <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
                              <h2 style={{ color: '#fff' }}>{node.frontmatter.title}</h2>
                          </div>
                          <div style={{ padding: '15px'}}>
                              <p style={{ textAlign: 'right', paddingBottom: '15px' }}><FontAwesomeIcon icon="calendar-alt" /> {node.frontmatter.ezDate}</p>
                              <p className="eventExcerpt">{node.excerpt}</p>
                              <p style={{ float:'right' }}><Link className="eventLink" to={node.fields.slug}>View</Link></p>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  </div>
  </Layout>
)

export const eventQuery = graphql`
query eventPageQuery {
  allMarkdownRemark(filter:{frontmatter: {product: {regex: "/event/"}}}, sort: { fields: [frontmatter___eventDate], order: ASC }) {
    edges {
      node {
        id
        frontmatter {
          title
          eventDate
          ezDate
          featuredImage {
            childImageSharp {
              fluid(maxWidth:600) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}
`
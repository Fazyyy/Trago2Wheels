import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'

export default ({ data }) => (
  <Layout>
  <Helmet>
    <title>Trago2Wheels - Events</title>
  </Helmet>
  <div className="container-fluid rideoutHome">
      <div className="container">
          <div className="row">
          <div className="col">
              <h2>Upcoming Events</h2>
          </div>
          </div>
          <div className="row">
              {data.allMarkdownRemark.edges.map(({ node }) => (
                  <div className="col-md-6">
                      <div className="event-item">
                          <div className="imageSection">
                              <Img
                                  fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                              />
                              <h2>{node.frontmatter.title}</h2>
                          </div>
                          <div style={{ padding: '15px'}}>
                              <p style={{ textAlign: 'right' }}><small>{node.frontmatter.eventDate}</small></p>
                              <p>{node.excerpt}</p>
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
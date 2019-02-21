import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from 'gatsby-image'

export default ({ data }) => {
  return (
    <Layout>
      <div className="motorbikeBanner">
        <div className="container">
          <div class="row">
            <div class="col">
              <h1>Motorbikes</h1>
              <p>View our range of motorbikes</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container spacing">
        <div className="row">
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id} className="col-sm-4 bikeGallery">
                    <div class="bikeImage">
                      <Img
                        fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                      />
                      <h3 style={{ textAlign: 'right' }}>
                          {node.frontmatter.title}
                      </h3>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <p className="bikeRRP">£{node.frontmatter.oldprice}</p>
                        <Link className="gallLink" to={node.fields.slug}>View</Link>
                      </div>
                    </div>
                </div>
            ))}
        </div>


      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            oldprice
            newprice
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
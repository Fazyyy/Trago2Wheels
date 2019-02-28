import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'

export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Trago2Wheels - Clothing</title>
      </Helmet>
      <div className="pageBanner clothingBanner">
        <div className="container">
          <div class="row">
            <div class="col">
              <h1>Clothing</h1>
              <p>View our range of Clothing</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container spacing">
        <div className="row">
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id} className="col-sm-6 col-md-3 clothingItem">
                    <Link to={node.fields.slug}>
                    <Img fluid={node.frontmatter.productImage.childImageSharp.fluid} />
                        <h3 style={{ textAlign: 'right' }}>
                            {node.frontmatter.title}
                        </h3>
                        <p className="price">£{node.frontmatter.price}</p>
                        <p className="viewButton">View</p>
                    </Link>
                </div>
            ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
query clothingQuery {
  allMarkdownRemark(filter: {frontmatter: {product: {regex: "/clothing/"}}}) {
    edges {
      node {
        id
        frontmatter {
          title
          price
          productImage {
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
import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from 'react-helmet'

export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Trago2Wheels - Motorbikes</title>
      </Helmet>
      <div className="motorbikeBanner">
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
                <div key={node.id} className="col-sm-6 col-md-4">
                    <Link to={node.fields.slug}>
                        <h3 style={{ textAlign: 'right' }}>
                            {node.frontmatter.title}
                        </h3>
                        <p className="bikeRRP">£{node.frontmatter.price}</p>
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
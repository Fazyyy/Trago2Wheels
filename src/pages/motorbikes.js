import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

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
                <div key={node.id} className="col-sm-6 bikeGallery">
                    <div class="bikeImage">
                      <img src={node.frontmatter.featuredImage.publicURL} alt="" />
                      <h3>
                          {node.frontmatter.title}
                      </h3>
                    </div>
                    <div class="row" style={{marginTop:'10px'}}>
                      <div class="col-sm-7">
                        <p>{node.excerpt}</p>
                      </div>
                      <div class="col-sm-5">
                        <p className="bikeRRP">RRP: £{node.frontmatter.oldprice}</p>
                        <p className="tragoPrice">Our Price: £{node.frontmatter.newprice}</p>
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
            	name
            	absolutePath
              base
              publicURL
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
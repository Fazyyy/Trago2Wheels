import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
      <div className="container">
        <h1>About {data.site.siteMetadata.title}</h1> 
        <p>
        We do things
        </p>
    </div>
  </Layout>
)

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`
import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'
import heraldLogo from '../img/herald.png'

export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Trago2Wheels - Motorbikes</title>
      </Helmet>
      <div className="pageBanner motorbikeBanner">
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
                <div key={node.id} className="col-sm-6 col-md-4 bikeGallery">
                    <div class="bikeImage">
                        <Link to={node.fields.slug}>
                        <img src={heraldLogo} className="brandLogo" alt={node.frontmatter.brand} />
                          <Img
                            fluid={node.frontmatter.listImage.childImageSharp.fluid}
                          />
                        </Link>
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
query IndexQuery {
  allMarkdownRemark(filter: {frontmatter: {product: {regex: "/motorbike/"}}}) {
    edges {
      node {
        id
        frontmatter {
          title
          brand
          oldprice
          newprice
          listImage {
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
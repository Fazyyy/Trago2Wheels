import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'

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
    return (
    <Layout>
    <Helmet>
      <title>Trago2Wheels - {post.title}</title>
    </Helmet>
        <div className="container-fluid motorbikeParallax">
          <div className="container" style={{position:'relative', height:'100%'}}>
            <h1 style={titleStyle}>{post.title}</h1>
          </div>
        </div>
        <div className="container spacing single">
          <div className="bikeContainer">
            <div className="row">
              <div className="col-sm-6">
                <Img fluid={post.productImage.childImageSharp.fluid} alt={post.title} />
              </div>
              <div className="col-sm-6">
                <h2>{post.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                <Link to="/" className="ccButton">Click &amp; Collect</Link>
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
        price
        productImage {
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
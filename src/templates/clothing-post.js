import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from 'gatsby-image'
import Banner from '../img/clothingBanner.jpg'

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
    backgroundImage: `url(` + Banner + `)`
  }
    return (
    <Layout>
        <div className="container-fluid motorbikeParallax" style={bgStyle}>
          <div className="container" style={{position:'relative', height:'100%'}}>
            <h1 style={titleStyle}>{post.title}</h1>
          </div>
        </div>
        <div className="container spacing single">
          <div className="bikeContainer">
            <div className="row">
              <div className="col-sm-6">
                <Img
                  fluid={post.productImage.childImageSharp.fluid}
                />              
              </div>
              <div className="col-sm-6" style={{ paddingBottom: '115px' }}>
                <h2>{post.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                <p>Available in: {post.color}</p>
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
              color
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
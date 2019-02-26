import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

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
    backgroundImage: `url(` + post.featuredImage.publicURL + `)`
  }
    return (
    <Layout>
        <div className="container-fluid motorbikeParallax" style={bgStyle} >
          <div className="container" style={{position:'relative', height:'100%'}}>
            <h1 style={titleStyle}>{post.title}</h1>
          </div>
        </div>
        <div className="container spacing single">
          <div className="bikeContainer">
            <div className="row">
              <div className="col-sm-6">
                <div className="col" style={{ paddingTop: '15px' }}>
                  <img src="https://source.unsplash.com/random/600x200" alt="" class="img-fluid" />                
                </div>
                <div className="col" style={{ paddingTop: '15px' }}>
                  <img src="https://source.unsplash.com/random/600x200" alt="" class="img-fluid" />                
                </div>
                <div className="col" style={{ paddingTop: '15px' }}>
                  <img src="https://source.unsplash.com/random/600x200" alt="" class="img-fluid" />                
                </div>
              </div>
              <div className="col-sm-6">
              <h2>{post.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
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
              featuredImage {
                publicURL
                name
              }
            }
        }
    }
`
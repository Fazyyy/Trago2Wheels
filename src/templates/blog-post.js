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
        <div className="container spacing">
          <div className="row">
            <div className="col-sm-6">
              <img src={post.mainImage.publicURL} alt={post.title} className="img-fluid" />
            </div>
            <div className="col-sm-6">
            <h2>{post.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />


            <ul className="bikeInfo">
              <li>Weight: <span>{post.weight}kg</span></li>
              <li>Engine: <span>{post.Engine}</span></li>
              <li>Displacement: <span>{post.displacement}cc</span></li>
              <li>Max Power: <span>{post.maxpower}bhp</span></li>
              <li>Transmission: <span>{post.transmission}</span></li>
              <li>Fuel Tank: <span>{post.fueltank} Litres</span></li>
            </ul>


              <p>RRP: &pound;{post.oldprice}</p>
              <p>Trago Price: &pound;{post.newprice}</p>
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
              oldprice
              newprice
              maxpower
              fueltank
              transmission
              Engine
              weight
              displacement
              featuredImage {
                publicURL
                name
              }
              mainImage {
                publicURL
                name
              }
            }
        }
    }
`
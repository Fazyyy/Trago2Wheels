import React from "react"
import { Link, graphql } from "gatsby"
import SwiperHome from "../components/swiperHome"
import Layout from "../components/layout"
import Services from "../components/services"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Helmet } from 'react-helmet'
import Map from '../components/map'
import Img from 'gatsby-image'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

library.add( faCalendarAlt )

export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Trago2Wheels - Home</title>
        <meta name="description" content="Trago2Wheels is the leading supplier of motorbikes, scooters and accessories in South Wales and the South West." />
      </Helmet>
        <SwiperHome />
        <div className="homeIntro gbg">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <h1>Trago2Wheels</h1>
                <p>Here at Trago2Wheels, we are dedicated to helping our customers find the best bike to suit your individual riding ability. At Trago2Wheels, you will find a wide range of bikes from affordable 50cc scooters to 650cc motorbikes. We provide high quality images and reviews of every motorbike on our site to make choosing your next purchase simple.</p>
              </div>
            </div>
          </div>
        </div>
        <Services />
        <div className="container-fluid rideoutHome">
            <div className="container">
                <div className="row">
                <div className="col">
                    <h2>Upcoming Events</h2>
                </div>
                </div>
                <div className="row">
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                        <div className="col-md-4">
                            <div className="event-item">
                                <div className="imageSection">
                                    <Img
                                        fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                                    />
                                    <h2>{node.frontmatter.title}</h2>
                                </div>
                                <div style={{ padding: '15px'}}>
                                    <p style={{ textAlign: 'right' }}><FontAwesomeIcon icon="calendar-alt" /> {node.frontmatter.ezDate}</p>
                                    <p>{node.excerpt}</p>
                                    <p style={{ float:'right' }}><Link className="eventLink" to={node.fields.slug}>View</Link></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row" style={{ marginTop: '25px' }}>
                      <div className="col">
                      <p style={{ float:'right' }}><Link className="eventLink big" to="/events/">View All</Link></p>
                      </div>
                </div>
            </div>
        </div>
        <Map />
    </Layout>
  )
}


export const eventQuery = graphql`
query eventsQuery {
  allMarkdownRemark(limit: 3, filter:{frontmatter: {product: {regex: "/event/"}}}, sort: { fields: [frontmatter___eventDate], order: ASC }) {
    edges {
      node {
        id
        frontmatter {
          title
          eventDate
          ezDate
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
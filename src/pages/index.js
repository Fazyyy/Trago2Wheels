import React from "react"
import { Link, graphql } from "gatsby"
import SwiperHome from "../components/swiperHome"
import Layout from "../components/layout"
import Services from "../components/services"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Helmet } from 'react-helmet'
import Map from '../components/map'
import Img from 'gatsby-image'

export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Trago2Wheels - Home</title>
      </Helmet>
        <SwiperHome />
        <div className="homeIntro gbg">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <h1>Trago2Wheels</h1>
                <p>Here at Trago2Wheels, we are dedicated to helping our customers find the best bike to suit your individual riding ability. At Trago2Wheels, you will find a wide range of bikes from affordable 50cc mopeds to 125cc motorbikes. We provide high quality images and reviews of every motorbike on our site to make choosing your next purchase simple.</p>
              </div>
            </div>
          </div>
        </div>
        <Services />
        <Map />
    </Layout>
  )
}

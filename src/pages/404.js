import React from "react"
import SwiperHome from "../components/swiperHome"
import Layout from "../components/layout"
import Services from "../components/services"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Helmet } from 'react-helmet'
import Map from '../components/map'

export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Trago2Wheels - 404</title>
        <meta name="description" content="Trago2Wheels is the leading supplier of motorbikes, scooters and accessories in South Wales and the South West." />
      </Helmet>
        <SwiperHome />
        <div className="homeIntro gbg">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <h1>404</h1>
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
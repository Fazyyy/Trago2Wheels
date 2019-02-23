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
        <title>Trago2Wheels</title>
      </Helmet>
        <SwiperHome />
        <div className="container spacing">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 text-center">
              <h1>Trago2Wheels</h1>
              <p>Here at Trago2Wheels, we are dedicated to helping our customers find the best bike to suit your individual riding ability. At Trago2Wheels, you will find a wide range of bikes from affordable 50cc mopeds to 125cc motorbikes. We provide high quality images and reviews of every motorbike on our site to make choosing your next purchase simple.</p>
              <p>Shop with us for the following:</p>
              <p>
                  <ul>
                      <li>125cc motorbikes</li>
                      <li>50cc mopeds</li>
                      <li>Learner motorbikes</li>
                      <li>Learner scooters</li>
                      <li>Motorcycle parts</li>
                      <li>Motorcycle accessories</li>
                  </ul>
              </p>
              <p>If you would like to find out more information on our great value 125cc motorbikes for sale, please do not hesitate to get in touch. We are passionate about motorbikes and are always happy to talk to our customers.</p>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
        <Services />
        <Map />
    </Layout>
  )
}
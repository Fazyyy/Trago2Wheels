import React from "react"
import Layout from "../components/layout"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Helmet } from 'react-helmet'
import Map from '../components/map'

export default ({ data }) => {
  return (
    <Layout>
        <Helmet>
            <title>Trago2Wheels - Contact</title>
        </Helmet>
        <div className="motorbikeBanner">
            <div className="container">
                <div class="row">
                    <div class="col">
                        <h1>Contact</h1>
                        <p>Get in touch</p>
                    </div>
                </div>
            </div>
        </div>
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
        <Map />
    </Layout>
  )
}
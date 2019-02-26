import React from "react"
import SwiperHome from "../components/swiperHome"
import Layout from "../components/layout"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Helmet } from 'react-helmet'

export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Trago2Wheels - Training</title>
        <meta name="description" content="Trago2Wheels is the leading supplier of motorbikes, scooters and accessories in South Wales and the South West." />
      </Helmet>
        <SwiperHome />
    </Layout>
  )
}
import React from "react"
import Layout from "../components/layout"
import Services from "../components/services"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Helmet } from 'react-helmet'

export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Trago2Wheels - 404</title>
        <meta name="description" content="Trago2Wheels is the leading supplier of motorbikes, scooters and accessories in South Wales and the South West." />
      </Helmet>
        <div className="pageBanner motorbikeBanner">
          <div className="container">
            <div class="row">
              <div class="col">
                <h1>404</h1>
                <p>We couldn't find that one...</p>
              </div>
            </div>
          </div>
        </div>
        <div className="homeIntro gbg">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <h1>Page Not Found</h1>
                <p>Oops... We couldn't find the page you were looking for.</p>
              </div>
            </div>
          </div>
        </div>
        <Services />
    </Layout>
  )
}
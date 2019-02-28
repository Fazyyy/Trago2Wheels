import React from "react"
import Layout from "../components/layout"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Helmet } from 'react-helmet'
import Map from '../components/map'

export default () => {
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
                        <h1>Contact Us</h1>
                        <p>If you have any queries, suggestions or feedback we'd love to hear from you! Use the form below to let us know your thoughts or, alternatively, use the branch details below to find the details of your closest branch and pop in or just give them a call. </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container contactForm spacing">
            <div className="row">
                <div className="col">
                    <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                        <p class="hidden">
                            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                        </p>
                        <p>
                            <label>Your Name: <input type="text" name="name" /></label>   
                        </p>
                        <p>
                            <label>Your Email: <input type="email" name="email" /></label>
                        </p>
                        <p>
                            <label>Message: <textarea name="message"></textarea></label>
                        </p>
                        <p>
                            <button type="submit">Send</button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        <Map />
    </Layout>
  )
}
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
        <div className="pageBanner contactBanner">
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
                <div className="row">
                    <div className="col contactForm">
                        <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                            <p class="hidden">
                                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                            </p>
                            <div className="row">
                                <div className="col spacing" style={{ width: '100%' }}>
                                    <input type="text" name="name" placeholder="Your Name" />
                                    <input type="text" name="telephone" placeholder="Contact Number" />
                                    <input type="email" name="email" placeholder="Your Email" />
                                    <textarea name="message" placeholder="Your Message" ></textarea>
                                </div>
                            </div>
                            <p>
                                <button className="contactFormButton" type="submit">Send</button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="container spacing">
            <div className="row">
                <div className="col">
                    <Map />
                </div>
            </div>
        </div>
    </Layout>
  )
}
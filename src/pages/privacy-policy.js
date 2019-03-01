import React from "react"
import Layout from "../components/layout"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Helmet } from 'react-helmet'

export default () => {
  return (
    <Layout>
        <Helmet>
            <title>Trago2Wheels - Privacy Policy</title>
            <meta name="robots" content="noindex" />
        </Helmet>
        <div className="pageBanner contactBanner">
            <div className="container">
                <div class="row">
                    <div class="col">
                        <h1>Privacy Policy</h1>
                        <p>Data collection and usage</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container spacing">
            <div className="row">
                <div className="col">
                    
                    <h2>Privacy Policy</h2>

                    <p>This privacy policy sets out how Trago2Wheels uses and protects any information that you give Trago2Wheels when you use this website. Trago2Wheels is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement. Trago2Wheels may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes.</p>

                    <h2>What we Collect?</h2>

                    <p>We may collect the following information - name and job title, contact information including email address, demographic information such as postcode, preferences and interests and other information relevant to customer surveys and/or offers.</p>

                    <h2>What we do with the Information we Gather?</h2>

                    <p>We require this information to understand your needs and provide you with a better service and in particular, for internal record keeping. We may also use the information to improve our products and services. Trago2Wheels may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided. From time to time, we may also use your information to contact you for market research purposes. Trago2Wheels may contact you by email, phone, fax or mail. We may use the information to customise the website according to your interests.</p>
                    
                    <h2>Security</h2>

                    <p>We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, Trago2Wheels have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.</p>

                    <h2>Links to other Websites</h2>

                    <p>Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.</p>

                    <h2>Controlling your Personal Information</h2>

                    <p>You may choose to restrict the collection or use of your personal information for direct marketing purposes, by writing to us. Trago2Wheels will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties, which we think you may find interesting if you tell us that you wish this to happen. You may request details of personal information which we hold about you under the Data Protection Act 1998. A small fee will be payable. If you would like a copy of the information held on you please contact us. If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible, at the address on our contact page. We will promptly correct any information found to be incorrect.</p>
                </div>
            </div>
        </div>
    </Layout>
  )
}
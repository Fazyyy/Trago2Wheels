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
                        <h1>Cookies Policy</h1>
                        <p>Our use of cookies</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container spacing">
            <div className="row">
                <div className="col">
                    <h2>How we use Cookies</h2>                    

                    <p>A cookie is a small file which asks permission to be placed on your computer’s hard drive. Once you agree, the file is added and the cookie helps analyse web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor it's operations to your needs, likes and dislikes by gathering and remembering information about your preferences. This site uses Google Analytics and users should disable cookies in their browser, if they do not wish their visit to be tracked. Google Analytics uses traffic log cookies to identify which pages are being used. This helps us analyse data about webpage traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system. Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us. You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.</p>

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
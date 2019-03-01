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
                        <h1>Data Protection Policy</h1>
                        <p>Keeping Data Safe</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container spacing">
            <div className="row">
                <div className="col">
                    <h2>Data Protection Act 1998</h2>   
 
                    <p>The Data Protection Act 1998 sets out rules for processing personal information, and it applies to some paper records as well as those held on computer and some automatically processed data, for example, document image processing, audio/video, photographs and CCTV. The Act gives individuals certain rights, and imposes obligations on those who record and use personal information to be open about how information is used and to follow eight data protection principles:</p>
 
                    <h2>Data protection principles</h2>
 
                    <p>The Data Protection Act controls how your personal information is used by organisations, businesses or the government. Everyone responsible for using data has to follow strict rules called ‘data protection principles’. They must make sure the information is:</p>
 
                    <p>
                        <ul>
                            <li>used fairly and lawfully</li>
                            <li>used for limited, specifically stated purposes</li>
                            <li>used in a way that is adequate, relevant and not excessive</li>
                            <li>accurate</li>
                            <li>kept for no longer than is absolutely necessary</li>
                            <li>handled according to people’s data protection rights</li>
                            <li>kept safe and secure</li>
                            <li>not transferred outside the European Economic Area without adequate protection</li>
                        </ul>
                    </p>
 
                    <p>There is stronger legal protection for more sensitive information, such as:</p>
                    <p>
                        <ul>
                            <li>ethnic background</li>
                            <li>political opinions</li>
                            <li>religious beliefs</li>
                            <li>health</li>
                            <li>sexual health</li>
                            <li>criminal records</li>
                        </ul>
                    </p>
                    
                    <p>Trago2Wheels will not request this sensitive information in the course of our business.</p>

                    <p>All users of personal information, including the Board of Management and our affiliates are obliged to comply with the 1998 Data Protection Act (DPA).</p>
                    
                    <p>Trago2Wheels does not capture or store any personal information about individuals who access this website, except where you choose to give us your personal details via email, phone or by enquiring online about any of our services. In these latter cases, the personal information you give us may be used by our affiliates in providing you current and future information about services described in this website unless you request us not to.</p>

                    <h2>Information sharing</h2>

                    <p>In the course of our business we will only share information with our affiliates in order to fulfil our contractual obligations. No personal data will be shared with any other third party.</p>

                    <p>As Trago2Wheels only collect selective personal data in the running of our core business purpose and thus is exempt from registration requirements for Data Protection with the Information Commissioner’s Office.</p>

                    <h2>The individual’s rights</h2>

                    <p>All individuals that Trago2Wheels and our affiliates hold data on are entitled to:</p>

                    <p>
                        <ul>
                            <li>have access to the information held about them, except where releasing that information would breach another person's privacy.
                            prevent data processing likely to cause substantial and unwarranted damage and distress, and to prevent processing for direct marketing.</li>
                            <li>To exercise these rights, the individual should contact the Commercial Director of Trago2Wheels</li>
                        </ul>
                    </p>

                    <h2>Trago2Wheels's responsibilities</h2>

                    <p>Any personal data must be collected, processed and held according to the data protection principles. Data will not be kept for longer than necessary. We will ensure that personal data is secure.</p>

                    <h2>General Data Protection Regulations (GDPR) 2018</h2>

                    <p>The General Data Protection Regulation (GDPR) is a European Union regulation that will replace the current Data Protection Act on 25 May 2018.</p>

                    <p>The European Union Parliament and Council have been developing the GDPR since 2012 to harmonise and strengthen the rights of data subjects across Europe, including when data is transferred to third party countries. The GDPR:</p>

                    <p>
                        <ul>
                            <li>enhances some of the rights of individuals that currently exist under the DPA and</li>
                            <li>creates new rights such as the right to be forgotten and the right to erasure</li>
                            <li>provides for increased accountability and processes to demonstrate compliance. For example, all public authorities will need to have a Data Protection Officer and the consent requirements are much higher.</li>
                            <li>breaches will have to be reported to the Information Commissioners Office within 72 hours and the potential fines for breaches are up to €20 million.</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    </Layout>
  )
}
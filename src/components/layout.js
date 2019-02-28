import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import Navigation from "../components/navigation"
import Headroom from 'react-headroom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faPhone, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import CookieConsent from "react-cookie-consent";

library.add( faMapMarkerAlt, faPhone, faInfoCircle, faFacebookF, faTwitter )

export default ({ children }) => (    
    
  <StaticQuery
    query={graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
        `
    }    
    render={data => (      
        <div>
            <Headroom>
                <Navigation />
            </Headroom>
            {children}
            <div className="footer container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <ul className="socials">
                                <li className="twitter">
                                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/trago2wheels">
                                    <FontAwesomeIcon icon= {[ 'fab', 'twitter' ]} />
                                    </a>
                                </li>
                                <li className="facebook">
                                    <a target="_blank" rel="noopener noreferrer" href="https://en-gb.facebook.com/Trago2Wheels/">
                                        <FontAwesomeIcon icon= {[ 'fab', 'facebook-f' ]} />
                                    </a>
                                </li>
                                <li>
                                    <Link to="/contact/"><FontAwesomeIcon icon="map-marker-alt" /></Link>
                                </li>
                                <li>
                                    <Link to="/contact/"><FontAwesomeIcon icon="phone" rotation={90} /></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-4">
                            <h2>Opening Times</h2>
                            <ul className="times">
                                <li><span>Mon</span>0900 - 2000</li>
                                <li><span>Tue</span>0900 - 2000</li>
                                <li><span>Wed</span>0900 - 2000</li>
                                <li><span>Thur</span>0900 - 2000</li>
                                <li><span>Fri</span>0900 - 2000</li>
                                <li><span>Sat</span>0900 - 1800</li>
                                <li><span>Sun</span>1000 - 1600</li>
                            </ul>
                        </div>
                        <div className="hidden-xs col-sm-6 col-md-4">
                        <h2>QuickLinks</h2>
                            <ul className="qLinks">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/motorbikes/">Motorbikes</Link></li>
                                <li><Link to="/scooters/">Scooters</Link></li>
                                <li><Link to="/clothing/">Clothing</Link></li>
                                <li><Link to="/tools/">Tools</Link></li>
                                <li><Link to="/events/">Events</Link></li>
                                <li><Link to="/contact/">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <h2 className="formTitle">Newsletter</h2>                    
                            <p>Sign up to be the first to hear about the latest news and events at Trago2Wheels.</p>
                            <div id="mc_embed_signup">
                                <form action="https://trago.us20.list-manage.com/subscribe/post?u=71e927d89bfcabbe8d580dbf2&amp;id=64904a42d0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                                    <div id="mc_embed_signup_scroll">
                                        <div className="mc-field-group">
                                            <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" placeholder="Email*" />
                                        </div>
                                        <div className="mc-field-group">
                                            <input type="text" name="FNAME" className="" id="mce-FNAME" placeholder="First Name" />
                                        </div>
                                        <div className="mc-field-group">
                                            <input type="text" name="LNAME" className="" id="mce-LNAME" placeholder="Last Name" />
                                        </div>
                                        <div id="mce-responses" className="clear">
                                            <div className="response" id="mce-error-response" style={{display:'none'}}></div>
                                            <div className="response" id="mce-success-response" style={{display:'none'}}></div>
                                        </div>
                                        <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                                            <input type="text" name="b_71e927d89bfcabbe8d580dbf2_64904a42d0" tabIndex="-1" value="" />
                                        </div>
                                        <div className="clear">
                                            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <ul className="policies" style={{ marginTop: '15px' }}>
                                <li><Link to="/"><FontAwesomeIcon icon="info-circle" /> Cookies Policy</Link></li>
                                <li><Link to="/"><FontAwesomeIcon icon="info-circle" /> GDPR Policy</Link></li>
                                <li><Link to="/"><FontAwesomeIcon icon="info-circle" /> Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>&copy; Copyright 2018-2019 Trago2Wheels All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
            <CookieConsent
                location="bottom"
                buttonText="I Accept"
                cookieName="myAwesomeCookieName2"
                style={{ background: "#5c6395", transition: '0.5s' }}
                buttonStyle={{ color: "#fff", fontSize: "13px",background: '#333' }}
                expires={14}
            >
                <div className="container">
                    <p style={{ margin: '0' }}>This website uses cookies to enhance the user experience.</p>
                </div>   
            </CookieConsent>
        </div>
    )}  />)
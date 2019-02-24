import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import TwitterLogo from "../img/twitter.png"
import FacebookLogo from "../img/facebook.png"
import Navigation from "../components/navigation"
import Headroom from 'react-headroom'
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
                        <div className="col-sm-6">
                            <ul className="socials">
                                <li><a className="twitter" target="_blank" rel="noopener noreferrer" href="https://twitter.com/trago2wheels"><img src={TwitterLogo} alt="Twitter Logo" /></a></li>
                                <li><a className="facebook" target="_blank" rel="noopener noreferrer" href="https://en-gb.facebook.com/Trago2Wheels/"><img src={FacebookLogo} alt="Twitter Logo" /></a></li>
                            </ul>
                            <ul className="policies">
                                <li><Link to="/">Cookies Policy</Link></li>
                                <li><Link to="/">GDPR Policy</Link></li>
                                <li><Link to="/">Privacy Policy</Link></li>
                            </ul>
                            <p>Trago2Wheels, Two Waters Foot, Liskeard PL14 6HY</p>
                            <p className="tel"><a href="tel:01579348877">01579 348877</a></p>
                            <p>&copy; Copyright 2018-2019 Trago2Wheels All rights reserved</p>
                        </div>
                        <div className="col-sm-6">
                            <h2 className="formTitle">Sign up for News &amp; Events</h2>                    
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
                </div>
            </div>
        </div>
    )}  />)
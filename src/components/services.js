import React from 'react';
import serviceIcon from "../img/tech.png"
import { Link } from "gatsby"

class services extends React.Component {
  render() {
    return (
      <div>
        <div class="container-fluid imgLinks">
          <div className="row">
            <div className="col-sm-4 item">
              <Link to="/motorbikes/"></Link>
              <p>Motorbikes</p>
            </div>
            <div className="col-sm-4 item scooter">
              <Link to="/scooters/"></Link>
              <p>Scooters</p>
            </div>
            <div className="col-sm-4 item clothing">
              <Link to="/clothing/"></Link>
              <p>Clothing</p>
            </div>
            <div className="col-sm-4 item helmet">
              <Link to="/helmets/"></Link>
              <p>Helmets</p>
            </div>
            <div className="col-sm-4 item tool">
              <Link to="/tools/"></Link>
              <p>Tools</p>
            </div>
            <div className="col-sm-4 item training">
              <Link to="/training/"></Link>
              <p>Traning</p>
            </div>
          </div>
        </div>
        <div className="container-fluid spacing text-center services">
          <div className="container">
            <div className="row">
              <div className="col-md">
                <div className="service gbg shadow" style={{ height: '100%' }}>
                  <h2>Quality</h2>
                  <img src={serviceIcon} alt="Icon" className="img-center" />
                  <p>We pride ourselves on our reputation of providing the the highest quality Motorbikes, Scooters, Clothing, Tools and Accessories. Our reputation is built on our values as a company and we make every effort possible to maintain this standard.</p>
                </div>
              </div>
              <div className="col-md">
                <div className="service gbg shadow" style={{ height: '100%' }}>
                  <h2>Choice</h2>
                  <img src={serviceIcon} alt="Icon" className="img-center" />
                  <p>From brand new 650cc Motorbikes to high quality gloves, we stock everything you need to get on the road legally and safely. Our website contains an ever growing list of bikes, tools and clothes but to see an even greater variety, why not pop into one of our brick &amp; mortar stores?</p>
                </div>
              </div>
              <div className="col-md">
                <div className="service gbg shadow" style={{ height: '100%' }}>
                  <h2>Value</h2>
                  <img src={serviceIcon} alt="Icon" className="img-center" />
                  <p>We buy in bulk directly from the manufacturer for many of our items meaning that we're able to pass the savings on to our customers, meaning you'll get high quality brand new products and majorly discounted prices along with peace of mind.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default services;
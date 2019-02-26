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
                <div className="service gbg shadow">
                  <h2>Quality</h2>
                  <img src={serviceIcon} alt="Icon" className="img-center" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut dapibus risus. Donec convallis hendrerit ligula sodales vestibulum. Mauris vel neque aliquam, aliquet nulla eu, pulvinar quam.</p>
                </div>
              </div>
              <div className="col-md">
                <div className="service gbg shadow">
                  <h2>Quality</h2>
                  <img src={serviceIcon} alt="Icon" className="img-center" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut dapibus risus. Donec convallis hendrerit ligula sodales vestibulum. Mauris vel neque aliquam, aliquet nulla eu, pulvinar quam.</p>
                </div>
              </div>
              <div className="col-md">
                <div className="service gbg shadow">
                  <h2>Quality</h2>
                  <img src={serviceIcon} alt="Icon" className="img-center" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut dapibus risus. Donec convallis hendrerit ligula sodales vestibulum. Mauris vel neque aliquam, aliquet nulla eu, pulvinar quam.</p>
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
import React from 'react';
import serviceIcon from "../img/tech.png"

class services extends React.Component {
  render() {
    return (
      <div className="container-fluid spacing text-center services">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="service">
                <h2>Quality</h2>
                <img src={serviceIcon} alt="Icon" className="img-center" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut dapibus risus. Donec convallis hendrerit ligula sodales vestibulum. Mauris vel neque aliquam, aliquet nulla eu, pulvinar quam.</p>
              </div>
            </div>
            <div className="col-sm">
              <div className="service">
                <h2>Quality</h2>
                <img src={serviceIcon} alt="Icon" className="img-center" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut dapibus risus. Donec convallis hendrerit ligula sodales vestibulum. Mauris vel neque aliquam, aliquet nulla eu, pulvinar quam.</p>
              </div>
            </div>
            <div className="col-sm">
              <div className="service">
                <h2>Quality</h2>
                <img src={serviceIcon} alt="Icon" className="img-center" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut dapibus risus. Donec convallis hendrerit ligula sodales vestibulum. Mauris vel neque aliquam, aliquet nulla eu, pulvinar quam.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default services;
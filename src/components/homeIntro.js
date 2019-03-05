import React from "react";
import Container from "./homeIntro.module.css";

class homeIntro extends React.Component {
  render() {
    return (
      <Container>
        <header>
          <div id="stripes">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm-6">
                <h1>Trago2Wheels</h1>
                <p>
                  Here at Trago2Wheels, we are dedicated to helping our
                  customers find the best bike to suit your individual riding
                  ability. At Trago2Wheels, you will find a wide range of bikes
                  from affordable 50cc scooters to 650cc motorbikes. We provide
                  high quality images and reviews of every motorbike on our site
                  to make choosing your next purchase simple.
                </p>
              </div>
            </div>
          </div>
        </header>
      </Container>
    );
  }
}

export default homeIntro;

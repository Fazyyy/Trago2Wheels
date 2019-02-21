import React from 'react';
import Swiper from 'react-id-swiper';
import { Link } from "gatsby"

class swiperHome extends React.Component {
  render() {
    const params = {
      autoplay: {
        delay: 5000,
      },
      loop:true,  
      parallax: true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      }
    }

    return (
      <div classname="swiperMaster">
        <Swiper {...params}>
          <div className="swiperSlide1"></div>
          <div className="swiperSlide2"></div>
          <div className="swiperSlide3"></div>
          <div className="swiperSlide4"></div>
          <div className="swiperSlide5"></div>
        </Swiper>
          <div className="swiperOverlay">
            <div className="container">
              <div className="row">
                <div className="col">
                <div className="promo">
                  <h2>On The Road Package</h2>
                  <p>£79.50</p>
                  <Link to="/">Learn more</Link>
                </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default swiperHome;
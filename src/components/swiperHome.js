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
          <div className="swiperSlide1">
            <div className="container-fluid swiperSlideInner">
              <div className="container" style={{ position:'relative' }}>
                <div className="row">
                  <div className="col-sm-6 swiperText">
                    <h2>On The Road with Trago2Wheels</h2>
                    <p>Trago2Wheels is the only locations that offers you the "On The Road" package at a great price when bought with any bike in our extensive range of Scooters, Motorbikes and Scramblers. The On the Road package comes with the following benefits making it unbelievable value:</p>
                    <ul className="swipeList">
                      <li>Item 1</li>
                      <li>Item 1</li>
                      <li>Item 1</li>
                      <li>Item 1</li>
                      <li>Item 1</li>
                      <li>Item 1</li>
                    </ul>
                    <p><Link className="swipeLink" to="/">Find Out More</Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiperSlide2">
            <div className="container-fluid swiperSlideInner">
              <div className="container" style={{ position:'relative' }}>
                <div className="row">
                  <div className="col-sm-6 swiperText">
                    <h2>Herald maverick 125</h2>
                    <p>An off-road inspired motorcycle with an aggressive retro styled look.</p>
                    <p>Featuring spoked wheels, knobbly tyres, unique scrambler lines, side number boards, custom LED tail light and Euro 4 compliant linked braking system.</p>
                    <p><Link className="swipeLink" to="/motorbikes/maverick-125/">Find Out More</Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiperSlide3">
            <div className="container-fluid swiperSlideInner">
              <div className="container" style={{ position:'relative' }}>
                <div className="promo">
                  <h2>On The Road Deal</h2>
                  <p><Link to="/">View</Link></p>
                </div>
                <div className="row">
                  <div className="col-sm-6 swiperText">
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    <p>Sed interdum mattis ligula a finibus. Suspendisse sodales velit nec fringilla convallis. Cras vitae lectus nec nibh molestie tempus et sed ipsum. Quisque lacinia nunc eget mattis feugiat. Nam lacinia tempus quam, et lobortis libero dignissim a. Mauris placerat, ipsum sed bibendum mattis.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiperSlide4">
            <div className="container-fluid swiperSlideInner">
              <div className="container" style={{ position:'relative' }}>
                <div className="promo">
                  <h2>On The Road Deal</h2>
                  <p><Link to="/">View</Link></p>
                </div>
                <div className="row">
                  <div className="col-sm-6 swiperText">
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    <p>Sed interdum mattis ligula a finibus. Suspendisse sodales velit nec fringilla convallis. Cras vitae lectus nec nibh molestie tempus et sed ipsum. Quisque lacinia nunc eget mattis feugiat. Nam lacinia tempus quam, et lobortis libero dignissim a. Mauris placerat, ipsum sed bibendum mattis.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiperSlide5">
            <div className="container-fluid swiperSlideInner">
              <div className="container" style={{ position:'relative' }}>
                <div className="promo">
                  <h2>On The Road Deal</h2>
                  <p><Link to="/">View</Link></p>
                </div>
                <div className="row">
                  <div className="col-sm-6 swiperText">
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    <p>Sed interdum mattis ligula a finibus. Suspendisse sodales velit nec fringilla convallis. Cras vitae lectus nec nibh molestie tempus et sed ipsum. Quisque lacinia nunc eget mattis feugiat. Nam lacinia tempus quam, et lobortis libero dignissim a. Mauris placerat, ipsum sed bibendum mattis.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiperSlide6">
            <div className="container-fluid swiperSlideInner">
              <div className="container" style={{ position:'relative' }}>
                <div className="promo">
                  <h2>On The Road Deal</h2>
                  <p><Link to="/">View</Link></p>
                </div>
                <div className="row">
                  <div className="col-sm-6 swiperText">
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    <p>Sed interdum mattis ligula a finibus. Suspendisse sodales velit nec fringilla convallis. Cras vitae lectus nec nibh molestie tempus et sed ipsum. Quisque lacinia nunc eget mattis feugiat. Nam lacinia tempus quam, et lobortis libero dignissim a. Mauris placerat, ipsum sed bibendum mattis.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiperSlide7">
            <div className="container-fluid swiperSlideInner">
              <div className="container" style={{ position:'relative' }}>
                <div className="promo">
                  <h2>On The Road Deal</h2>
                  <p><Link to="/">View</Link></p>
                </div>
                <div className="row">
                  <div className="col-sm-6 swiperText">
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    <p>Sed interdum mattis ligula a finibus. Suspendisse sodales velit nec fringilla convallis. Cras vitae lectus nec nibh molestie tempus et sed ipsum. Quisque lacinia nunc eget mattis feugiat. Nam lacinia tempus quam, et lobortis libero dignissim a. Mauris placerat, ipsum sed bibendum mattis.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Swiper>
      </div>
    )
  }
}

export default swiperHome;
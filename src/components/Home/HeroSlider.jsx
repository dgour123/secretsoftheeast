import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const HeroSlider = () => {
  const [slides, setSlides] = useState([]);

  // JSON fetch
  useEffect(() => {
    fetch("/slides.json") // public folder se fetch ho raha hai
      .then((res) => res.json())
      .then((data) => setSlides(data))
      .catch((err) => console.error("Error fetching slides:", err));
  }, []);

  return (
    <div className="banner-area banner-area3 pos-rel">
      <Swiper
      
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".slider-button-next",
          prevEl: ".slider-button-prev",
        }}
        pagination={{ el: ".slider-pagination", clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
         loop={slides.length > 2}
        
        className="slider__active"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="single-banner single-banner-3 banner-800 d-flex align-items-center pos-rel">
              <div
                className="banner-bg banner-bg3 banner-bg3-1"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
              <div className="container pos-rel">
                <div className="row align-items-center">
                  <div className="col-lg-8 col-md-8">
                    <div className="banner-content banner-content3 banner-content3-1 pt-0">
                      <div
                        className="banner-meta-text"
                        data-animation="fadeInUp"
                        data-delay=".3s"
                      >
                        <span>{slide.subtitle}</span>
                      </div>
                      <h1
                        className="banner-title"
                        data-animation="fadeInUp"
                        data-delay=".5s"
                      >
                        {slide.title}
                      </h1>
                      <div
                        className="banner-btn"
                        data-animation="fadeInUp"
                        data-delay=".7s"
                      >
                        <a href={slide.link} className="fill-btn">
                          {slide.buttonText}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4"></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Arrows */}
      <div className="slider-nav">
        <div className="slider-button-prev">
          <i className="fal fa-long-arrow-left"></i>
        </div>
        <div className="slider-button-next">
          <i className="fal fa-long-arrow-right"></i>
        </div>
      </div>

      {/* Pagination */}
      <div className="slider2-pagination-container">
        <div className="container">
          <div className="slider-pagination slider2-pagination"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;

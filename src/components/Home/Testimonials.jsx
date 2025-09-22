import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((err) => console.error("Error loading testimonials:", err));
  }, []);

  return (
    <div className="testimonial-area pt-85 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="testimonial-wrapper">
              <Swiper
                key={testimonials.length} // re-init jab length change ho
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                  nextEl: ".testimonial-button-next",
                  prevEl: ".testimonial-button-prev",
                }}
                pagination={{ clickable: true }}
                loop={testimonials.length > 1} // loop sirf tab chalega jab 2+ slides hain
              >
                {testimonials.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-single">
                      <div className="testimonial-content">
                        <div className="testimonial-author">
                          <h4 className="author-name">{item.name}</h4>
                          <div className="author-desc">{item.role}</div>
                        </div>
                        <div className="author-text">
                          <p>{item.text}</p>
                        </div>
                        <div className="author-thumb">
                          <img src={item.image} alt={item.name} />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation buttons */}
              <div className="testimonial-nav">
                <div className="testimonial-button-prev">
                  <i className="fal fa-long-arrow-left"></i>
                </div>
                <div className="testimonial-button-next">
                  <i className="fal fa-long-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

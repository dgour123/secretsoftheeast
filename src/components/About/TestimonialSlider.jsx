import React from "react";

// Swiper core + required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const TestimonialSlider = () => {
  // JSON content directly inside component
  const testimonials = [
    {
      id: 1,
      name: "Charlotte Sophia",
      role: "Team Leader, Codex",
      text: "Buying a package usually means you buy two or more services, with each service coming at a discounted price. For example, instead of buying a manicure for combo of the two carrot.",
      image: "/assets/img/testimonial/author-1.jpg"
    },
    {
      id: 2,
      name: "John Doe",
      role: "Developer, TechCorp",
      text: "Their service is outstanding. Highly recommended for anyone looking for quality and professionalism.",
      image: "/assets/img/testimonial/author-1.jpg"
    },
    {
      id: 3,
      name: "Jane Smith",
      role: "Designer, Creatives",
      text: "I loved the experience! The team is very supportive and the results exceeded my expectations.",
      image: "/assets/img/testimonial/author-1.jpg"
    }
  ];

  return (
    <div className="testimonial-area pt-85 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="testimonial-wrapper">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                  nextEl: ".testimonial-button-next",
                  prevEl: ".testimonial-button-prev",
                }}
                pagination={{ clickable: true, el: ".testimonial-pagination" }}
                loop={true}
              >
                {testimonials.map((item) => (
                  <SwiperSlide key={item.id}>
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

              <div className="testimonial-pagination"></div>

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

export default TestimonialSlider;

import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  // JSON data ko yahan define kiya
  const aboutData = {
    imageMain: "/assets/img/about/about-thumb.jpg",
    imageBadge: "/assets/img/about/1990.png",
    title: "The fashion everything that you want in your life.",
    description:
      "We get it. Getting dressed can be hard and we’re here to help with that. Whether you’re more of a casual girl I feel you, give me joggers all day every day or are looking to spice things up for your next date night, you’ve come to the right place. Dig through our piles of posts. Booties, booties, booties rockin’ everywhere! When it comes to Fall and Winter fashion, boots are my weakness. As part of our growth, Roman has launched a new range of shoes and handbags.",
    button: {
      text: "Explore Products",
      url: "/shop",
    },
  };

  return (
    <section className="about-area pb-90">
      <div className="container container-small">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6">
            <div className="about-thumb pos-rel mb-30">
              <img
                className="about-thumb-main"
                src={aboutData.imageMain}
                alt="about"
              />
              <img
                className="est-time-img"
                src={aboutData.imageBadge}
                alt="badge"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6">
            <div className="about-content mb-30 align-pb-35">
              <div className="section-title">
                <h2 className="section-main-title mb-30">{aboutData.title}</h2>
              </div>
              <p className="mb-40">{aboutData.description}</p>
              <div className="about-btn">
                <Link to={aboutData.button.url} className="fill-btn">
                  {aboutData.button.text}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

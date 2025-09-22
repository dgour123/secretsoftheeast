import React, { useEffect, useState } from "react";

const CategoryBanner = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    fetch("/banners.json")
      .then((res) => res.json())
      .then((data) => setBanners(data.banners));
  }, []);

  if (!banners.length) return null;

  return (
    <div className="category-banner-area pt-30">
      <div className="container">
        <div className="row">
          {banners.map((banner) => (
            <div key={banner.id} className="col-xl-6 col-lg-6 col-md-12">
              <div className="category-banner-single category-banner2 mb-30 pos-rel">
                <div className="category-banner-img">
                  <img src={banner.image} alt={banner.title} />
                </div>
                <div className="category-banner-inner">
                  <div className="category-banner-content">
                    <a href={banner.link} className="product-category">
                      <span>{banner.title}</span> {banner.subtitle}
                    </a>
                    <p className="category-short-desc">{banner.desc}</p>
                    <a href={banner.link} className="border-btn">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;

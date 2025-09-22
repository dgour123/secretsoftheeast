import React, { useEffect, useState } from "react";

const CategoryArea = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);

  if (!categories.length) return null;

  return (
    <div className="category-area3 pb-0">
      <div className="container">
        <div className="product-category3-wrapper">
          <div className="row">
            {/* First item (Activewear) */}
            <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-6 order-xxl-1">
              {categories[0] && (
                <div className="product-category2-single pos-rel mb-30">
                  <div className="product-category-img">
                    <a href={categories[0].link}>
                      <img src={categories[0].image} alt={categories[0].title} />
                    </a>
                  </div>
                  <div className="product-category-inner">
                    <div className="product-category-content">
                      <a href={categories[0].link} className="product-category">
                        {categories[0].title}
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Second item (Hot Dresses) */}
            <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-6 order-xxl-3">
              {categories[1] && (
                <div className="product-category2-single pos-rel mb-30">
                  <div className="product-category-img">
                    <a href={categories[1].link}>
                      <img src={categories[1].image} alt={categories[1].title} />
                    </a>
                  </div>
                  <div className="product-category-inner">
                    <div className="product-category-content">
                      <a href={categories[1].link} className="product-category">
                        {categories[1].title}
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Remaining items */}
            <div className="col-xxl-4 col-xl-12 order-xxl-2">
              <div className="row">
                {categories.slice(2).map((cat) => (
                  <div
                    key={cat.id}
                    className="col-xxl-6 col-xl-3 col-lg-3 col-md-6 col-sm-6"
                  >
                    <div className="product-category2-single pos-rel mb-30">
                      <div className="product-category-img">
                        <a href={cat.link}>
                          <img src={cat.image} alt={cat.title} />
                        </a>
                      </div>
                      <div className="product-category-inner">
                        <div className="product-category-content">
                          <a href={cat.link} className="product-category">
                            {cat.title}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryArea;

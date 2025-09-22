import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, selectCartItems } from '../cartSlice';
import { toast } from 'react-toastify';


  const ProductTabs = () => {

  const dispatch = useDispatch()
  const cartItem = useSelector(selectCartItems)

  const handleAddToCart = (product) => {
    dispatch(addToCart({
       id: product.id,
        name: product.name,
        price: Number(product.price),  // make sure price numeric
        image: product.image[0]
    }))
      // Success toast
  toast.success("Item added to cart!");
  }
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("best-seller");

  useEffect(() => {
    fetch("/products.json") // public folder se direct access
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Failed to load products:", err));
  }, []);

  // ✅ Array-based category filtering
  const filteredProducts = products.filter(product =>
    product.category.includes(activeTab)
  );

  const tabs = ["best-seller", "hot-collection", "trendy", "new-arrival"];

  return (
    <section className="product-area pt-120 pb-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="section-title text-center">
              <h2 className="section-main-title mb-35">Products of the Week</h2>
            </div>
          </div>
        </div>

        <div className="product-tab-section product-tab-wrapper">
          {/* Tabs */}
          <div className="tabs product-tab-nav mb-40">
            {tabs.map(tab => (
              <button
                key={tab}
                className={activeTab === tab ? "active" : ""}
                onClick={() => setActiveTab(tab)}
              >
                {tab.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
              </button>
            ))}
          </div>

          {/* Product Slider */}
          <Swiper
            key={activeTab} // reinitialize on tab change
            modules={[Navigation]}
            slidesPerView={4}
            spaceBetween={20}
            navigation
            loop={filteredProducts.length > 4}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 10 },
              640: { slidesPerView: 3, spaceBetween: 15 },
              1024: { slidesPerView: 5, spaceBetween: 20 },
            }}
          >
            {filteredProducts.map(product => (
              <SwiperSlide key={product.id}>
                <div className="single-product single-product-st2">
                  <div className="product-image pos-rel">
                    <a href="shop-details.html">
                      <img src={product.image} alt={product.name} />
                    </a>

                    <div className="product-action-bottom">
                      <a href="#" className="quick-view-btn">
                        <i className="fal fa-eye"></i>
                      </a>
                      <button onClick={() => handleAddToCart(product)} className="add-cart-btn">
                        <i className="fal fa-shopping-bag"></i> Add to Cart
                      </button>
                      <a href="#" className="wishlist-btn">
                        <i className="fal fa-heart"></i>
                      </a>
                    </div>

                    {product.badge && (
                      <div className="product-sticker-wrapper">
                        <span className={`product-sticker ${product.badge}`}>
                          {product.badge.toUpperCase()}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="product-desc">
                    <div className="product-name">
                      <a href="shop-details.html">{product.name}</a>
                    </div>
                    <div className="product-price">
                      <span className="price-now"> $ {product.price}</span>
                      {product.priceOld > 0 && (
                        <span className="price-old">${product.priceOld}</span>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProductTabs;

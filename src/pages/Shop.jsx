import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import { useDispatch } from "react-redux";
import { addToCart } from "../components/cartSlice";
import { toast } from "react-toastify";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  // JSON file se products load karo
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to load products:", err));
  }, []);

  // Add to cart function
  const handleAddToCart = (product) => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: Number(product.price),
      image: product.image[0]
    }));

    toast.success(`${product.name} added to cart!`);
  };

  return (
    <>
      <PageTitle />  {/* No need to pass title/currentPage */}
      <div classNameName="container py-5">
           {/* <!-- shop main area start  --> */}
      <div className="shop-main-area pt-120 pb-10">
         <div className="container">
            <div className="row">
                 <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="sidebar-widget-wrapper mb-110 d-none d-lg-block">
                     <div className="product-filters mb-50">
                        <div className="filter-widget">
                           <h4 className="filter-widget-title drop-btn">Search</h4>
                           <div className="filter-widget-content">
                              <div className="filter-widget-search">
                                 <input type="text" placeholder="Search here.." />
                                 <button type="submit"><i className="fal fa-search"></i></button>
                              </div>

                           </div>
                        </div>
                        <div className="filter-widget">
                           <h4 className="filter-widget-title drop-btn">Category</h4>
                           <div className="filter-widget-content">
                              <div className="category-items">
                                 <a href="shop.html" className="category-item">
                                    <div className="category-name">Shirts</div> <span className="category-items-number">8</span>
                                 </a>
                                 <a href="shop.html" className="category-item">
                                    <div className="category-name">Pants</div> <span className="category-items-number">12</span>
                                 </a>
                                 <a href="shop.html" className="category-item">
                                    <div className="category-name">Jackets</div> <span
                                       className="category-items-number">17</span>
                                 </a>
                                 <a href="shop.html" className="category-item">
                                    <div className="category-name">Leggings</div> <span
                                       className="category-items-number">6</span>
                                 </a>
                                 <a href="shop.html" className="category-item">
                                    <div className="category-name">Beachware</div> <span
                                       className="category-items-number">25</span>
                                 </a>
                                 <a href="shop.html" className="category-item">
                                    <div className="category-name">Underwear</div> <span
                                       className="category-items-number">17</span>
                                 </a>
                                 <a href="shop.html" className="category-item">
                                    <div className="category-name">Bag</div> <span className="category-items-number">15</span>
                                 </a>
                                 <a href="shop.html" className="category-item">
                                    <div className="category-name">Belt</div> <span className="category-items-number">9</span>
                                 </a>
                              </div>
                           </div>
                        </div>
                        <div className="filter-widget">
                           <h4 className="filter-widget-title drop-btn">Size</h4>
                           <div className="filter-widget-content">
                              <div className="category-sizes">
                                 <div className="category-size">
                                    <input className="check-box" type="checkbox" id="ex-s" />
                                    <label className="check-label" for="ex-s">Extra Small</label>
                                 </div>
                                 <div className="category-size">
                                    <input className="check-box" type="checkbox" id="sm" />
                                    <label className="check-label" for="sm">Small</label>
                                 </div>
                                 <div className="category-size">
                                    <input className="check-box" type="checkbox" id="md" />
                                    <label className="check-label" for="md">Medium</label>
                                 </div>
                                 <div className="category-size">
                                    <input className="check-box" type="checkbox" id="large" />
                                    <label className="check-label" for="large">Large</label>
                                 </div>
                                 <div className="category-size">
                                    <input className="check-box" type="checkbox" id="ex-l" />
                                    <label className="check-label" for="ex-l">Extra Large</label>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="filter-widget">
                           <h4 className="filter-widget-title drop-btn">Rating</h4>
                           <div className="filter-widget-content">
                              <div className="category-ratings">
                                 <div className="category-rating">
                                    <input className="radio-box" type="radio" id="st-5" name="rating" />
                                    <label className="radio-star" for="st-5">
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                    </label>
                                 </div>
                                 <div className="category-rating">
                                    <input className="radio-box" type="radio" id="st-4" name="rating" />
                                    <label className="radio-star" for="st-4">
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fal fa-star"></i>
                                    </label>
                                 </div>
                                 <div className="category-rating">
                                    <input className="radio-box" type="radio" id="st-3" name="rating" />
                                    <label className="radio-star" for="st-3">
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fal fa-star"></i>
                                       <i className="fal fa-star"></i>
                                    </label>
                                 </div>
                                 <div className="category-rating">
                                    <input className="radio-box" type="radio" id="st-2" name="rating" />
                                    <label className="radio-star" for="st-2">
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fal fa-star"></i>
                                       <i className="fal fa-star"></i>
                                       <i className="fal fa-star"></i>
                                    </label>
                                 </div>
                                 <div className="category-rating">
                                    <input className="radio-box" type="radio" id="st-1" name="rating" />
                                    <label className="radio-star" for="st-1">
                                       <i className="fas fa-star"></i>
                                       <i className="fal fa-star"></i>
                                       <i className="fal fa-star"></i>
                                       <i className="fal fa-star"></i>
                                       <i className="fal fa-star"></i>
                                    </label>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="filter-widget">
                           <h4 className="filter-widget-title drop-btn">Colour</h4>
                           <div className="filter-widget-content">
                              <div className="category-colours">
                                 <div className="category-color">
                                    <ul className="product-color-nav">
                                       <li className="cl-pink active">
                                          <img src="assets/img/product/product-img1.jpg" alt="img" />
                                       </li>
                                       <li className="cl-black">
                                          <img src="assets/img/product/product-img2.jpg" alt="img" />
                                       </li>
                                       <li className="cl-blue">
                                          <img src="assets/img/product/product-img3.jpg" alt="img" />
                                       </li>
                                       <li className="cl-red">
                                          <img src="assets/img/product/product-img4.jpg" alt="img" />
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="filter-widget">
                           <h4 className="filter-widget-title drop-btn">Brand</h4>
                           <div className="filter-widget-content">
                              <div className="category-brands">
                                 <div className="category-brand">
                                    <input className="check-box" type="checkbox" id="b-next" />
                                    <label className="check-label" for="b-next">Next</label>
                                 </div>
                                 <div className="category-size">
                                    <input className="check-box" type="checkbox" id="b-ri" />
                                    <label className="check-label" for="b-ri">River Island</label>
                                 </div>
                                 <div className="category-size">
                                    <input className="check-box" type="checkbox" id="b-geox" />
                                    <label className="check-label" for="b-geox">Geox</label>
                                 </div>
                                 <div className="category-size">
                                    <input className="check-box" type="checkbox" id="b-eco" />
                                    <label className="check-label" for="b-eco">Ecomart</label>
                                 </div>
                                 <div className="category-size">
                                    <input className="check-box" type="checkbox" id="b-abby" />
                                    <label className="check-label" for="b-abby">Abby</label>
                                 </div>
                                 <div className="category-size">
                                    <input className="check-box" type="checkbox" id="b-nike" />
                                    <label className="check-label" for="b-nike">Nike</label>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="filter-widget">
                           <h4 className="filter-widget-title drop-btn">Price</h4>
                           <div className="filter-widget-content">
                              <div className="filter-price">
                                 <div className="slider-range">
                                    <div className="slider-range-bar"></div>
                                    <p>
                                       <label for="amount">Price :</label>
                                       <input type="text" id="amount" className="amount" readonly />
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="filter-widget">
                           <h4 className="filter-widget-title drop-btn">Tags</h4>
                           <div className="filter-widget-content">
                              <div className="category-tags">
                                 <a href="#" className="category-tag">Fashion</a>
                                 <a href="#" className="category-tag">Hats</a>
                                 <a href="#" className="category-tag">Sandal</a>
                                 <a href="#" className="category-tag">Bags</a>
                                 <a href="#" className="category-tag">Snacker</a>
                                 <a href="#" className="category-tag">Denim</a>
                                 <a href="#" className="category-tag">Sunglasses</a>
                                 <a href="#" className="category-tag">Beachwear</a>
                                 <a href="#" className="category-tag">Vagabond</a>
                                 <a href="#" className="category-tag">Trend</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-9 col-lg-8 col-md-12">
                  <div className="shop-main-wrapper mb-60">
                     <div className="shop-main-wrapper-head mb-30">
                        <div className="swowing-list">Showing <span>12 of 39</span> Products</div>
                        <div className="sort-type-filter">
                           <div className="sorting-type">
                              <span>Sort by : </span>
                              <select className="sorting-list" name="sorting-list" id="sorting-list">
                                 <option value="1">Default</option>
                                 <option value="2">Most popular</option>
                                 <option value="3">Date</option>
                                 <option value="4">Trending</option>
                                 <option value="4">Featured</option>
                                 <option value="4">Discounted</option>
                              </select>
                           </div>
                           <div className="action-item action-item-filter d-lg-none">
                              <a href="javascript:void(0)" className="view-filter-button">
                                 <i className="flaticon-filter"></i>
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="products-wrapper products-4-column">
                        {/* <div className="single-product">
                           <div className="product-image pos-rel">
                              <a href="shop-details.html" className=""><img src="assets/img/product/800_1034/Image-14-1.jpg"
                                    alt="img" /></a>
                              <div className="product-action">
                                 <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                 <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                 <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                              </div>
                              <div className="product-action-bottom">
                                 <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                    Cart</a>
                              </div>
                           </div>
                           <div className="product-desc">
                              <div className="product-name"><a href="shop-details.html">Varsi Leather Bag</a></div>
                              <div className="product-price">
                                 <span className="price-now">£85.00</span>
                              </div>
                           </div>
                        </div> */}
                           {products.map(product => (
                            <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                              <div className="single-product single-product-st2">
                                <div className="product-image pos-rel">
                                  <Link to={`/product/${product.id}`}>
                                  <img src={product.image[0]} alt={product.name} />
                                   </Link>
                                  <div className="product-action-bottom">
                                    <button onClick={() => handleAddToCart(product)} className="add-cart-btn">
                                      <i className="fal fa-shopping-bag"></i> Add to Cart
                                    </button>
                                  </div>
                                </div>
                                <div className="product-desc">
                                  <Link to={`/product/${product.id}`}>
                                  <h5 className="product-name">{product.name}</h5>
                                  </Link>
                                  <div className="product-price">
                                    <span className="price-now">${product.price}</span>
                                    {product.priceOld && <span className="price-old">${product.priceOld}</span>}
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
      {/* <!-- shop main area end  --> */}
      </div>
       
    </>
  );
};

export default Shop;

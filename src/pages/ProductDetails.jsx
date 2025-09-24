import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../components/cartSlice";
import { toast } from "react-toastify";
import PageTitle from "../components/PageTitle";

const ProductDetails = () => {
  const { id } = useParams(); // url se id milegi
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setProduct(found);
      });
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: Number(product.price),
        image: product.image,
      })
    );
    toast.success("Item added to cart!");
  };
  
  return (
    <>
       <PageTitle />  {/* No need to pass title/currentPage */}
      {/* <!-- shop details area start  --> */}
      <section className="shop-details-area pt-120 pb-90">
        <div className="container container-small">
          <div className="row">
            <div className="col-lg-6">
              <div className="product-details-tab-wrapper mb-30">
                <div className="product-details-tab">
                  {/* Tabs content */}
                  <div className="tab-content" id="productDetailsTab">
                    {product.image.map((img, index) => (
                      <div
                        key={index}
                        className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
                        id={`pro-${index + 1}`}
                        role="tabpanel"
                        aria-labelledby={`pro-${index + 1}-tab`}
                      >
                        <img src={img} alt={product.name}  />
                      </div>
                    ))}

                  </div>
                  {/* Thumbnails nav */}
                  {/* Thumbnails nav */}
                  <ul className="nav nav-tabs mt-3" role="tablist">
                    {product.image.map((img, index) => (
                      <li className="nav-item" key={index}>
                        <button
                          className={`nav-link ${index === 0 ? "active" : ""}`}
                          id={`pro-${index + 1}-tab`}
                          data-bs-toggle="tab"
                          data-bs-target={`#pro-${index + 1}`}
                          type="button"
                          role="tab"
                          aria-controls={`pro-${index + 1}`}
                          aria-selected={index === 0}
                        >
                          <img src={img} alt={`thumb-${index}`} width="60" className="active" />
                        </button>
                      </li>
                    ))}
                  </ul>

                </div>
                
              </div>

            </div>
            <div className="col-lg-6">
              <div className="product-side-info mb-30">
                <h4 className="product-name mb-10">{product.name}</h4>
                <span className="product-price">${product.price}</span>
                <p>{product.description}</p>
                
                {/* <div className="available-sizes">
                  <span>Available Sizes : </span>
                  <div className="product-available-sizes">
                    <span>SM</span>
                    <span>L</span>
                    <span>Xl</span>
                    <span>XXl</span>
                  </div>
                </div> */}
                <div className="product-quantity-cart mb-25">
                  <div className="product-quantity-form">
                    <form action="#">
                      <button className="cart-minus"><i className="far fa-minus"></i></button>
                      <input className="cart-input" type="text" value="1" />
                      <button className="cart-plus"><i className="far fa-plus"></i></button>
                    </form>
                  </div>
                  {/* <a href="cart.html" className="fill-btn">Add to Cart</a> */}
                  <button onClick={handleAddToCart} className="fill-btn">Add to Cart</button>
                </div>
                <a href="wishlist.html" className="border-btn">Add to Wishlist</a>
                {/* <div className="product__details__tag tagcloud mt-25 mb-10"><span>Tags : </span>
                  <a href="#" rel="tag">Shirt</a>
                  <a href="#" rel="tag">Cotton</a>
                  <a href="#" rel="tag">Smart</a>
                  <a href="#" rel="tag">Fashion</a>
                </div> */}
              </div>
            </div>
          </div>

          <div className="product_info-faq-area pb-0">
            <div className="">
              <nav className="product-details-nav">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <a className="nav-item nav-link show" id="nav-general-tab" data-bs-toggle="tab" href="#nav-general"
                    role="tab" aria-selected="false">Description</a>
                  <a className="nav-item nav-link active" id="nav-seller-tab" data-bs-toggle="tab" href="#nav-seller"
                    role="tab" aria-selected="true">Reviews</a>
                </div>
              </nav>
              <div className="tab-content product-details-content" id="nav-tabContent">
                <div className="tab-pane fade" id="nav-general" role="tabpanel">
                  <div className="tabs-wrapper mt-35">
                    <div className="product__details-des">
                      <p>Very clean and organized with easy to follow tutorials, Exercises, and solutions. This
                        course
                        does start from the
                        beginning with very little knowledge and gives a great overview of common tools used
                        for data
                        science and progresses
                        into more complex concepts and ideas. This course is amazing..! I started this course
                        as a
                        beginner and learnt a lot. Instructors
                        are great. Query handling
                        can be improved.Overall very happy with the course.</p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade active show" id="nav-seller" role="tabpanel">
                  <div className="tabs-wrapper mt-35">
                    <div className="course-review-item mb-30">
                      <div className="course-reviews-img">
                        <a href="#"><img src="/assets/img/testimonial/course-reviews-1.png"
                          alt="image not found" /></a>
                      </div>
                      <div className="course-review-list">
                        <h5><a href="#">Sotapdi Kunda</a></h5>
                        <div className="course-start-icon">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <span>55 min ago</span>
                        </div>
                        <p>Very clean and organized with easy to follow tutorials, Exercises, and
                          solutions.
                          This course does start from the beginning with very little knowledge and
                          gives a
                          great overview of common tools used for data science and progresses into
                          more
                          complex concepts and ideas.</p>
                      </div>
                    </div>
                    <div className="course-review-item mb-30">
                      <div className="course-reviews-img">
                        <a href="#"><img src="/assets/img/testimonial/course-reviews-2.png"
                          alt="image not found" /></a>
                      </div>
                      <div className="course-review-list">
                        <h5><a href="#">Samantha</a></h5>
                        <div className="course-start-icon">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <span>45 min ago</span>
                        </div>
                        <p>The course is good at explaining very basic intuition of the concepts. It
                          will get
                          you scratching the surface so to say. where this course is unique is the
                          implementation methods are so well defined Thank you to the team !.</p>
                      </div>
                    </div>
                    <div className="course-review-item mb-30">
                      <div className="course-reviews-img">
                        <a href="#"><img src="/assets/img/testimonial/course-reviews-3.png"
                          alt="image not found" /></a>
                      </div>
                      <div className="course-review-list">
                        <h5><a href="#">Michell Mariya</a></h5>
                        <div className="course-start-icon">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <span>30 min ago</span>
                        </div>
                        <p>This course is amazing..!
                          I started this course as a beginner and learnt a lot. Instructors are great.
                          Query
                          handling can be improved.Overall very happy with the course.</p>
                      </div>
                    </div>
                    <div className="product__details-comment ">
                      <div className="comment-title mb-20">
                        <h3>Add a review</h3>
                        <p>Your email address will not be published. Required fields are marked *</p>
                      </div>
                      <div className="comment-rating mb-20">
                        <span>Overall ratings</span>
                        <ul>
                          <li><a href="#"><i className="fas fa-star"></i></a></li>
                          <li><a href="#"><i className="fas fa-star"></i></a></li>
                          <li><a href="#"><i className="fas fa-star"></i></a></li>
                          <li><a href="#"><i className="fas fa-star"></i></a></li>
                          <li><a href="#"><i className="fal fa-star"></i></a></li>
                        </ul>
                      </div>
                      <div className="comment-input-box mb-20">
                        <form action="#">
                          <div className="row">
                            <div className="col-xxl-12">
                              <textarea placeholder="Your review"
                                className="comment-input comment-textarea mb-20"></textarea>
                            </div>
                            <div className="col-xxl-6">
                              <div className="comment-input mb-20">
                                <input type="text" placeholder="Your Name" />
                              </div>
                            </div>
                            <div className="col-xxl-6">
                              <div className="comment-input mb-20">
                                <input type="email" placeholder="Your Email" />
                              </div>
                            </div>
                            <div className="col-xxl-12">
                              <div className="comment-submit">
                                <button type="submit" className="fill-btn">Submit</button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- shop details area end  --> */}
    </>
  )
}

export default ProductDetails
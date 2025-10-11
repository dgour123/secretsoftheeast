import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../components/cartSlice";
import { toast } from "react-toastify";
import PageTitle from "../components/PageTitle";
import { addSlugsToProducts } from "../utils/slugify";

const ProductDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // ✅ quantity state
  const dispatch = useDispatch();

  // ✅ Fetch product by slug
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const withSlugs = addSlugsToProducts(data);
        const found = withSlugs.find((p) => p.slug === slug);
        if (!found) {
          navigate("/shop", { replace: true });
        } else {
          setProduct(found);
        }
      })
      .catch((err) => {
        console.error(err);
        navigate("/shop", { replace: true });
      });
  }, [slug, navigate]);

  if (!product) return <p>Loading...</p>;

  // ✅ Quantity handlers
  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // ✅ Add to cart with quantity
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: Number(product.price),
        image: product.image[0], // first image only
        quantity: quantity,
      })
    );
    toast.success(`${quantity} item(s) added to cart!`);
  };

  return (
    <>
      <PageTitle />

      {/* <!-- shop details area start  --> */}
      <section className="shop-details-area pt-120 pb-90">
        <div className="container container-small">
          <div className="row">
            {/* ✅ LEFT: Product Images */}
            <div className="col-lg-6">
              <div className="product-details-tab-wrapper mb-30">
                <div className="product-details-tab">
                  <div className="tab-content" id="productDetailsTab">
                    {product.image.map((img, index) => (
                      <div
                        key={index}
                        className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
                        id={`pro-${index + 1}`}
                        role="tabpanel"
                        aria-labelledby={`pro-${index + 1}-tab`}
                      >
                        <img src={img} alt={product.name} />
                      </div>
                    ))}
                  </div>

                  {/* ✅ Thumbnails */}
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
                        >
                          <img src={img} alt={`thumb-${index}`} width="60" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* ✅ RIGHT: Product Info */}
            <div className="col-lg-6">
              <div className="product-side-info mb-30">
                <h4 className="product-name mb-10">{product.name}</h4>
                <span className="product-price">${product.price}</span>
                <p>{product.description}</p>

                {/* ✅ Quantity + Add to Cart */}
                <div className="product-quantity-cart mb-25">
                  <div className="product-quantity-form">
                    <div className="quantity-controls">
                      <button
                        type="button"
                        className="cart-minus"
                        onClick={handleDecrease}
                      >
                        <i className="far fa-minus"></i>
                      </button>

                      <input
                        className="cart-input"
                        type="text"
                        value={quantity}
                        readOnly
                      />

                      <button
                        type="button"
                        className="cart-plus"
                        onClick={handleIncrease}
                      >
                        <i className="far fa-plus"></i>
                      </button>
                    </div>
                  </div>

                  <button onClick={handleAddToCart} className="fill-btn">
                    Add to Cart
                  </button>
                </div>

                <a href="#" className="border-btn">
                  Add to Wishlist
                </a>
              </div>
            </div>
          </div>

          {/* ✅ Tabs: Description + Reviews */}
          <div className="product_info-faq-area pb-0">
            <div>
              <nav className="product-details-nav">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <a
                    className="nav-item nav-link show active"
                    id="nav-general-tab"
                    data-bs-toggle="tab"
                    href="#nav-general"
                    role="tab"
                    aria-selected="true"
                  >
                    Description
                  </a>
                  <a
                    className="nav-item nav-link"
                    id="nav-seller-tab"
                    data-bs-toggle="tab"
                    href="#nav-seller"
                    role="tab"
                    aria-selected="false"
                  >
                    Reviews
                  </a>
                </div>
              </nav>

              <div className="tab-content product-details-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-general" role="tabpanel">
                  <div className="tabs-wrapper mt-35">
                    <div className="product__details-des">
                      <p>{product.longDescription || "No description available."}</p>
                    </div>
                  </div>
                </div>

                {/* Dummy Reviews */}
                <div className="tab-pane fade" id="nav-seller" role="tabpanel">
                  <div className="tabs-wrapper mt-35">
                    <p>No reviews yet.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- shop details area end  --> */}
    </>
  );
};

export default ProductDetails;
  
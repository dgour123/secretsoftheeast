import React from "react";
import shirtImg from '../../assets/img/shirt/3/1.jpg'

const WishlistSideDrawer = ({ isWishlistOpen, toggleWishlist }) => {
  return (
    <>
      <div className={`sidebar-action sidebar-wishlist ${isWishlistOpen ? "open" : ""}`}>
        <button className="close-sidebar" onClick={toggleWishlist}>
          Close <i className="fal fa-times"></i>
        </button>
        <h4 className="sidebar-action-title">Wishlist</h4>
        <div className="sidebar-action-list">
          <div className="sidebar-list-item">
            <div className="product-image pos-rel">
              <a href="shop-details.html">
                <img src={shirtImg} alt="img" />
              </a>
            </div>
            <div className="product-desc">
              <div className="product-name">
                <a href="shop-details.html">Women's Faux-Trim Shirt</a>
              </div>
              <div className="product-pricing">
                <span className="price-now">$20.00</span>
              </div>
              <button className="remove-item">
                <i className="fal fa-times"></i>
              </button>
            </div>
          </div>

          <div className="sidebar-list-item">
            <div className="product-image pos-rel">
              <a href="shop-details.html">
                     <img src={shirtImg} alt="img" />
              </a>
            </div>
            <div className="product-desc">
              <div className="product-name">
                <a href="shop-details.html">Skinny Jeans Pant</a>
              </div>
              <div className="product-pricing">
                <span className="price-now">$24.00</span>
              </div>
              <button className="remove-item">
                <i className="fal fa-times"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="product-price-total">
          <span>Subtotal :</span>
          <span className="subtotal-price">$44.00</span>
        </div>

        <div className="sidebar-action-btn">
          <a href="cart.html" className="fill-btn">View cart</a>
          <a href="checkout.html" className="border-btn">Checkout</a>
        </div>
      </div>

      {isWishlistOpen && (
        <div className="offcanvas-overlay" onClick={toggleWishlist}></div>
      )}
    </>
  );
};

export default WishlistSideDrawer;

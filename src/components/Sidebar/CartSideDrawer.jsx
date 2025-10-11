// src/components/CartSideDrawer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotalPrice,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../cartSlice";

const CartSideDrawer = ({ isCartOpen, toggleCart }) => {
  const cartItem = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);
  const dispatch = useDispatch();

  return (
    <>
      <div className={`sidebar-action sidebar-cart ${isCartOpen ? "open" : ""}`}>
        <button className="close-sidebar" onClick={toggleCart}>
          Close <i className="fal fa-times"></i>
        </button>
        <h4 className="sidebar-action-title">Shopping Cart</h4>
        <div className="sidebar-action-list">
          {cartItem.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItem.map((item) => (
              <div key={item.id} className="sidebar-list-item">
                <div className="product-image pos-rel">
                  {/* <img src={item.image[0]} alt={item.name} /> */}
                       <img src={item.image} alt={item.name} />
                </div>
                <div className="product-desc cart-area">
                  <div className="product-name">{item.name}</div>
                  <div className="product-pricing">
                    <span className="item-number">
                      {item.quantity} × ${item.price.toFixed(2)}
                    </span>
                    {/* <span className="price-now">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span> */}
                  </div>

                  {/* Quantity Control */}
                  <div className="product-quantity-form">
                    <button
                      className="cart-minus"
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                    >
                      <i className="far fa-minus"></i>
                    </button>
                    <input
                      className="cart-input"
                      type="text"
                      value={item.quantity}
                      readOnly
                    />
                    <button
                      className="cart-plus"
                      onClick={() => dispatch(increaseQuantity(item.id))}
                    >
                      <i className="far fa-plus"></i>
                    </button>
                  </div>

                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="remove-item"
                  >
                    <i className="fal fa-times"></i>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItem.length > 0 && (
          <>
            <div className="product-price-total">
              <span>Subtotal :</span>
<span className="subtotal-price">$ {Number(totalPrice).toFixed(2)}</span>
            </div>
            <div className="sidebar-action-btn">
              <Link to="/cart" className="fill-btn">
                View cart
              </Link>
              <Link to="/checkout" className="border-btn">
                Checkout
              </Link>
            </div>
          </>
        )}
      </div>

      {isCartOpen && (
        <div
          className="offcanvas-overlay overlay-open"
          onClick={toggleCart}
        ></div>
      )}
    </>
  );
};

export default CartSideDrawer;

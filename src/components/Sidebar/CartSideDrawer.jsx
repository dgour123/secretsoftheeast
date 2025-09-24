import React from "react";
// import shirtImg from '../../assets/img/shirt/3/1.jpg'
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems, selectCartTotalPrice, removeFromCart } from '../cartSlice';


const CartSideDrawer = ({ isCartOpen, toggleCart }) => {
  const cartItem = useSelector(selectCartItems)
  const totalPrice = useSelector(selectCartTotalPrice)
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
            cartItem.map((item, index) => (
              <div key={index}>
                <div className="sidebar-list-item">
                  <div className="product-image pos-rel">
                    <a href="shop-details.html">
                      <img src={item.image} alt={item.name} />
                    </a>
                  </div>
                  <div className="product-desc">
                    <div className="product-name">
                      <a href="shop-details.html">{item.name}</a>
                    </div>
                    <div className="product-pricing">
                      <span className="item-number">1 &times;</span>
                      <span className="price-now">${Number(item.price).toFixed(2)}</span>
                    </div>
                    {/*  Optional: Remove from cart button */}
                    <button onClick={() => dispatch(removeFromCart(item.id))} className="remove-item">
                      <i className="fal fa-times"></i>
                    </button>
                  </div>
                </div>

              </div>
            ))
          )}
        </div>
        <div className="product-price-total">
          <span>Subtotal :</span>
          <span className="subtotal-price">$ {totalPrice}</span>
        </div>
        <div className="sidebar-action-btn">
          <a href="cart.html" className="fill-btn">View cart</a>
          <a href="checkout.html" className="border-btn">Checkout</a>
        </div>


      </div>

      {isCartOpen && (
        <div className="offcanvas-overlay  overlay-open" onClick={toggleCart}></div>
      )}
    </>
  );
};

export default CartSideDrawer;

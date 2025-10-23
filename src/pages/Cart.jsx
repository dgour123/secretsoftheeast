import React, { useState } from "react";

const Cart = () => {
  // Step 1: JSON cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Felted Shirt for Man",
      image: "/assets/img/shirt/3/1.jpg",
      price: 24.0,
      quantity: 1,
    },
    {
      id: 2,
      name: "Denim Jeans Pant",
      image: "/assets/img/pant/1/4.jpg",
      price: 12.0,
      quantity: 1,
    },
    {
      id: 3,
      name: "Denim Official Jacket",
      image: "/assets/img/jacket/2/2.jpg",
      price: 42.0,
      quantity: 1,
    },
  ]);

  // Quantity increase/decrease
  const updateQuantity = (id, type) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "plus"
                  ? item.quantity + 1
                  : item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Totals
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="cart-area pt-100 pb-100">
      <div className="container container-small">
        <div className="row">
          <div className="col-12">
            {cartItems.length === 0 ? (
              // 🛒 Empty Cart Message
              <div className="text-center py-5">
                <h3>🛒 Your cart is empty!</h3>
                <p className="mt-3">
                  Looks like you haven’t added anything to your cart yet.
                </p>
                <a href="/shop" className="fill-btn mt-4">
                  Continue Shopping
                </a>
              </div>
            ) : (
              <>
                {/* ✅ Cart Table */}
                <div className="table-content table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Images</th>
                        <th className="cart-product-name">Product</th>
                        <th className="product-price">Unit Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr key={item.id}>
                          <td className="product-thumbnail">
                            <a href="#">
                              <img src={item.image} alt={item.name} />
                            </a>
                          </td>
                          <td className="product-name">
                            <a href="#">{item.name}</a>
                          </td>
                          <td className="product-price">
                            <span className="amount">
                              ${item.price.toFixed(2)}
                            </span>
                          </td>
                          <td className="product-quantity text-center">
                            <div className="product-quantity mt-10 mb-10">
                              <div className="product-quantity-form">
                                <button
                                  className="cart-minus"
                                  onClick={() =>
                                    updateQuantity(item.id, "minus")
                                  }
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
                                  onClick={() =>
                                    updateQuantity(item.id, "plus")
                                  }
                                >
                                  <i className="far fa-plus"></i>
                                </button>
                              </div>
                            </div>
                          </td>
                          <td className="product-subtotal">
                            <span className="amount">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </td>
                          <td className="product-remove">
                            <button onClick={() => removeItem(item.id)}>
                              <i className="fa fa-times"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Coupon Section */}
                <div className="row">
                  <div className="col-12">
                    <div className="coupon-all">
                      <div className="coupon d-flex align-items-center">
                        <input
                          id="coupon_code"
                          className="input-text"
                          name="coupon_code"
                          placeholder="Coupon code"
                          type="text"
                        />
                        <button className="fill-btn" type="submit">
                          Apply coupon
                        </button>
                      </div>
                      <div className="coupon2">
                        <button
                          onClick={() => window.location.reload()}
                          className="fill-btn"
                        >
                          Update cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cart Total Section */}
                <div className="row">
                  <div className="col-md-5 ml-auto">
                    <div className="cart-page-total">
                      <h2>Cart totals</h2>
                      <ul className="mb-20">
                        <li>
                          Subtotal <span>${subtotal.toFixed(2)}</span>
                        </li>
                        <li>
                          Total <span>${subtotal.toFixed(2)}</span>
                        </li>
                      </ul>
                      <a className="border-btn" href="/checkout">
                        Proceed to checkout
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;

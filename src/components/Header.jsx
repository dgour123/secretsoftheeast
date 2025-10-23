import React, { useEffect, useState } from "react";
import CartSideDrawer from "./Sidebar/CartSideDrawer";
import WishlistSideDrawer from "./Sidebar/WishlistSideDrawer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotalPrice } from './cartSlice';


const Header = () => {

  const cartItem = useSelector(selectCartItems)
  const totalPrice = useSelector(selectCartTotalPrice)
 
  const [header, setHeader] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    fetch("/header.json")
      .then((res) => res.json())
      .then((data) => setHeader(data))
      .catch((err) => console.error("Error loading header:", err));
  }, []);

  if (!header) return null;

  return (
    <>
      {/* header area start */}
      <header className="header4 sticky-top bg-light">
        {/* Top Note */}
        {header.note && (
          <div className="header-note">
            <p dangerouslySetInnerHTML={{ __html: header.note.text }} />
            {header.note.showClose && (
              <span className="note-close-btn">
                <i className="flaticon-cancel"></i>
              </span>
            )}
          </div>
        )}

        {/* Top Links */}
        <div className="header-top d-none d-md-block">
          <div className="container header-container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="header-top-link">
                  {header.topLinks.map((link, i) => (
                    <Link key={i} to={link.url} className="text-btn">
                      {link.text}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="header-top-right">
                  <Link to={header.signIn.url} className="text-btn">
                    <i className={header.signIn.icon}></i>
                    {header.signIn.text}
                   </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div id="header-sticky" className="header-main header-main1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-12 col-lg-12">
                <div className="header-main-content-wrapper">
                  {/* Logo + Menu */}
                  <div className="header-main-left header-main-left-header1">
                    <div className="header-logo header1-logo">
                      <Link to={header.logo.url} className="logo-bl">
                        <img src={header.logo.default} alt="logo" />
                      </Link>
                    </div>
                    <div className="main-menu main-menu4 d-none d-lg-block">
                      <nav id="mobile-menu">
                        <ul>
                          {header.menu.map((item, i) => (
                            <li
                              key={i}
                              className={
                                item.children ? "menu-item-has-children" : ""
                              }
                            >
                              <Link to={item.url}>{item.text}</Link>
                              {item.children && (
                                <ul className="sub-menu">
                                  {item.children.map((child, j) => (
                                    <li key={j}>
                                      <Link to={child.url}>{child.text}</Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                  </div>

                  {/* Right Section */}
                  <div className="header-main-right header-main-right-header1">
                    <form className="filter-search-input header-search d-none d-xl-inline-block">
                      <input
                        type="text"
                        placeholder={header.searchPlaceholder}
                      />
                      <button>
                        <i className="fal fa-search"></i>
                      </button>
                    </form>

                    <div className="action-list d-none d-md-flex action-list-header4">
                      {/* Cart */}
                      <div className="action-item action-item-cart">
                        <button onClick={() => setIsCartOpen(true)}>
                          <i className={header.actions.cart.icon}></i>
                          <span className="action-item-number">
                            {/* {header.actions.cart.count} */}
                            {cartItem.length}
                          </span>
                        </button>
                      </div>

                      {/* Wishlist */}
                      <div className="action-item action-item-wishlist">
                        <button onClick={() => setIsWishlistOpen(true)}>
                          <i className={header.actions.wishlist.icon}></i>
                          <span className="action-item-number">
                            {header.actions.wishlist.count}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Menu Toggle */}
                  <div className="menu-bar d-xl-none ml-20">
                    <button className="side-toggle" onClick={() => setIsMenuOpen(true)}>
                      <i className="fal fa-bars"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Side Menu */}
      <div className={`fix side-info ${isMenuOpen ? "open" : ""}`}>
        <div className="side-info-content">
          <div className="offset-widget offset-logo mb-40">
            <div className="row align-items-center">
              <div className="col-9">
                <Link to={header.logo.url}>
                  <img src={header.logo.mobile} alt="Logo" />
                </Link>
              </div>
              <div className="col-3 text-end">
                <button className="side-info-close" onClick={() => setIsMenuOpen(false)}>
                  <i className="fal fa-times"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="mobile-menu d-lg-none fix">
            <ul>
              {header.mobileMenu.map((link, i) => (
                <li key={i}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div className="offcanvas-overlay" onClick={() => setIsMenuOpen(false)}></div>
      )}

      {/* Side Drawers */}
      <CartSideDrawer isCartOpen={isCartOpen} toggleCart={() => setIsCartOpen(false)} />
      <WishlistSideDrawer isWishlistOpen={isWishlistOpen} toggleWishlist={() => setIsWishlistOpen(false)} />
    </>
  );
};

export default Header;

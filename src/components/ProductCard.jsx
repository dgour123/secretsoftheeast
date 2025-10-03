// src/components/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, handleAddToCart }) => {
  if (!product) return null; // safety check

  const productSlug = product.slug; // parent se slug already aaya

  return (
    <>
    <div className="single-product single-product-st2">
      <div className="product-image pos-rel">
        <Link to={`/product/${productSlug}`}>
          <img src={product.image[0]} alt={product.name} />
        </Link>

        <div className="product-action-bottom">
          <button onClick={() => handleAddToCart(product)} className="add-cart-btn">
            <i className="fal fa-shopping-bag"></i> Add to Cart
          </button>
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
          <Link to={`/product/${productSlug}`}>
            <h4>{product.name}</h4>
          </Link>
        </div>
        <div className="product-price">
          <span className="price-now">${product.price}</span>
          {product.priceOld > 0 && <span className="price-old">${product.priceOld}</span>}
        </div>
      </div>
    </div>
    </>
    
  );
};

export default ProductCard;


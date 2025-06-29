import React from "react";
import { Link } from "react-router-dom";
import { isCustomer } from "../api/auth";

const RecommendedProductCard = ({ prod }) => (
  <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
    <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
      {prod.badge && (
        <span
          className={`product-card__badge ${prod.badgeClass} px-8 py-4 text-sm text-white`}
        >
          {prod.badge}
        </span>
      )}
      <Link to="/product-details" className="product-card__thumb flex-center">
        <img src={prod.img} alt={prod.title} />
      </Link>
      <div className="product-card__content p-sm-2">
        <h6 className="title text-lg fw-semibold mt-12 mb-8">
          <Link to="/product-details" className="link text-line-2">
            {prod.title}
          </Link>
        </h6>
        <div className="flex-align gap-4">
          <span className="text-main-600 text-md d-flex">
            <i className="ph-fill ph-storefront" />
          </span>
          <span className="text-gray-500 text-xs">By {prod.store}</span>
        </div>
        <div className="product-card__content mt-12">
          <div className="product-card__price mb-8">
            <span className="text-heading text-md fw-semibold ">
              ${prod.price}{" "}
              <span className="text-gray-500 fw-normal">/Qty</span>
            </span>
            <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
              ${prod.oldPrice}
            </span>
          </div>
          <div className="flex-align gap-6">
            <span className="text-xs fw-bold text-gray-600">{prod.rating}</span>
            <span className="text-15 fw-bold text-warning-600 d-flex">
              <i className="ph-fill ph-star" />
            </span>
            <span className="text-xs fw-bold text-gray-600">
              ({prod.reviews})
            </span>
          </div>
          {isCustomer() && (
            <Link
              to="/cart"
              className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
            >
              Add To Cart <i className="ph ph-shopping-cart" />
            </Link>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default RecommendedProductCard;

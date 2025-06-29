import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactSlider from "react-slider";
import { isCustomer } from "../api/auth";

// Data arrays
const sidebarCategories = [
  { label: "Mobile & Accessories", count: 12 },
  { label: "Laptop", count: 12 },
  { label: "Electronics", count: 12 },
  { label: "Smart Watch", count: 12 },
  { label: "Storage", count: 12 },
  { label: "Portable Devices", count: 12 },
  { label: "Action Camera", count: 12 },
  { label: "Smart Gadget", count: 12 },
  { label: "Monitor", count: 12 },
  { label: "Smart TV", count: 12 },
  { label: "Camera", count: 12 },
  { label: "Monitor Stand", count: 12 },
  { label: "Headphone", count: 12 },
];

const sidebarColors = [
  { name: "Black", count: 12, className: "checked-black", id: "color1" },
  { name: "Blue", count: 12, className: "checked-primary", id: "color2" },
  { name: "Gray", count: 12, className: "checked-gray", id: "color3" },
  { name: "Green", count: 12, className: "checked-success", id: "color4" },
  { name: "Red", count: 12, className: "checked-danger", id: "color5" },
  { name: "White", count: 12, className: "checked-white", id: "color6" },
  { name: "Purple", count: 12, className: "checked-purple", id: "color7" },
];

const sidebarBrands = [
  { name: "Apple", id: "brand1" },
  { name: "Samsung", id: "brand2" },
  { name: "Microsoft", id: "brand3" },
  { name: "Apple", id: "brand4" },
  { name: "HP", id: "brand5" },
  { name: "DELL", id: "DELL" },
  { name: "Redmi", id: "Redmi" },
];

// For demo, you can replace with dynamic fetch/API as needed
const products = Array.from({ length: 15 }).map((_, i) => ({
  id: i + 1,
  img: `assets/images/thumbs/product-two-img${(i % 15) + 1}.png`,
  title: `Product ${i}`,
  rating: 4.8,
  reviews: "17k",
  sold: "18/35",
  price: 14.99,
  oldPrice: 28.99,
  badge:
    i % 5 === 0
      ? "Best Sale"
      : i % 7 === 0
      ? "Sale 50%"
      : i % 11 === 0
      ? "New"
      : null,
  badgeClass:
    i % 5 === 0
      ? "bg-primary-600"
      : i % 7 === 0
      ? "bg-danger-600"
      : i % 11 === 0
      ? "bg-warning-600"
      : "",
}));

const ShopSection = () => {
  const [grid, setGrid] = useState(false);
  const [active, setActive] = useState(false);

  let sidebarController = () => setActive((prev) => !prev);

  return (
    <section className="shop py-80">
      <div className={`side-overlay ${active ? "show" : ""}`}></div>
      <div className="container container-lg">
        <div className="row">
          {/* Sidebar Start */}
          <div className="col-lg-3">
            <div className={`shop-sidebar ${active ? "active" : ""}`}>
              <button
                onClick={sidebarController}
                type="button"
                className="shop-sidebar__close d-lg-none d-flex w-32 h-32 flex-center border border-gray-100 rounded-circle hover-bg-main-600 position-absolute inset-inline-end-0 me-10 mt-8 hover-text-white hover-border-main-600"
              >
                <i className="ph ph-x" />
              </button>
              {/* Category */}
              <div className="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
                <h6 className="text-xl border-bottom border-gray-100 pb-24 mb-24">
                  Product Category
                </h6>
                <ul className="max-h-540 overflow-y-auto scroll-sm">
                  {sidebarCategories.map((cat, idx) => (
                    <li
                      className={`mb-${
                        idx === sidebarCategories.length - 1 ? "0" : "24"
                      }`}
                      key={cat.label}
                    >
                      <Link
                        to="/product-details"
                        className="text-gray-900 hover-text-main-600"
                      >
                        {cat.label} ({cat.count})
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Price filter */}
              <div className="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
                <h6 className="text-xl border-bottom border-gray-100 pb-24 mb-24">
                  Filter by Price
                </h6>
                <div className="custom--range">
                  <ReactSlider
                    className="horizontal-slider"
                    thumbClassName="example-thumb"
                    trackClassName="example-track"
                    defaultValue={[0, 100]}
                    ariaLabel={["Lower thumb", "Upper thumb"]}
                    ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
                    renderThumb={(props, state) => {
                      const { key, ...restProps } = props;
                      return (
                        <div {...restProps} key={state.index}>
                          {state.valueNow}
                        </div>
                      );
                    }}
                    pearling
                    minDistance={10}
                  />
                  <br />
                  <br />
                  <div className="flex-between flex-wrap-reverse gap-8 mt-24 ">
                    <button
                      type="button"
                      className="btn btn-main bg-main-600 border-main-600 h-40 flex-align"
                    >
                      Filter
                    </button>
                  </div>
                </div>
              </div>
              {/* Rating filter (unchanged for demo, can refactor to array if you want) */}
              {/* Color filter */}
              <div className="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
                <h6 className="text-xl border-bottom border-gray-100 pb-24 mb-24">
                  Filter by Color
                </h6>
                <ul className="max-h-540 overflow-y-auto scroll-sm">
                  {sidebarColors.map((color, idx) => (
                    <li
                      className={`mb-${
                        idx === sidebarColors.length - 1 ? "0" : "24"
                      }`}
                      key={color.id}
                    >
                      <div
                        className={`form-check common-check common-radio ${color.className}`}
                      >
                        <input
                          className="form-check-input"
                          type="radio"
                          name="color"
                          id={color.id}
                        />
                        <label className="form-check-label" htmlFor={color.id}>
                          {color.name}({color.count})
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Brand filter */}
              <div className="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
                <h6 className="text-xl border-bottom border-gray-100 pb-24 mb-24">
                  Filter by Brand
                </h6>
                <ul className="max-h-540 overflow-y-auto scroll-sm">
                  {sidebarBrands.map((brand, idx) => (
                    <li
                      className={`mb-${
                        idx === sidebarBrands.length - 1 ? "0" : "24"
                      }`}
                      key={brand.id}
                    >
                      <div className="form-check common-check common-radio">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="brand"
                          id={brand.id}
                        />
                        <label className="form-check-label" htmlFor={brand.id}>
                          {brand.name}
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Advertisement */}
              <div className="shop-sidebar__box rounded-8">
                <img src="assets/images/thumbs/advertise-img1.png" alt="" />
              </div>
            </div>
          </div>
          {/* Sidebar End */}

          {/* Content Start */}
          <div className="col-lg-9">
            {/* Top Start */}
            <div className="flex-between gap-16 flex-wrap mb-40 ">
              <span className="text-gray-900">Showing 1-20 of 85 result</span>
              <div className="position-relative flex-align gap-16 flex-wrap">
                <div className="list-grid-btns flex-align gap-16">
                  <button
                    onClick={() => setGrid(true)}
                    type="button"
                    className={`w-44 h-44 flex-center border rounded-6 text-2xl list-btn border-gray-100 ${
                      grid === true && "border-main-600 text-white bg-main-600"
                    }`}
                  >
                    <i className="ph-bold ph-list-dashes" />
                  </button>
                  <button
                    onClick={() => setGrid(false)}
                    type="button"
                    className={`w-44 h-44 flex-center border rounded-6 text-2xl grid-btn border-gray-100 ${
                      grid === false && "border-main-600 text-white bg-main-600"
                    }`}
                  >
                    <i className="ph ph-squares-four" />
                  </button>
                </div>
                <div className="position-relative text-gray-500 flex-align gap-4 text-14">
                  <label
                    htmlFor="sorting"
                    className="text-inherit flex-shrink-0"
                  >
                    Sort by:
                  </label>
                  <select
                    defaultValue={1}
                    className="form-control common-input px-14 py-14 text-inherit rounded-6 w-auto"
                    id="sorting"
                  >
                    <option value={1}>Popular</option>
                    <option value={2}>Latest</option>
                    <option value={3}>Trending</option>
                    <option value={4}>Matches</option>
                  </select>
                </div>
                <button
                  onClick={sidebarController}
                  type="button"
                  className="w-44 h-44 d-lg-none d-flex flex-center border border-gray-100 rounded-6 text-2xl sidebar-btn"
                >
                  <i className="ph-bold ph-funnel" />
                </button>
              </div>
            </div>
            {/* Top End */}
            <div className={`list-grid-wrapper ${grid && "list-view"}`}>
              {products.map((prod, idx) => (
                <div
                  className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2"
                  key={prod.id}
                >
                  <Link
                    to="/product-details"
                    className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                  >
                    {prod.badge && (
                      <span
                        className={`product-card__badge ${prod.badgeClass} px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0`}
                      >
                        {prod.badge}
                      </span>
                    )}
                    <img src={prod.img} alt="" className="w-auto max-w-unset" />
                  </Link>
                  <div className="product-card__content mt-16">
                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                      <Link
                        to="/product-details"
                        className="link text-line-2"
                        tabIndex={0}
                      >
                        {prod.title}
                      </Link>
                    </h6>
                    <div className="flex-align mb-20 mt-16 gap-6">
                      <span className="text-xs fw-medium text-gray-500">
                        {prod.rating}
                      </span>
                      <span className="text-15 fw-medium text-warning-600 d-flex">
                        <i className="ph-fill ph-star" />
                      </span>
                      <span className="text-xs fw-medium text-gray-500">
                        ({prod.reviews})
                      </span>
                    </div>
                    <div className="mt-8">
                      <div
                        className="progress w-100 bg-color-three rounded-pill h-4"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow={35}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className="progress-bar bg-main-two-600 rounded-pill"
                          style={{ width: "35%" }}
                        />
                      </div>
                      <span className="text-gray-900 text-xs fw-medium mt-8">
                        Sold: {prod.sold}
                      </span>
                    </div>
                    <div className="product-card__price my-20">
                      <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                        ${prod.oldPrice}
                      </span>
                      <span className="text-heading text-md fw-semibold ">
                        ${prod.price}{" "}
                        <span className="text-gray-500 fw-normal">/Qty</span>
                      </span>
                    </div>
                    {isCustomer() && (
                      <Link
                        to="/cart"
                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                        tabIndex={0}
                      >
                        Add To Cart <i className="ph ph-shopping-cart" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination Start */}
            <ul className="pagination flex-center flex-wrap gap-16">
              <li className="page-item">
                <Link
                  className="page-link h-64 w-64 flex-center text-xxl rounded-8 fw-medium text-neutral-600 border border-gray-100"
                  to="#"
                >
                  <i className="ph-bold ph-arrow-left" />
                </Link>
              </li>
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <li
                  className={`page-item${num === 1 ? " active" : ""}`}
                  key={num}
                >
                  <Link
                    className="page-link h-64 w-64 flex-center text-md rounded-8 fw-medium text-neutral-600 border border-gray-100"
                    to="#"
                  >
                    {num.toString().padStart(2, "0")}
                  </Link>
                </li>
              ))}
              <li className="page-item">
                <Link
                  className="page-link h-64 w-64 flex-center text-xxl rounded-8 fw-medium text-neutral-600 border border-gray-100"
                  to="#"
                >
                  <i className="ph-bold ph-arrow-right" />
                </Link>
              </li>
            </ul>
            {/* Pagination End */}
          </div>
          {/* Content End */}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;

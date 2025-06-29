import React from "react";
import { Link } from "react-router-dom";

const BreadcrumbImage = () => {
  // Check login state (use your real auth logic if needed)
  const isLoggedIn = !!localStorage.getItem("authToken"); // or use a hook/context

  return (
    <section
      className="banner-inner  z-1 position-relative py-72 bg-img bg-start"
      style={{ background: "#000" }}
    >
      <div
        className="banner-inner__img position-absolute inset-inline-end-0 top-50 translate-middle-y h-100 arrow-left-clip w-30-percent d-xxl-block d-none"
        style={{ background: "#FE8C07" }}
      ></div>
      <div className="container">
        <div className="banner-inner__content text-center">
          <h4 className="text-white mb-20 fw-semibold">
            Become A Bazario Seller
          </h4>
          <p className="text-white my-20">
            More than half the units sold in our stores from independent
            sellers.
          </p>
          {isLoggedIn ? (
            <Link
              to="/become-a-seller"
              className="btn btn-main bg-main-600 border-main-600 bg-main-600 rounded-8"
            >
              Become a Seller
            </Link>
          ) : (
            <Link
              to="/account"
              className="btn btn-main bg-main-600 border-main-600 bg-main-600 rounded-8"
            >
              Register as a Seller
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbImage;

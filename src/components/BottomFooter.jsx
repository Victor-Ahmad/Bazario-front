import React from "react";
import { Link } from "react-router-dom";

const BottomFooter = () => {
  return (
    <div className="bottom-footer bg-main-50  ">
      <div className="container container-lg">
        <div className="bottom-footer__inner flex-between flex-wrap gap-16 py-16">
          <div className="footer-item">
            <div className="flex-align gap-16 mb-16">
              <span className="w-32 h-32 flex-center rounded-circle bg-main-600 text-white text-md flex-shrink-0">
                <i className="ph-fill ph-map-pin" />
              </span>
              <span className="text-md text-gray-900 ">
                Street Name, City, Country
              </span>
            </div>
            <div className="flex-align gap-16 mb-16">
              <span className="w-32 h-32 flex-center rounded-circle bg-main-600 text-white text-md flex-shrink-0">
                <i className="ph-fill ph-phone-call" />
              </span>
              <div className="flex-align gap-16 flex-wrap">
                <Link
                  to="/tel:+00123456789"
                  className="text-md text-gray-900 hover-text-main-600"
                >
                  Phone Number 1
                </Link>
                <span className="text-md text-main-600 ">or</span>
                <Link
                  to="/tel:+00987654012"
                  className="text-md text-gray-900 hover-text-main-600"
                >
                  Phone Number 2
                </Link>
              </div>
            </div>
            <div className="flex-align gap-16 mb-16">
              <span className="w-32 h-32 flex-center rounded-circle bg-main-600 text-white text-md flex-shrink-0">
                <i className="ph-fill ph-envelope" />
              </span>
              <Link
                to="/mailto:support24@bazario.com"
                className="text-md text-gray-900 hover-text-main-600"
              >
                support24@bazario.com
              </Link>
            </div>
          </div>
          <p className="bottom-footer__text ">
            Bazario eCommerce © 2025. All Rights Reserved{" "}
          </p>
          <ul className="flex-align gap-16">
            <li>
              <Link
                to="/https://www.facebook.com"
                className="w-44 h-44 flex-center bg-main-100 text-main-600 text-xl rounded-circle hover-bg-main-600 hover-text-white"
              >
                <i className="ph-fill ph-facebook-logo" />
              </Link>
            </li>
            <li>
              <Link
                to="/https://www.twitter.com"
                className="w-44 h-44 flex-center bg-main-100 text-main-600 text-xl rounded-circle hover-bg-main-600 hover-text-white"
              >
                <i className="ph-fill ph-twitter-logo" />
              </Link>
            </li>
            <li>
              <Link
                to="/https://www.linkedin.com"
                className="w-44 h-44 flex-center bg-main-100 text-main-600 text-xl rounded-circle hover-bg-main-600 hover-text-white"
              >
                <i className="ph-fill ph-instagram-logo" />
              </Link>
            </li>
            <li>
              <Link
                to="/https://www.pinterest.com"
                className="w-44 h-44 flex-center bg-main-100 text-main-600 text-xl rounded-circle hover-bg-main-600 hover-text-white"
              >
                <i className="ph-fill ph-linkedin-logo" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;

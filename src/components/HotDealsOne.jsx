import React, { useEffect, useState, memo } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

// Countdown helper
function getCountdown() {
  // Target: Tomorrow at 00:00:00
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  const diff = tomorrow - now;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

// Product Data
const hotDealsProducts = [
  {
    img: "assets/images/thumbs/product-img8.png",
    title: "Marcel's Modern Pantry Almond Unsweetened",
    badge: "Sale 50%",
    badgeClass: "bg-danger-600",
    store: "Lucky Supermarket",
    price: 14.99,
    oldPrice: 28.99,
    rating: 4.8,
    reviews: "17k",
  },
  {
    img: "assets/images/thumbs/product-img9.png",
    title: "O Organics Milk, Whole, Vitamin D",
    badge: "Sale 50%",
    badgeClass: "bg-danger-600",
    store: "Lucky Supermarket",
    price: 14.99,
    oldPrice: 28.99,
    rating: 4.8,
    reviews: "17k",
  },
  {
    img: "assets/images/thumbs/product-img10.png",
    title: "Whole Grains and Seeds Organic Bread",
    badge: "Best Sale",
    badgeClass: "bg-info-600",
    store: "Lucky Supermarket",
    price: 14.99,
    oldPrice: 28.99,
    rating: 4.8,
    reviews: "17k",
  },
  {
    img: "assets/images/thumbs/product-img18.png",
    title: "Tropicana 100% Juice, Orange, No Pulp",
    badge: "New",
    badgeClass: "bg-warning-600",
    store: "Lucky Supermarket",
    price: 14.99,
    oldPrice: 28.99,
    rating: 4.8,
    reviews: "17k",
  },
];

// Arrows
const SampleNextArrow = memo(({ className, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`${className} slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1`}
  >
    <i className="ph ph-caret-right" />
  </button>
));
const SamplePrevArrow = memo(({ className, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`${className} slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1`}
  >
    <i className="ph ph-caret-left" />
  </button>
));

// Slider settings
const sliderSettings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    { breakpoint: 1399, settings: { slidesToShow: 3 } },
    { breakpoint: 1199, settings: { slidesToShow: 2 } },
    { breakpoint: 575, settings: { slidesToShow: 1 } },
  ],
};

const HotDealsOne = () => {
  const [timeLeft, setTimeLeft] = useState(getCountdown());

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getCountdown()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hot-deals pt-80">
      <div className="container container-lg">
        <div className="section-heading">
          <div className="flex-between flex-wrap gap-8">
            <h5 className="mb-0">Hot Deals Today</h5>
            <div className="flex-align mr-point gap-16">
              <Link
                to="/shop"
                className="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline"
              >
                View All Deals
              </Link>
            </div>
          </div>
        </div>
        <div className="row g-12">
          {/* Countdown */}
          <div className="col-md-4">
            <div className="hot-deals position-relative rounded-16 bg-main-600 overflow-hidden p-28 z-1 text-center">
              <img
                src="assets/images/shape/offer-shape.png"
                alt=""
                className="position-absolute inset-block-start-0 inset-inline-start-0 z-n1 w-100 h-100 opacity-6"
              />
              <div className="hot-deals__thumb">
                <img src="assets/images/thumbs/hot-deals-img.png" alt="" />
              </div>
              <div className="py-xl-4">
                <h4 className="text-white mb-8">Fresh Vegetables</h4>
                <div className="countdown my-32">
                  <ul className="countdown-list flex-center flex-wrap">
                    <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium colon-white">
                      <span className="days" />
                      {timeLeft.days} Days
                    </li>
                    <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium colon-white">
                      <span className="hours" />
                      {timeLeft.hours} Hours
                    </li>
                    <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium colon-white">
                      <span className="minutes" />
                      {timeLeft.minutes} Min
                    </li>
                    <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium colon-white">
                      <span className="seconds" />
                      {timeLeft.seconds} Sec
                    </li>
                  </ul>
                </div>
                <Link
                  to="/shop"
                  className="mt-16 btn btn-main bg-main-600 border-main-600 fw-medium d-inline-flex align-items-center rounded-pill gap-8"
                >
                  Shop Now
                  <span className="icon text-xl d-flex">
                    <i className="ph ph-arrow-right" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          {/* Slider */}
          <div className="col-md-8">
            <div className="hot-deals-slider arrow-style-two">
              <Slider {...sliderSettings}>
                {hotDealsProducts.map((prod, idx) => (
                  <div key={idx}>
                    <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                      {prod.badge && (
                        <span
                          className={`product-card__badge ${prod.badgeClass} px-8 py-4 text-sm text-white`}
                        >
                          {prod.badge}
                        </span>
                      )}
                      <Link
                        to="/product-details"
                        className="product-card__thumb flex-center"
                      >
                        <img src={prod.img} alt={prod.title} />
                      </Link>
                      <div className="product-card__content p-sm-2">
                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                          <Link
                            to="/product-details"
                            className="link text-line-2"
                          >
                            {prod.title}
                          </Link>
                        </h6>
                        <div className="flex-align gap-4">
                          <span className="text-main-600 text-md d-flex">
                            <i className="ph-fill ph-storefront" />
                          </span>
                          <span className="text-gray-500 text-xs">
                            By {prod.store}
                          </span>
                        </div>
                        <div className="product-card__content mt-12">
                          <div className="product-card__price mb-8">
                            <span className="text-heading text-md fw-semibold ">
                              ${prod.price}
                              <span className="text-gray-500 fw-normal">
                                /Qty
                              </span>
                            </span>
                            <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                              ${prod.oldPrice}
                            </span>
                          </div>
                          <div className="flex-align gap-6">
                            <span className="text-xs fw-bold text-gray-600">
                              {prod.rating}
                            </span>
                            <span className="text-15 fw-bold text-warning-600 d-flex">
                              <i className="ph-fill ph-star" />
                            </span>
                            <span className="text-xs fw-bold text-gray-600">
                              ({prod.reviews})
                            </span>
                          </div>
                          <Link
                            to="/cart"
                            className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          >
                            Add To Cart <i className="ph ph-shopping-cart" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotDealsOne;

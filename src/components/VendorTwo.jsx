import React, { useState } from "react";
import { Link } from "react-router-dom";

// Example talent data (replace images if needed)
const talents = [
  {
    id: 1,
    name: "Sarah Smith",
    title: "Professional Photographer",
    img: "assets/images/thumbs/vendors-two-img1.png",
    avatar: "assets/images/thumbs/vendors-two-icon1.png",
    rating: 4.8,
    ratingCount: "240",
    location: "Munich, Germany",
    email: "sarah.photography@email.com",
    phone: "+49 1512 3456789",
    service: "Photography",
  },
  {
    id: 2,
    name: "Ali Hassan",
    title: "Expert Plumber",
    img: "assets/images/thumbs/vendors-two-img2.png",
    avatar: "assets/images/thumbs/vendors-two-icon2.png",
    rating: 4.9,
    ratingCount: "131",
    location: "Berlin, Germany",
    email: "ali.plumbing@email.com",
    phone: "+49 1634 567890",
    service: "Plumbing",
  },
  {
    id: 3,
    name: "Julia Weber",
    title: "UI/UX Designer",
    img: "assets/images/thumbs/vendors-two-img3.png",
    avatar: "assets/images/thumbs/vendors-two-icon3.png",
    rating: 4.7,
    ratingCount: "98",
    location: "Hamburg, Germany",
    email: "julia.design@email.com",
    phone: "+49 1745 678901",
    service: "Design",
  },
  {
    id: 4,
    name: "Mohammed El Amrani",
    title: "Mobile App Developer",
    img: "assets/images/thumbs/vendors-two-img4.png",
    avatar: "assets/images/thumbs/vendors-two-icon1.png",
    rating: 4.9,
    ratingCount: "210",
    location: "Stuttgart, Germany",
    email: "mohammed.apps@email.com",
    phone: "+49 1766 789012",
    service: "Programming",
  },
  {
    id: 5,
    name: "Anna Lee",
    title: "Event Organizer",
    img: "assets/images/thumbs/vendors-two-img5.png",
    avatar: "assets/images/thumbs/vendors-two-icon5.png",
    rating: 4.8,
    ratingCount: "75",
    location: "Düsseldorf, Germany",
    email: "anna.events@email.com",
    phone: "+49 1597 890123",
    service: "Event Management",
  },
  {
    id: 6,
    name: "Farah Alsaadi",
    title: "Professional Chef",
    img: "assets/images/thumbs/vendors-two-img6.png",
    avatar: "assets/images/thumbs/vendors-two-icon6.png",
    rating: 4.7,
    ratingCount: "54",
    location: "Frankfurt, Germany",
    email: "farah.chef@email.com",
    phone: "+49 1512 123456",
    service: "Catering",
  },
  {
    id: 7,
    name: "David K.",
    title: "Math Tutor",
    img: "assets/images/thumbs/vendors-two-img7.png",
    avatar: "assets/images/thumbs/vendors-two-icon7.png",
    rating: 4.8,
    ratingCount: "110",
    location: "Leipzig, Germany",
    email: "david.tutor@email.com",
    phone: "+49 1601 234567",
    service: "Tutoring",
  },
  {
    id: 8,
    name: "Maria Ivanova",
    title: "Professional Translator",
    img: "assets/images/thumbs/vendors-two-img8.png",
    avatar: "assets/images/thumbs/vendors-two-icon8.png",
    rating: 4.6,
    ratingCount: "67",
    location: "Cologne, Germany",
    email: "maria.translate@email.com",
    phone: "+49 1789 234567",
    service: "Translation",
  },
  {
    id: 9,
    name: "Elias Müller",
    title: "Video Editor",
    img: "assets/images/thumbs/vendors-two-img9.png",
    avatar: "assets/images/thumbs/vendors-two-icon2.png",
    rating: 4.9,
    ratingCount: "120",
    location: "Bremen, Germany",
    email: "elias.video@email.com",
    phone: "+49 1710 876543",
    service: "Video Editing",
  },
];

// Example categories for sidebar
const categories = [
  "Photography",
  "Plumbing",
  "Design",
  "Programming",
  "Event Management",
  "Catering",
  "Tutoring",
  "Translation",
  "Video Editing",
  "Personal Training",
  "Gardening",
  "Cleaning",
  "Babysitting",
];

const VendorTwo = () => {
  const [grid, setGrid] = useState(false);
  const [active, setActive] = useState(false);

  // Sidebar open/close
  const sidebarController = () => setActive((prev) => !prev);

  return (
    <section className="vendor-two py-80">
      <div className={`side-overlay ${active ? "show" : ""}`}></div>
      <div className="container container-lg">
        {/* Top Search */}
        <div className="d-flex align-items-center justify-content-between flex-wrap mb-48 gap-16">
          <form action="#" className="input-group w-100 max-w-418">
            <input
              type="text"
              className="form-control common-input rounded-start-3"
              placeholder="Search services, talents, or mini jobs..."
            />
            <button
              type="submit"
              className="input-group-text border-0 bg-main-two-600 rounded-end-3 text-white text-2xl hover-bg-main-two-700 px-24"
            >
              <i className="ph ph-magnifying-glass" />
            </button>
          </form>
          <div className="d-flex align-items-center justify-content-between justify-content-sm-end gap-16 flex-grow-1">
            <div className="text-gray-600 text-md flex-shrink-0">
              <span className="text-neutral-900 fw-semibold">
                {talents.length}
              </span>{" "}
              Results Found
            </div>
            <div className="d-flex align-items-center gap-8 d-sm-flex d-none">
              <button
                onClick={() => setGrid(false)}
                type="button"
                className={`w-44 h-44 flex-center border rounded-6 text-2xl grid-btn border-gray-100 ${
                  !grid && "border-main-600 text-white bg-main-600"
                }`}
              >
                <i className="ph ph-squares-four" />
              </button>
              <button
                onClick={() => setGrid(true)}
                type="button"
                className={`w-44 h-44 flex-center border rounded-6 text-2xl list-btn border-gray-100 ${
                  grid && "border-main-600 text-white bg-main-600"
                }`}
              >
                <i className="ph-bold ph-list-dashes" />
              </button>
            </div>
            <button
              onClick={sidebarController}
              type="button"
              className="w-48 h-48 d-lg-none d-flex flex-center border border-gray-100 rounded-6 text-2xl sidebar-btn"
            >
              <i className="ph-bold ph-funnel" />
            </button>
          </div>
        </div>
        {/* Top Search End */}

        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <div className={`shop-sidebar ${active ? "active" : ""}`}>
              <button
                onClick={sidebarController}
                type="button"
                className="shop-sidebar__close d-lg-none d-flex w-32 h-32 flex-center border border-gray-100 rounded-circle hover-bg-main-600 position-absolute inset-inline-end-0 me-10 mt-8 hover-text-white hover-border-main-600"
              >
                <i className="ph ph-x" />
              </button>
              <div className="d-flex flex-column gap-12 px-lg-0 px-3 py-lg-0 py-4">
                <div className="border border-gray-50 rounded-8 p-24">
                  <h6 className="text-xl border-bottom border-gray-100 pb-24 mb-24">
                    Service Category
                  </h6>
                  <ul className="max-h-540 overflow-y-auto scroll-sm">
                    {categories.map((cat, idx) => (
                      <li className="mb-24" key={cat}>
                        <Link
                          to="#"
                          className="text-gray-900 hover-text-main-600"
                        >
                          {cat} ({Math.floor(Math.random() * 20) + 1})
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Filters (rating/location) can remain as is */}
                <div className="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
                  <h6 className="text-xl border-bottom border-gray-100 pb-24 mb-24">
                    Filter by Rating
                  </h6>
                  {/* ...Keep your rating filters here... */}
                  {/* ...Omitted for brevity, just keep same as you have... */}
                </div>
                <div className="border border-gray-50 rounded-8 p-24">
                  <h6 className="text-xl border-bottom border-gray-100 pb-24 mb-24">
                    Filter by Location
                  </h6>
                  {/* ...Keep your location filters here... */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8">
            {/* Service Listings */}
            <div
              className={`list-grid-wrapper vendors-two-item-wrapper grid-cols-3 ${
                grid ? "list-view" : ""
              }`}
            >
              {talents.map((talent) => (
                <div
                  key={talent.id}
                  className="vendors-two-item rounded-12 overflow-hidden bg-color-three border border-neutral-50 hover-border-main-two-600 transition-2"
                >
                  <div className="vendors-two-item__top bg-overlay style-two position-relative">
                    <div className="vendors-two-item__thumbs h-210">
                      <img
                        src={talent.img}
                        alt={talent.name}
                        className="cover-img"
                      />
                    </div>
                    <div className="position-absolute top-0 inset-inline-start-0 w-100 h-100 p-24 z-1 d-flex flex-column justify-content-between">
                      <div className="d-flex align-items-center justify-content-between">
                        <span className="w-80 h-80 flex-center bg-white rounded-circle flex-shrink-0">
                          <img src={talent.avatar} alt={talent.name} />
                        </span>
                        <button
                          type="button"
                          className="text-uppercase border border-white px-16 py-8 rounded-pill text-white text-sm hover-bg-main-two-600 hover-text-white hover-border-main-two-600 transition-2"
                        >
                          FOLLOW
                        </button>
                      </div>
                      <div className="mt-16">
                        <h6 className="text-white fw-semibold mb-12">
                          <Link to="/vendor-two-details">{talent.name}</Link>
                        </h6>
                        <div className="flex-align gap-6">
                          <div className="flex-align gap-8">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <span
                                key={i}
                                className={`text-15 fw-medium ${
                                  i < Math.round(talent.rating)
                                    ? "text-warning-600"
                                    : "text-gray-400"
                                } d-flex`}
                              >
                                <i className="ph-fill ph-star" />
                              </span>
                            ))}
                          </div>
                          <span className="text-xs fw-medium text-white">
                            {talent.rating}
                          </span>
                          <span className="text-xs fw-medium text-white">
                            ({talent.ratingCount})
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="vendors-two-item__content p-24 flex-grow-1">
                    <div className="d-flex flex-column gap-14">
                      <div className="flex-align gap-8">
                        <span className="flex-center text-main-two-600 text-2xl flex-shrink-0">
                          <i className="ph ph-user" />
                        </span>
                        <p className="text-md text-gray-900 fw-semibold">
                          {talent.title}
                        </p>
                      </div>
                      <div className="flex-align gap-8">
                        <span className="flex-center text-main-two-600 text-2xl flex-shrink-0">
                          <i className="ph ph-map-pin-line" />
                        </span>
                        <p className="text-md text-gray-900">
                          {talent.location}
                        </p>
                      </div>
                      <div className="flex-align gap-8">
                        <span className="flex-center text-main-two-600 text-2xl flex-shrink-0">
                          <i className="ph ph-envelope-simple" />
                        </span>
                        <a
                          href={`mailto:${talent.email}`}
                          className="text-md text-gray-900 hover-text-main-60"
                        >
                          {talent.email}
                        </a>
                      </div>
                      <div className="flex-align gap-8">
                        <span className="flex-center text-main-two-600 text-2xl flex-shrink-0">
                          <i className="ph ph-phone" />
                        </span>
                        <a
                          href={`tel:${talent.phone}`}
                          className="text-md text-gray-900 hover-text-main-60"
                        >
                          {talent.phone}
                        </a>
                      </div>
                      <div className="flex-align gap-8">
                        <span className="flex-center text-main-two-600 text-2xl flex-shrink-0">
                          <i className="ph ph-briefcase" />
                        </span>
                        <span className="text-md text-gray-900">
                          {talent.service}
                        </span>
                      </div>
                    </div>
                    <Link
                      to="#"
                      className="btn bg-neutral-600 hover-bg-neutral-700 text-white py-12 px-24 rounded-8 flex-center gap-8 fw-medium mt-24"
                    >
                      View Profile
                      <span className="text-xl d-flex text-main-two-600">
                        <i className="ph ph-arrow-right" />
                      </span>
                    </Link>
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
              {/* Example: page numbers, you can make dynamic */}
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
        </div>
      </div>
    </section>
  );
};

export default VendorTwo;

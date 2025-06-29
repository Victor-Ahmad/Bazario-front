// src/components/UserInfoCard.jsx
import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaBirthdayCake,
  FaIdBadge,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { isCustomer } from "../api/auth";

const iconClasses =
  "w-40 h-40 flex-center rounded-circle border border-gray-100 text-main-600 text-2xl flex-shrink-0 bg-white shadow-sm";

const UserInfoCard = ({ user }) => {
  const navigate = useNavigate();
  const role =
    user.role ||
    (user.roles && user.roles[0]?.name)?.replace(/^\w/, (c) => c.toUpperCase());

  return (
    <div className="user-info-card border border-gray-100 rounded-16 px-24 py-40 bg-white  mx-auto">
      <div className="flex flex-col items-center">
        <h4 className="fw-bold mt-16 mb-8 text-center">User Info</h4>
        <div className="flex-align gap-10 w-full justify-center">
          <span className={iconClasses}>
            <FaUser />
          </span>
          <span className="fw-bold mt-16 mb-8 text-center">{user.name}</span>
        </div>
        <div className="flex flex-col gap-8 items-center mb-16 w-full">
          <div className="flex-align gap-10 w-full justify-center">
            <span className={iconClasses}>
              <FaEnvelope />
            </span>
            <span className="text-md text-gray-700">{user.email}</span>
          </div>
          <div className="flex-align gap-10 w-full justify-center">
            <span className={iconClasses}>
              <FaPhoneAlt />
            </span>
            <span className="text-md text-gray-700">{user.phone}</span>
          </div>
          {user.age && (
            <div className="flex-align gap-10 w-full justify-center">
              <span className={iconClasses}>
                <FaBirthdayCake />
              </span>
              <span className="text-md text-gray-700">Age: {user.age}</span>
            </div>
          )}
        </div>

        {isCustomer() && (
          <>
            <div className="flex-align gap-10 mt-8 mb-12 justify-center">
              <span className={iconClasses}>
                <FaIdBadge />
              </span>
              <span className="badge bg-main-600 text-white px-3 py-2 rounded-8 text-sm">
                {role ? `Role: ${role}` : "No Role"}
              </span>
            </div>
            <button
              className="btn btn-main bg-main-600 border-main-600 mt-12 px-32 py-12 rounded-8 text-lg w-full max-w-xs transition-all"
              onClick={() => navigate("/become-a-seller")}
            >
              Become a Seller
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default UserInfoCard;

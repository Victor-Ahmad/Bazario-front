import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { upgradeToSeller } from "../api/auth"; // You'll create this function

const BecomeASellerForm = () => {
  const [form, setForm] = useState({
    store_owner_name: "",
    store_name: "",
    address: "",
    description: "",
    phone: "",
    email: "",
    logo: null,
  });
  const [loading, setLoading] = useState(false);
  const [generalError, setGeneralError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
    setFieldErrors((errors) => ({ ...errors, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setGeneralError("");
    setFieldErrors({});
    setSuccessMessage("");
    try {
      await upgradeToSeller(form);
      setSuccessMessage("Your request to become a seller has been submitted!");
      navigate("/");
    } catch (err) {
      setGeneralError(err.message || "Upgrade failed.");
      setFieldErrors(err.errors || {});
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      encType="multipart/form-data"
    >
      <h6 className="text-xl mb-32">Become a Seller</h6>
      {generalError && (
        <div className="mb-16 text-danger text-sm">{generalError}</div>
      )}
      {successMessage && (
        <div className="mb-16 text-success text-sm">{successMessage}</div>
      )}

      {/* Store Owner Name */}
      <div className="mb-24">
        <label
          htmlFor="store_owner_name"
          className="text-neutral-900 text-lg mb-8 fw-medium"
        >
          Store Owner Name <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          className={`common-input ${
            fieldErrors.store_owner_name ? "is-invalid" : ""
          }`}
          id="store_owner_name"
          name="store_owner_name"
          placeholder="Enter store owner name"
          value={form.store_owner_name}
          onChange={handleChange}
          required
        />
        {fieldErrors.store_owner_name && (
          <div className="text-danger text-xs mt-2">
            {fieldErrors.store_owner_name[0]}
          </div>
        )}
      </div>

      {/* Store Name */}
      <div className="mb-24">
        <label
          htmlFor="store_name"
          className="text-neutral-900 text-lg mb-8 fw-medium"
        >
          Store Name <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          className={`common-input ${
            fieldErrors.store_name ? "is-invalid" : ""
          }`}
          id="store_name"
          name="store_name"
          placeholder="Enter store name"
          value={form.store_name}
          onChange={handleChange}
          required
        />
        {fieldErrors.store_name && (
          <div className="text-danger text-xs mt-2">
            {fieldErrors.store_name[0]}
          </div>
        )}
      </div>

      {/* Address */}
      <div className="mb-24">
        <label
          htmlFor="address"
          className="text-neutral-900 text-lg mb-8 fw-medium"
        >
          Address <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          className={`common-input ${fieldErrors.address ? "is-invalid" : ""}`}
          id="address"
          name="address"
          placeholder="Enter address"
          value={form.address}
          onChange={handleChange}
          required
        />
        {fieldErrors.address && (
          <div className="text-danger text-xs mt-2">
            {fieldErrors.address[0]}
          </div>
        )}
      </div>

      {/* Logo */}
      <div className="mb-24">
        <label
          htmlFor="logo"
          className="text-neutral-900 text-lg mb-8 fw-medium"
        >
          Store Logo
        </label>
        <input
          type="file"
          accept="image/*"
          className={`common-input ${fieldErrors.logo ? "is-invalid" : ""}`}
          id="logo"
          name="logo"
          onChange={handleChange}
        />
        {fieldErrors.logo && (
          <div className="text-danger text-xs mt-2">{fieldErrors.logo[0]}</div>
        )}
      </div>

      {/* Description */}
      <div className="mb-24">
        <label
          htmlFor="description"
          className="text-neutral-900 text-lg mb-8 fw-medium"
        >
          Store Description
        </label>
        <textarea
          className={`common-input ${
            fieldErrors.description ? "is-invalid" : ""
          }`}
          id="description"
          name="description"
          placeholder="Describe your store"
          value={form.description}
          onChange={handleChange}
          rows={3}
        />
        {fieldErrors.description && (
          <div className="text-danger text-xs mt-2">
            {fieldErrors.description[0]}
          </div>
        )}
      </div>

      {/* Phone */}
      <div className="mb-24">
        <label
          htmlFor="phone"
          className="text-neutral-900 text-lg mb-8 fw-medium"
        >
          Phone <span className="text-danger">*</span>
        </label>
        <input
          type="tel"
          className={`common-input ${fieldErrors.phone ? "is-invalid" : ""}`}
          id="phone"
          name="phone"
          placeholder="Enter phone number"
          value={form.phone}
          onChange={handleChange}
          required
        />
        {fieldErrors.phone && (
          <div className="text-danger text-xs mt-2">{fieldErrors.phone[0]}</div>
        )}
      </div>

      {/* Email */}
      <div className="mb-24">
        <label
          htmlFor="email"
          className="text-neutral-900 text-lg mb-8 fw-medium"
        >
          Email address <span className="text-danger">*</span>
        </label>
        <input
          type="email"
          className={`common-input ${fieldErrors.email ? "is-invalid" : ""}`}
          id="email"
          name="email"
          placeholder="Enter Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />
        {fieldErrors.email && (
          <div className="text-danger text-xs mt-2">{fieldErrors.email[0]}</div>
        )}
      </div>

      {/* Submit */}
      <div className="mt-48">
        <button
          type="submit"
          className="btn btn-main bg-main-600 border-main-600 py-18 px-40"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Upgrade to Seller"}
        </button>
      </div>
    </form>
  );
};

export default BecomeASellerForm;

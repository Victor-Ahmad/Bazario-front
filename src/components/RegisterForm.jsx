import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api/auth";

const RegisterForm = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
  });
  const [loading, setLoading] = useState(false);
  const [generalError, setGeneralError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [registeredUser, setRegisteredUser] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setFieldErrors((errors) => ({ ...errors, [e.target.name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setGeneralError("");
    setFieldErrors({});
    setSuccessMessage("");
    setRegisteredUser(null);

    try {
      const { user, message } = await registerUser(form);
      setSuccessMessage(message || "Account created successfully!");
      setRegisteredUser(user);
      setForm({
        name: "",
        age: "",
        email: "",
        phone: "",
        password: "",
        password_confirmation: "",
      });
      navigate("/");
    } catch (err) {
      setGeneralError(err.message || "Registration failed.");
      setFieldErrors(err.errors || {});
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <h6 className="text-xl mb-32">Register</h6>

      {/* General error */}
      {generalError && (
        <div className="mb-16 text-danger text-sm">{generalError}</div>
      )}

      {/* Success message */}
      {successMessage && (
        <div className="mb-16 text-success text-sm">{successMessage}</div>
      )}

      {/* Registered user info (optional display) */}
      {registeredUser && (
        <div className="mb-24 text-success text-sm">
          Welcome, {registeredUser.name}!<br />
          Your account has been created. Please check your email to verify your
          account.
        </div>
      )}

      {/* Name */}
      <div className="mb-24">
        <label
          htmlFor="register-name"
          className="text-neutral-900 text-lg mb-8 fw-medium"
        >
          Name <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          className={`common-input ${fieldErrors.name ? "is-invalid" : ""}`}
          id="register-name"
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
          required
        />
        {fieldErrors.name && (
          <div className="text-danger text-xs mt-2">{fieldErrors.name[0]}</div>
        )}
      </div>

      {/* Age */}
      <div className="mb-24">
        <label
          htmlFor="register-age"
          className="text-neutral-900 text-lg mb-8 fw-medium"
        >
          Age <span className="text-danger">*</span>
        </label>
        <input
          type="number"
          min={0}
          className={`common-input ${fieldErrors.age ? "is-invalid" : ""}`}
          id="register-age"
          name="age"
          placeholder="Enter your age"
          value={form.age}
          onChange={handleChange}
          required
        />
        {fieldErrors.age && (
          <div className="text-danger text-xs mt-2">{fieldErrors.age[0]}</div>
        )}
      </div>

      {/* Phone */}
      <div className="mb-24">
        <label
          htmlFor="register-phone"
          className="text-neutral-900 text-lg mb-8 fw-medium"
        >
          Phone <span className="text-danger">*</span>
        </label>
        <input
          type="tel"
          className={`common-input ${fieldErrors.phone ? "is-invalid" : ""}`}
          id="register-phone"
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
          htmlFor="register-email"
          className="text-neutral-900 text-lg mb-8 fw-medium"
        >
          Email address <span className="text-danger">*</span>
        </label>
        <input
          type="email"
          className={`common-input ${fieldErrors.email ? "is-invalid" : ""}`}
          id="register-email"
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

      {/* Password */}
      <div className="mb-24">
        <label
          htmlFor="register-password"
          className="text-neutral-900 text-lg mb-8 fw-medium"
        >
          Password <span className="text-danger">*</span>
        </label>
        <div className="position-relative">
          <input
            type="password"
            className={`common-input ${
              fieldErrors.password ? "is-invalid" : ""
            }`}
            id="register-password"
            name="password"
            placeholder="Enter Password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        {fieldErrors.password && (
          <div className="text-danger text-xs mt-2">
            {fieldErrors.password[0]}
          </div>
        )}
      </div>

      {/* Password Confirmation */}
      <div className="mb-24">
        <label
          htmlFor="register-password-confirmation"
          className="text-neutral-900 text-lg mb-8 fw-medium"
        >
          Confirm Password <span className="text-danger">*</span>
        </label>
        <div className="position-relative">
          <input
            type="password"
            className={`common-input ${
              fieldErrors.password_confirmation ? "is-invalid" : ""
            }`}
            id="register-password-confirmation"
            name="password_confirmation"
            placeholder="Confirm Password"
            value={form.password_confirmation}
            onChange={handleChange}
            required
          />
        </div>
        {fieldErrors.password_confirmation && (
          <div className="text-danger text-xs mt-2">
            {fieldErrors.password_confirmation[0]}
          </div>
        )}
      </div>

      {/* Privacy info */}
      <div className="my-48">
        <p className="text-gray-500">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our
          <Link to="#" className="text-main-600 text-decoration-underline">
            {" "}
            privacy policy
          </Link>
          .
        </p>
      </div>

      {/* Submit */}
      <div className="mt-48">
        <button
          type="submit"
          className="btn btn-main bg-main-600 border-main-600 py-18 px-40"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;

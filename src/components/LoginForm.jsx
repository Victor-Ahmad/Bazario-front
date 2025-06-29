// src/components/LoginForm.jsx
import React, { useState } from "react";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Try both email and username, but API needs email, so use only email for now
    try {
      const { user, token, role } = await login({
        email: emailOrUsername,
        password,
      });
      // On success, redirect (change path if you have dashboard/home)
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} autoComplete="off">
      <h6 className="text-xl mb-32">Login</h6>
      <div className="mb-24">
        <label
          htmlFor="login-email"
          className="text-neutral-900 text-lg mb-8 fw-medium"
        >
          Email address <span className="text-danger">*</span>
        </label>
        <input
          type="email"
          className="common-input"
          id="login-email"
          placeholder="Enter your email"
          value={emailOrUsername}
          onChange={(e) => setEmailOrUsername(e.target.value)}
          required
        />
      </div>
      <div className="mb-24">
        <label
          htmlFor="login-password"
          className="text-neutral-900 text-lg mb-8 fw-medium"
        >
          Password <span className="text-danger">*</span>
        </label>
        <div className="position-relative">
          <input
            type="password"
            className="common-input"
            id="login-password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      </div>
      {error && <div className="mb-24 text-danger">{error}</div>}
      <div className="mb-24 mt-48">
        <div className="flex-align gap-48 flex-wrap">
          <button
            type="submit"
            className="btn btn-main bg-main-600 border-main-600 py-18 px-40"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log in"}
          </button>
          <div className="form-check common-check">
            <input className="form-check-input" type="checkbox" id="remember" />
            <label className="form-check-label flex-grow-1" htmlFor="remember">
              Remember me
            </label>
          </div>
        </div>
      </div>
      <div className="mt-48">
        <a
          href="#"
          className="text-danger-600 text-sm fw-semibold hover-text-decoration-underline"
        >
          Forgot your password?
        </a>
      </div>
    </form>
  );
};

export default LoginForm;

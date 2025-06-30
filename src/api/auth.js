import api from "./axios";
import { showSuccess, showError } from "../utils/toast";

export function getCurrentRole() {
  const user = localStorage.getItem("authUser");
  if (!user) return null;

  try {
    const parsed = JSON.parse(user);
    if (parsed.role) return parsed.role;

    if (parsed.roles && Array.isArray(parsed.roles) && parsed.roles[0]?.name) {
      return parsed.roles[0].name;
    }
    return null;
  } catch {
    return null;
  }
}

export function isSeller() {
  return getCurrentRole() === "seller";
}

export function isCustomer() {
  return getCurrentRole() === "customer";
}

export async function login({ email, password }) {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);

  try {
    const res = await api.post("/api/login", formData);
    const { success, result, message } = res.data;

    if (!success) {
      showError(message || "Login failed.");
      throw new Error(message || "Login failed.");
    }

    localStorage.setItem("authToken", result.token);
    localStorage.setItem("authUser", JSON.stringify(result.user));

    showSuccess("Logged in successfully!");
    return { user: result.user, token: result.token, role: result.role };
  } catch (err) {
    showError(err?.response?.data?.message || err.message || "Login failed.");
    throw new Error(
      err?.response?.data?.message || err.message || "Login failed."
    );
  }
}

export async function registerUser({
  name,
  age,
  email,
  password,
  password_confirmation,
  phone,
}) {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("age", age);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("password_confirmation", password_confirmation);
  formData.append("phone", phone);

  try {
    const res = await api.post("/api/customer/register", formData);
    const { success, result, message } = res.data;

    if (!success) {
      showError(message || "Registration failed.");
      throw { message, errors: result?.errors || {} };
    }

    localStorage.setItem("authToken", result.token);
    localStorage.setItem("authUser", JSON.stringify(result.user));

    showSuccess("Account created successfully!");
    return { user: result.user, token: result.token };
  } catch (err) {
    showError(
      err?.response?.data?.message || err.message || "Registration failed."
    );
    // Forward API validation errors or fallback
    if (err.errors) throw err;
    throw {
      message:
        err?.response?.data?.message || err.message || "Registration failed.",
      errors: err?.response?.data?.result?.errors || {},
    };
  }
}

export async function upgradeToSeller({
  store_owner_name,
  store_name,
  address,
  logo,
  description,
  phone,
  email,
}) {
  const formData = new FormData();
  formData.append("store_owner_name", store_owner_name);
  formData.append("store_name", store_name);
  formData.append("address", address);
  if (logo) formData.append("logo", logo);
  formData.append("description", description);
  formData.append("phone", phone);
  formData.append("email", email);

  try {
    const res = await api.post("/api/customer/upgrade-to-seller", formData);
    const { success, result, message } = res.data;
    if (!success) {
      showError(message || "Upgrade failed.");
      throw { message, errors: result?.errors || {} };
    }
    localStorage.setItem("authToken", result.token);
    localStorage.setItem("authUser", JSON.stringify(result.user));
    showSuccess("You have been upgraded to a seller!");
    // Optionally: Save user/seller in localStorage or context if you need to persist
    return {
      user: result.user,
      seller: result.seller,
      message,
    };
  } catch (err) {
    showError(err?.response?.data?.message || err.message || "Upgrade failed.");
    if (err.errors) throw err;
    throw {
      message: err?.response?.data?.message || err.message || "Upgrade failed.",
      errors: err?.response?.data?.result?.errors || {},
    };
  }
}

export function getAuthToken() {
  return localStorage.getItem("authToken");
}

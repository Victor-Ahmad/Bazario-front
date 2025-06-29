import toast from "react-hot-toast";

// Custom icons and backgrounds for each type
const icons = {
  success: "🎉",
  error: "💥",
  info: "💡",
  warning: "⚠️",
  default: "✨",
};

// Custom gradient backgrounds for toasts (use CSS gradients for fancy look)
const backgrounds = {
  success: "linear-gradient(90deg,#43e97b 0%,#38f9d7 100%)",
  error: "linear-gradient(90deg,#ff5858 0%,#f857a6 100%)",
  info: "linear-gradient(90deg,#2193b0 0%,#6dd5ed 100%)",
  warning: "linear-gradient(90deg,#f7971e 0%,#ffd200 100%)",
  default: "linear-gradient(90deg,#a18cd1 0%,#fbc2eb 100%)",
};

// Animation (React Hot Toast is animated by default, but you can tweak duration, etc.)
const baseOptions = {
  duration: 4000,
  style: {
    color: "#fff",
    fontWeight: 600,
    fontSize: 16,
    borderRadius: "12px",
    boxShadow: "0 4px 32px 0 rgba(0,0,0,0.12)",
    padding: "16px 24px",
  },
};

export const showSuccess = (message) =>
  toast(message, {
    ...baseOptions,
    icon: icons.success,
    style: {
      ...baseOptions.style,
      background: backgrounds.success,
    },
  });

export const showError = (message) =>
  toast(message, {
    ...baseOptions,
    icon: icons.error,
    style: {
      ...baseOptions.style,
      background: backgrounds.error,
    },
  });

export const showInfo = (message) =>
  toast(message, {
    ...baseOptions,
    icon: icons.info,
    style: {
      ...baseOptions.style,
      background: backgrounds.info,
    },
  });

export const showWarning = (message) =>
  toast(message, {
    ...baseOptions,
    icon: icons.warning,
    style: {
      ...baseOptions.style,
      background: backgrounds.warning,
    },
  });

export const showDefault = (message) =>
  toast(message, {
    ...baseOptions,
    icon: icons.default,
    style: {
      ...baseOptions.style,
      background: backgrounds.default,
    },
  });

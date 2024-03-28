import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ size, color, disabled, onClick, children }) => (
  <button
    style={{
      padding: getPadding(size),
      backgroundColor: color,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
    }}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

const getPadding = (size) => {
  switch (size) {
    case "small":
      return "8px 16px";
    case "medium":
      return "12px 24px";
    case "large":
      return "16px 32px";
    default:
      return "12px 24px";
  }
};

Button.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]).isRequired,
  color: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;

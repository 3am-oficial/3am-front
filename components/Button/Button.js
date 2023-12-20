import React from "react";

const Button = ({
  label,
  onClick,
  disabled = false,
  className = "button-component",
}) => {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;

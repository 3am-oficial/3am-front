import React from "react";

const Button = ({ label, onClick, disabled = false }) => {
  return (
    <button onClick={onClick} className="button-component" disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;

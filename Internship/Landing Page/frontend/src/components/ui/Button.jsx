import React from "react";

const Button = ({ value, className }) => {
  return (
    <button className={`px-4 py-2 rounded-xl ${className}`}>
      {value}
    </button>
  );
};

export default Button;
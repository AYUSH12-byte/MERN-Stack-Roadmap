import React from "react";

const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`
        rounded-2xl sm:rounded-3xl
        p-6 sm:p-8
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;

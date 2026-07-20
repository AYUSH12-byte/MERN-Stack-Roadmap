import React from "react";

const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`
        rounded-3xl 
        p-8 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
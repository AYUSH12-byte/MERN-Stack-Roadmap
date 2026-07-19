import React from "react";

const PreferenceCard = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-[#F8FBFD] rounded-3xl p-8 shadow-sm hover:shadow-md transition ${className}`}
    >
      {children}
    </div>
  );
};

export default PreferenceCard;
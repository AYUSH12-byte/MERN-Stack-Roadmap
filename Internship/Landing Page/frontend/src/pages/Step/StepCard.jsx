import React from "react";

const StepCard = ({ number, title, desc }) => {
  return (
    <div className="bg-[#123E52] rounded-2xl p-8 hover:bg-[#16485f] transition duration-300">
      <h1 className="text-6xl font-bold text-gray-400">{number}</h1>

      <h3 className="text-white text-xl font-semibold mt-6">
        {title}
      </h3>

      <p className="text-gray-400 mt-4 leading-7 text-sm">
        {desc}
      </p>
    </div>
  );
};

export default StepCard;
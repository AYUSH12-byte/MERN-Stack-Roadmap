import React from "react";

const Card = ({ icon, title, desc }) => {
  return (
    <div className="bg-gray-100 p-8 rounded-2xl hover:shadow-lg transition duration-300">
      <div className="mb-6">{icon}</div>

      <h2 className="text-3xl font-semibold text-slate-900 mb-4">
        {title}
      </h2>

      <p className="text-gray-500 leading-8">
        {desc}
      </p>
    </div>
  );
};

export default Card;
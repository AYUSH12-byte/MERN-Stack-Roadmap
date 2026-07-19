import React from "react";

const LeftBody = () => {
  return (
    <div className="w-1/2 flex items-center justify-center px-12">
      <div className="max-w-md">

        {/* Heading */}
        <h1 className="text-6xl font-bold text-slate-900 leading-tight">
          Get paid early
        </h1>

        <h2 className="text-5xl font-light text-slate-900 leading-tight mt-2">
          save automatically
        </h2>

        <h2 className="text-5xl font-light text-slate-900 leading-tight">
          all your pay.
        </h2>

        {/* Description */}
        <p className="text-gray-500 mt-8 leading-7">
          Supports small businesses with simple invoicing,
          powerful integrations, and cash flow management tools.
        </p>

        {/* Input & Button */}
        <div className="flex mt-8 shadow-md rounded-xl overflow-hidden border border-gray-200">
          <input
            type="email"
            placeholder="Your business email"
            className="flex-1 px-5 py-4 outline-none"
          />

          <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 transition">
            Get Started ↗
          </button>
        </div>

        {/* Brands */}
        <div className="flex gap-10 mt-10 font-semibold text-2xl text-slate-800">
          <span>Klarna.</span>
          <span>coinbase</span>
          <span>instacart</span>
        </div>

      </div>
    </div>
  );
};

export default LeftBody;
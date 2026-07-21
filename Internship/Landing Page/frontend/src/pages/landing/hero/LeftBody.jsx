import React from "react";

const LeftBody = () => {
  return (
    <div className="w-full md:w-1/2 md:order-1 order-1 flex items-center justify-center px-6 sm:px-10 md:px-12 py-8 md:py-0">
      <div className="max-w-md text-center md:text-left">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
          Get paid early
        </h1>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 leading-tight mt-2">
          save automatically
        </h2>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 leading-tight">
          all your pay.
        </h2>

        {/* Description */}
        <p className="text-gray-500 mt-6 sm:mt-8 leading-7">
          Supports small businesses with simple invoicing, powerful
          integrations, and cash flow management tools.
        </p>

        {/* Input & Button */}
        <div className="flex flex-col sm:flex-row mt-8 shadow-md rounded-xl overflow-hidden border border-gray-200">
          <input
            type="email"
            placeholder="Your business email"
            className="flex-1 px-5 py-4 outline-none"
          />

          <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 transition">
            Get Started ↗
          </button>
        </div>

        {/* Brands */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-8 md:gap-10 mt-8 sm:mt-10 font-semibold text-lg sm:text-xl md:text-2xl text-slate-800">
          <span>Klarna.</span>
          <span>coinbase</span>
          <span>instacart</span>
        </div>
      </div>
    </div>
  );
};

export default LeftBody;

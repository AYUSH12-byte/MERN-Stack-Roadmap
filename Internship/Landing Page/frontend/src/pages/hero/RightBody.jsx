import React from "react";

const RightBody = () => {
  return (
    <div className="w-1/2 flex items-center justify-center bg-gray-100">
      <div className="relative">

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-xl p-6 w-80">

          {/* Profile */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-cyan-600 flex items-center justify-center text-white font-bold">
              D
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">
                Dipa Inhouse
              </h3>
              <p className="text-sm text-gray-400">
                dipainhouse@gmail.com
              </p>
            </div>
          </div>

          {/* Invoice */}
          <div className="border rounded-2xl p-4 mb-5">
            <p className="text-gray-400 text-sm">Invoice</p>

            <h2 className="text-3xl font-bold text-gray-800">
              $1,876,580
            </h2>

            <p className="text-sm text-gray-400">
              April 21, 2024
            </p>
          </div>

          {/* Payment Method */}
          <div className="space-y-3">

            <label className="flex items-center justify-between border-2 border-cyan-500 rounded-xl px-4 py-3 cursor-pointer">
              <div className="flex items-center gap-3">
                💳
                <span>Credit Card</span>
              </div>

              <input type="radio" checked readOnly />
            </label>

            <label className="flex items-center justify-between border rounded-xl px-4 py-3 cursor-pointer">
              <div className="flex items-center gap-3">
                🏦
                <span>Bank Account</span>
              </div>

              <input type="radio" />
            </label>

          </div>

          {/* Button */}
          <button className="w-full mt-6 bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-xl font-semibold">
            Pay
          </button>
        </div>

        {/* Floating Credit Card */}
        <div className="absolute -top-10 right-0 w-44 h-56 rounded-2xl bg-cyan-700 text-white p-5 shadow-2xl">

          <p className="text-xs opacity-80">
            Credit Card
          </p>

          <h2 className="text-2xl font-bold mt-3">
            234 **** ****
          </h2>

          <div className="absolute bottom-5 left-5 font-bold text-2xl">
            VISA
          </div>

          <div className="absolute bottom-6 right-5 text-2xl">
            ))) 
          </div>

        </div>

      </div>
    </div>
  );
};

export default RightBody;
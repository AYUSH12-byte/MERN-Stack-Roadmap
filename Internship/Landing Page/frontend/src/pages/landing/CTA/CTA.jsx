import React from "react";
import { ArrowUpRight } from "lucide-react";
import Button from "../../../components/ui/Button"; // adjust path as needed

const CTA = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#08384B] rounded-3xl px-6 sm:px-10 lg:px-14 py-10 sm:py-14 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
          {/* Left */}
          <div className="max-w-xl text-center lg:text-left">
            <p className="uppercase text-cyan-500 text-sm tracking-widest font-semibold">
              Try It Now
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 leading-tight">
              Ready to level up your
              <br />
              payment process?
            </h2>

            <p className="text-gray-400 mt-6 leading-8 text-sm sm:text-base">
              Supports small businesses with simple invoicing, powerful
              integrations, and cash flow management tools.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              value="Get Started Now"
              className="bg-cyan-500 text-white hover:bg-cyan-600 px-8 py-4 w-full sm:w-auto"
            />

            <button className="flex items-center justify-center gap-2 border border-gray-500 text-white px-8 py-4 rounded-xl hover:bg-white hover:text-[#08384B] transition w-full sm:w-auto">
              Learn More
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

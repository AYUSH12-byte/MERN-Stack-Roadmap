import React from "react";
import { ArrowUpRight } from "lucide-react";
import Button from "../components/Button"; // adjust path as needed

const CTA = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#08384B] rounded-3xl px-14 py-16 flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left */}
          <div className="max-w-xl">
            <p className="uppercase text-cyan-500 text-sm tracking-widest font-semibold">
              Try It Now
            </p>

            <h2 className="text-5xl font-bold text-white mt-4 leading-tight">
              Ready to level up your
              <br />
              payment process?
            </h2>

            <p className="text-gray-400 mt-6 leading-8">
              Supports small businesses with simple invoicing, powerful
              integrations, and cash flow management tools.
            </p>
          </div>

          {/* Right */}
          <div className="flex gap-4">
            <Button
              value="Get Started Now"
              className="bg-cyan-500 text-white hover:bg-cyan-600 px-8 py-4"
            />

            <button className="flex items-center gap-2 border border-gray-500 text-white px-8 py-4 rounded-xl hover:bg-white hover:text-[#08384B] transition">
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
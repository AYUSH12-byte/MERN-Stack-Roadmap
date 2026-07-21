import React from "react";
import { ArrowUpRight } from "lucide-react";
import Card from "../../../components/ui/Card";

const Mission = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Heading */}

        <div className="text-center">
          <p className="uppercase text-cyan-500 text-sm font-semibold tracking-widest">
            Our Mission
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-3">
            We've helped
            <br />
            innovative companies
          </h2>

          <p className="text-gray-500 mt-6 leading-8 text-sm sm:text-base">
            Hundreds of all sizes and across all industries
            <br />
            have made big improvements with us.
          </p>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 text-center mt-12 sm:mt-20">
          <div>
            <h3 className="text-4xl sm:text-5xl font-bold">24%</h3>

            <p className="text-gray-500 mt-4">Revenue business</p>
          </div>

          <div>
            <h3 className="text-4xl sm:text-5xl font-bold">180K</h3>

            <p className="text-gray-500 mt-4">In annual revenue</p>
          </div>

          <div>
            <h3 className="text-4xl sm:text-5xl font-bold">10+</h3>

            <p className="text-gray-500 mt-4">Months of runway</p>
          </div>
        </div>

        {/* Plans */}

        <p className="text-center uppercase tracking-widest text-sm font-semibold mt-20">
          Choose Plan
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Plus */}

          <Card className="bg-[#EEF5F7] h-64 sm:h-72 flex flex-col justify-between">
            <h2 className="text-4xl sm:text-5xl font-bold">Plus</h2>

            <div className="flex justify-between items-center">
              <p className="text-2xl sm:text-3xl">£2.99/month</p>

              <ArrowUpRight size={30} />
            </div>
          </Card>

          {/* Premium */}

          <Card className="bg-gradient-to-br from-cyan-500 to-cyan-700 h-64 sm:h-72 flex flex-col justify-between">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Premium
            </h2>

            <div className="flex justify-between items-center">
              <p className="text-2xl sm:text-3xl text-white">£6.99/month</p>

              <ArrowUpRight size={30} className="text-white" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Mission;

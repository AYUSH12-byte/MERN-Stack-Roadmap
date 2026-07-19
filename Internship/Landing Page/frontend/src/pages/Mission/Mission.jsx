import React from "react";
import PlanCard from "./PlanCard";

const Mission = () => {
  const stats = [
    {
      value: "24%",
      title: "Revenue business",
    },
    {
      value: "180K",
      title: "In annual revenue",
    },
    {
      value: "10+",
      title: "Months of runway",
    },
  ];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <p className="uppercase text-cyan-500 tracking-widest text-sm font-semibold">
            Our Mission
          </p>

          <h2 className="text-5xl font-bold text-slate-900 mt-3 leading-tight">
            We've helped
            <br />
            innovative companies
          </h2>

          <p className="text-gray-500 mt-6 leading-8">
            Hundreds of all sizes and across all industries
            <br />
            have made big improvements with us.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-10 mt-20 text-center">
          {stats.map((item, index) => (
            <div key={index}>
              <h3 className="text-5xl font-bold text-slate-900">
                {item.value}
              </h3>

              <p className="text-gray-500 mt-4">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Plans */}
        <div className="text-center mt-20">
          <p className="uppercase text-sm tracking-widest font-semibold text-slate-700">
            Choose Plan
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <PlanCard
            title="Plus"
            price="£2.99/month"
            bgColor="bg-[#EEF5F7]"
          />

          <PlanCard
            title="Premium"
            price="£6.99/month"
            bgColor="bg-gradient-to-br from-cyan-500 to-cyan-700"
            textColor="text-white"
          />

        </div>

      </div>
    </section>
  );
};

export default Mission;
import React from "react";
import StepCard from "./StepCard";

const Steps = () => {
  const steps = [
    {
      number: "1",
      title: "Open your account",
      desc: "Sign up to Finpay and set up your account from the dashboard.",
    },
    {
      number: "2",
      title: "Transfer your money",
      desc: "Move money from another account into yours and start earning up.",
    },
    {
      number: "3",
      title: "Watch your balance grow",
      desc: "Accessed instantly and remain insulated from market volatility.",
    },
  ];

  return (
    <section className="bg-[#0B3A4D] py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <p className="uppercase tracking-widest text-cyan-400 text-sm font-semibold">
          Step
        </p>

        <h2 className="text-5xl font-bold text-white mt-3 leading-tight max-w-3xl">
          Maximize your returns with a
          <br />
          Reserve account that generates.
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              number={step.number}
              title={step.title}
              desc={step.desc}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Steps;
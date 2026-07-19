import React from "react";
import { ArrowUpRight } from "lucide-react";

const PlanCard = ({
  title,
  price,
  bgColor,
  textColor = "text-slate-900",
}) => {
  return (
    <div
      className={`${bgColor} rounded-3xl p-8 h-72 flex flex-col justify-between`}
    >
      <h2 className={`text-5xl font-bold ${textColor}`}>
        {title}
      </h2>

      <div className="flex justify-between items-center">
        <p className={`text-3xl ${textColor}`}>
          {price}
        </p>

        <ArrowUpRight className={textColor} size={28} />
      </div>
    </div>
  );
};

export default PlanCard;
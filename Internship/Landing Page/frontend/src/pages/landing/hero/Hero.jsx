import React from "react";
import LeftBody from "./LeftBody";
import RightBody from "./RightBody";

const Hero = () => {
  return (
    <div className="bg-gray-100 min-h-screen w-full max-w-7xl flex flex-col-reverse md:flex-row mx-auto py-10 md:py-0">
      <LeftBody />
      <RightBody />
    </div>
  );
};

export default Hero;

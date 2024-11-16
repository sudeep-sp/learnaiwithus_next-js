"use client";
import { useEffect, useRef } from "react";
import { EvervaultCard, Icon } from "@/app/components/blogs/Card"; // Assuming you already have this component

const HeroSection = () => {
  return (
    <div className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-gray-900">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70 md:opacity-50 z-1"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center p-6 bg-grey bg-opacity-30 md:bg-opacity-20 rounded-lg max-w-4xl mx-auto cursor-none">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Learn <span className="animate-color-change">AI</span> with Us
        </h1>
        <p className="text-xl md:text-xl inline-block mb-2 text-white bg-gray-800 bg-opacity-70 rounded-xl py-2 px-5">
          By Students. For Students.
        </p>
      </div>

      {/* Fullscreen Hero Card */}
      <div className="absolute inset-0 z-0 flex justify-center items-center w-full h-full transition-shadow duration-300 ease-in-out">
        <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start justify-center w-full h-full relative hover:shadow-xl transition-shadow duration-300 ease-in-out">
          {/* Icons in the corners */}
          <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

          {/* Card Content */}
          <EvervaultCard />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

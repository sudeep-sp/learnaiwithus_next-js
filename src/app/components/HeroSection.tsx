"use client";
import { EvervaultCard } from "@/app/components/blogs/Card"; // Assuming you already have this component

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      const yOffset = -90; // Adjust this value for the desired gap
      const yPosition =
        aboutSection.getBoundingClientRect().top + window.scrollY + yOffset;
  
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };
  

  return (
    <div className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gray-900 dark:bg-gray-900">
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
        <div className="flex flex-col items-start justify-center w-full h-full relative hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <EvervaultCard />
        </div>
      </div>

      {/* Animated Down Arrow */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-2xl p-2 hover:scale-110 transition-all duration-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </div>
  );
};

export default HeroSection;

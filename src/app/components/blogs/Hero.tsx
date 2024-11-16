import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-black group overflow-hidden">
      {/* Particles Container */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 50 }).map((_, index) => (
          <div
            key={index}
            className="particle opacity-0 group-hover:opacity-100"
          />
        ))}
      </div>

      {/* Centered Content */}
      <div className="relative z-10 text-white text-center flex items-center justify-center h-full">
        <h1 className="text-4xl font-bold">Hover to See the Magic!</h1>
      </div>
    </div>
  );
};

export default Hero;

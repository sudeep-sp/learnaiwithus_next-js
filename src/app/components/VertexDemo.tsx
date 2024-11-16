import React from "react";
import { Vortex } from "./Vertex";

export function VortexDemo() {
  return (

    <>

<div className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-gray-900">
      {/* Gradient Overlay */}
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
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
      </Vortex>
    </div>
    </>

  );
}

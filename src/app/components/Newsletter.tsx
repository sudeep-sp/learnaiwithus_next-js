import React from "react";

const Newsletter = () => {
  return (
    <section className="newsletter-section py-10 bg-transparent text-white boxed-container">
      <div className="container mx-auto">
        <div className=" items-center md:flex-row md:justify-between">
          <h2 className="text-2xl font-bold mb-4 md:mb-0 md:mr-4">
            Join My Newsletter
          </h2>
          <p className="text-base leading-relaxed text-gray-400 mt-2">
            Stay in the loop! Get updates on new blogs, insights & more
          </p>
          <form className="flex items-center w-full mt-4 md:mt-3 max-w-lg">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow p-3 px-6 bg-gray-200 bg-opacity-20 rounded-l-full text-white outline-none w-full min-w-42"
            />
            <button
              type="submit"
              className="bg-blue-500 transition-all text-white px-6 py-3 rounded-r-full hover:bg-teal-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

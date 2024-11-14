import React from 'react';

export default function BlogPosts() {
  return (
    <section className="py-16 px-4 lg:px-8 boxed-container">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl font-bold text-white text-center lg:text-left">Recent blog posts</h2>

        {/* Main content grid */}
        <div className="mt-8 grid lg:grid-cols-[2fr_1fr] gap-8">
          
          {/* Left column (main post with large image) */}
          <div className="space-y-4">
            <div className="relative aspect-w-16 aspect-h-9">
              <img
                src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Conversations with London Makr & Co."
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
            </div>
            <div>
              <p className="text-gray-400">Olivia Rhye • 20 Jan 2024</p>
              <h3 className="text-2xl font-semibold text-white mt-2">
                Conversations with London Makr & Co.
              </h3>
              <p className="text-gray-300 mt-2">
                We sat down with London’s fast-growing brand and product design studio, Makr & Co., to find out how they’ve used Untitled UI to 2x their revenue. Eating more plants and less meat has been tied to a longer life.
              </p>
              <div className="mt-4 space-x-2">
                <span className="bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Design
                </span>
                <span className="bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Research
                </span>
                <span className="bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Interviews
                </span>
              </div>
            </div>
          </div>

          {/* Right column (sidebar with two items) */}
          <div className="space-y-8">
            {/* Post 1 */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1658763440414-07d3b9c42bb8?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="A Relentless Pursuit of Perfection in Product Design"
                className="w-full h-48 sm:h-32 object-cover rounded-lg"
              />
              <div className="mt-4">
                <p className="text-gray-400 sm:text-xs">Phoenix Baker • 19 Jan 2024</p>
                <h4 className="sm:text-md font-semibold text-white mt-1">
                  A Relentless Pursuit of Perfection in Product Design
                </h4>
                <div className="mt-2 space-x-2">
                  <span className="bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Design
                  </span>
                  <span className="bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Research
                  </span>
                </div>
              </div>
            </div>

            {/* Post 2 */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1665690399857-9de8bbbeb108?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="How to Run a Successful Business With Your Partner"
                className="w-full h-48 sm:h-32 object-cover rounded-lg"
              />
              <div className="mt-4">
                <p className="text-gray-400 sm:text-xs">Lana Steiner • 18 Jan 2024</p>
                <h4 className="sm:text-md font-semibold text-white mt-1">
                  How to Run a Successful Business With Your Partner
                </h4>
                <div className="mt-2 space-x-2">
                  <span className="bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Business
                  </span>
                  <span className="bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Research
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

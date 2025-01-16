"use client";
import React, { useState } from "react";
import Navbar from "../components/blogs/Navbar";
import "../globals.css";

const AIEditor = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [responseData, setResponseData] = useState<string | null>(null); // State for API response
  const [isLoading, setIsLoading] = useState(false); // State for loading spinner

  const handleGenerate = async () => {
    if (!searchQuery.trim()) return; // Avoid empty requests

    setIsLoading(true); // Show loading state
    setResponseData(null); // Clear previous response

    try {
      // Simulating API call - Replace with actual API endpoint
      const response = await fetch(
        "https://0f22-2a01-c23-64a0-6100-3d11-eab-8132-9640.ngrok-free.app/generate_blog/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ topic: searchQuery }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setResponseData(data.result.raw || "No response received."); // Update response data
    } catch (error) {
      console.log(error);
      setResponseData("Error: Unable to fetch data. Try again."); // Handle error
    } finally {
      setIsLoading(false); // Remove loading state
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-10 space-y-4">
        {/* Search Bar */}
        <div className="flex items-center space-x-5">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter your query"
            className="w-80 md:w-96 p-3 px-5 border border-gray-300 rounded-full focus:outline-none focus:ring focus:ring-blue-300 transition-all duration-300"
          />
          <button
            onClick={handleGenerate}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold rounded-full hover:scale-105 transform transition-all duration-300"
          >
            {isLoading ? "Generating..." : "Generate"}
          </button>
        </div>

        {/* Response Data */}
        <div className="boxed-container">
          <div className="w-full p-4 border border-gray-200 bg-white shadow rounded">
            {isLoading ? (
              <p className="text-gray-500">Fetching data...</p>
            ) : responseData ? (
              <p className="text-gray-700">{responseData}</p>
            ) : (
              <p className="text-gray-500">
                Enter a query and click Generate to see the result.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIEditor;

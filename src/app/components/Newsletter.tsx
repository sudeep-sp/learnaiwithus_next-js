"use client";

import React, { useState } from "react";
import { supabase } from "../lib/supabaseClient";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  const handleMessage = (text: string, type: "success" | "error") => {
    setMessage({ text, type });
    setTimeout(() => {
      setMessage(null); // Clear the message after 3 seconds
    }, 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Attempt to insert the email into the 'subscribers' table
      const { error } = await supabase.from("subscribers").insert([{ email }]);

      if (error) {
        if (error.message.includes("unique_email")) {
          // Handle duplicate email error
          handleMessage("You are already subscribed!", "error");
        } else {
          console.error("Error saving email:", error.message);
          handleMessage("Failed to subscribe. Please try again.", "error");
        }
      } else {
        handleMessage("Subscribed successfully!", "success");
        setEmail(""); // Clear the input field
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      handleMessage("Something went wrong. Please try again.", "error");
    }
  };

  return (
    <section className="newsletter-section py-10 bg-transparent text-white boxed-container">
      <div className="container mx-auto">
        <div className="items-center md:flex-row md:justify-between">
          <h2 className="text-2xl font-bold mb-4 md:mb-0 md:mr-4">
            Join our Newsletter
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex items-center w-full mt-4 md:mt-3 max-w-lg"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow p-3 px-6 bg-gray-200 bg-opacity-20 rounded-l-full text-white outline-none w-full min-w-42"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 transition-all text-white px-6 py-3 rounded-r-full hover:bg-teal-600"
            >
              Subscribe
            </button>
          </form>

          {/* Display Message */}
          {message && (
            <p
              className={`mt-2 text-sm ${
                message.type === "success" ? "text-green-400" : "text-red-400"
              }`}
            >
              {message.text}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

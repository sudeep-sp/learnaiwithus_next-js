"use client";
import type { NextPage } from "next";
import { useState } from "react";
import BlogCard from "@/app/components/blogs/BlogCard";

const blogData = [
  {
    title: "UX review presentations",
    author: "Olivia Rhye",
    date: "20 Jan 2022",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    tags: ["Research"],
    image:
      "https://images.unsplash.com/photo-1717501218347-64853a917fd8?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Migrating to Linear 101",
    author: "Phoenix Baker",
    date: "19 Jan 2022",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking.",
    tags: ["Artificial Intelligence", "Machine Learning"],
    image:
      "https://images.unsplash.com/photo-1717501220582-af14e7c247b5?q=80&w=2808&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Building your API Stack",
    author: "Lana Steiner",
    date: "18 Jan 2022",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    tags: ["Data Science"],
    image:
      "https://images.unsplash.com/photo-1717503159960-bf398715c19e?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const uniqueTags = ["All", ...new Set(blogData.flatMap((blog) => blog.tags))];

const BlogLayout: NextPage = () => {
  const [activeTag, setActiveTag] = useState("All");

  // Filter blogs based on the active tag
  const filteredBlogs =
    activeTag === "All"
      ? blogData
      : blogData.filter((blog) => blog.tags.includes(activeTag));

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-gray-200 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">LearnAIwithUs</h1>
          <nav className="space-x-4">
            <a href="#" className="text-gray-600">
              Home
            </a>
            <a href="#" className="text-gray-600">
              Products
            </a>
            <a href="#" className="text-gray-600">
              Resources
            </a>
            <a href="#" className="text-gray-600">
              Pricing
            </a>
            <a href="#" className="text-blue-600 font-semibold">
              Sign up
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-grow bg-gray-50">
        <section className="py-16 pb-8">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center">
              Writings from our team
            </h2>
            <p className="text-center text-gray-500 mt-4">
              The latest industry news, interviews, technologies, and resources.
            </p>
            <div className="mt-12 relative mx-auto ">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1485796826113-174aa68fd81b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Blog image"
                  className="w-full h-[70vh] object-cover object-center"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
                  <p className="text-sm text-gray-300">
                    Olivia Rhye • 20 Jan 2022
                  </p>
                  <h3 className="text-2xl font-semibold text-white mt-2">
                    UX review presentations
                  </h3>
                  <p className="text-gray-200 mt-1">
                    How do you create compelling presentations that wow your
                    colleagues and impress your managers?
                  </p>
                  <div className="mt-4 space-x-2">
                    <span className="inline-block bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                      Design
                    </span>
                    <span className="inline-block bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                      Research
                    </span>
                    <span className="inline-block bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                      Presentation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 pb-8">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center">
              Writings from our team
            </h2>
            <p className="text-center text-gray-500 mt-4">
              The latest industry news, interviews, technologies, and resources.
            </p>

            {/* Tabs for filtering */}
            <div className="flex justify-center mt-8 space-x-4">
              {uniqueTags.map((tag) => (
                <button
                  key={tag}
                  className={`px-4 py-2 rounded-full ${
                    activeTag === tag
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                  onClick={() => setActiveTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Blog Cards */}
            <div className="blogs-container grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {filteredBlogs.map((blog, index) => (
                <BlogCard
                  key={index}
                  title={blog.title}
                  author={blog.author}
                  date={blog.date}
                  description={blog.description}
                  tags={blog.tags}
                  image={blog.image}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogLayout;

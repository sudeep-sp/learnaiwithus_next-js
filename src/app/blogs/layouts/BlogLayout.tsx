"use client";
import type { NextPage } from "next";
import { useState } from "react";
import BlogCard from "@/app/components/blogs/BlogCard";
import Navbar from "@/app/components/blogs/Navbar";
import { useMemo } from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

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
];

// Pagination logic for the new pagination layout
const generatePaginationButtons = (totalPages: number, currentPage: number) => {
  const pages = [];
  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1, 2);
    if (currentPage > 2 && currentPage < totalPages - 1) {
      pages.push("...");
      pages.push(currentPage, "...");
    } else {
      pages.push("...");
    }
    pages.push(totalPages - 1, totalPages);
  }
  return pages;
};

// Unique tags including "All"
const uniqueTags = ["All", ...new Set(blogData.flatMap((blog) => blog.tags))];
const BLOGS_PER_PAGE = 6;

const BlogLayout: NextPage = () => {
  const [activeTag, setActiveTag] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Filtered and paginated blog data
  const filteredBlogs =
    activeTag === "All"
      ? blogData
      : blogData.filter((blog) => blog.tags.includes(activeTag));

  const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * BLOGS_PER_PAGE,
    currentPage * BLOGS_PER_PAGE
  );

  // Handle page changes
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  // Generate pagination buttons dynamically
  const paginationButtons = useMemo(
    () => generatePaginationButtons(totalPages, currentPage),
    [totalPages, currentPage]
  );

  // Pagination logic
  // const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE);
  // const paginatedBlogs = filteredBlogs.slice(
  //   (currentPage - 1) * BLOGS_PER_PAGE,
  //   currentPage * BLOGS_PER_PAGE
  // );

  // Handle page changes
  // const handlePageChange = (page: number) => {
  //   setCurrentPage(page);
  // };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
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
            <div className="flex md:justify-center mt-8 overflow-x-auto space-x-4">
              {uniqueTags.map((tag) => (
                <button
                  key={tag}
                  className={`px-4 py-2 whitespace-nowrap rounded-full ${
                    activeTag === tag
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                  onClick={() => {
                    setActiveTag(tag);
                    setCurrentPage(1); // Reset to first page on tag change
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Blog Cards */}
            <div className="blogs-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
              {paginatedBlogs.map((blog, index) => (
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

            {/* Pagination Controls */}
            <div className="flex flex-wrap justify-center mt-8 space-x-2">
              <button
                className={`px-3 py-1 rounded-md appearance-none border-none outline-none ${
                  currentPage === 1
                    ? "cursor-not-allowed"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <MdOutlineKeyboardArrowLeft className="text-xl" />
              </button>

              {paginationButtons.map((page, idx) => (
                <button
                  key={idx}
                  className={`px-2 py-1 rounded-full ${
                    page === currentPage
                      ? "bg-blue-600 text-white"
                      : page === "..."
                      ? "text-gray-500"
                      : "bg-gray-200 text-gray-800"
                  }`}
                  onClick={() =>
                    typeof page === "number" && handlePageChange(page)
                  }
                  disabled={page === "..."}
                >
                  {page}
                </button>
              ))}

              <button
                className={`px-1 py-1 rounded-full appearance-none border-none outline-none ${
                  currentPage === totalPages
                    ? "cursor-not-allowed"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <MdOutlineKeyboardArrowRight className="text-xl" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogLayout;

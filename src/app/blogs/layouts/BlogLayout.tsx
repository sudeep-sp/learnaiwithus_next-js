"use client";

import type { NextPage } from "next";
import { useEffect, useState, useMemo } from "react";
import BlogCard from "@/app/components/blogs/BlogCard";
import Navbar from "@/app/components/blogs/Navbar";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import LatestBlogs from "@/app/components/blogs/LatestBlogs";
import { BlogPost } from "@/app/lib/@types/types"; // Ensure this interface matches your blog schema
import { getBlogsData } from "@/app/lib/getBlogsData"; // Function to fetch blogs from the backend
import { Cards } from "./Cards";


const BLOGS_PER_PAGE = 6;

const BlogLayout: NextPage = () => {
  const [blogData, setBlogData] = useState<BlogPost[]>([]); // Store all blog data
  const [activeTag, setActiveTag] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // Fetch blog data on component mount
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true); // Show loading indicator
        const data = await getBlogsData(); // Fetch blogs from your data fetching function
        setBlogData(data || []); // Update blog data state
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false); // Hide loading indicator
      }
    };

    fetchBlogs();
  }, []);

  // Extract and normalize tags
  const extractTags = (tagsJson: any) => tagsJson?.data || []; // Ensure safe extraction

  // Generate unique tags dynamically from fetched blogs
  const uniqueTags = useMemo(() => {
    const allTags = blogData.flatMap((blog) => extractTags(blog.tags));
    return ["All", ...new Set(allTags)];
  }, [blogData]);

  // Filtered and paginated blog data
  const filteredBlogs =
    activeTag === "All"
      ? blogData
      : blogData.filter((blog) =>
          extractTags(blog.tags).includes(activeTag)
        );

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
  const generatePaginationButtons = (totalPages: number, currentPage: number) => {
    const pages = [];
    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 2) pages.push("...");
      if (currentPage > 1 && currentPage < totalPages) pages.push(currentPage);
      if (currentPage < totalPages - 1) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  const paginationButtons = useMemo(
    () => generatePaginationButtons(totalPages, currentPage),
    [totalPages, currentPage]
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <LatestBlogs />
        <Cards />
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
              {uniqueTags.slice(0,5).map((tag) => (
                <button
                  key={tag}
                  className={`px-4 py-2 whitespace-nowrap rounded-full text-sm ${
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
            {loading ? (
              <p className="text-center text-gray-600">Loading blogs...</p>
            ) : (
              <div className="blogs-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
                {paginatedBlogs.map((blog, index) => (
                  <BlogCard
                    key={index}
                    title={blog.blog_title} // Match BlogPost properties
                    author={blog.author}
                    date={blog.title} // Assuming 'title' is the timestamp (update if needed)
                    description={blog.blog_description}
                    tags={extractTags(blog.tags)} // Extract tags from JSON
                    image={blog.featured_img}
                  />
                ))}
              </div>
            )}

            {/* Pagination Controls */}
            <div className="flex flex-wrap justify-center mt-8 space-x-2">
              <button
                className={`px-3 py-1 rounded-md appearance-none border-none outline-none hover:text-blue-600 ${
                  currentPage === 1
                    ? "cursor-not-allowed"
                    : "text-gray-800"
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
                className={`px-1 py-1 rounded-full appearance-none border-none outline-none hover:text-blue-600 ${
                  currentPage === totalPages
                    ? "cursor-not-allowed"
                    : " text-gray-800"
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

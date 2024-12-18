"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/app/lib/supabaseClient";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import Navbar from "@/app/components/blogs/Navbar";
import SidePanel from "@/app/components/blogs/SidePanel"; // Assuming you renamed PopupSlider to SidePanel
import "../../globals.css";
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // Use your preferred Prism theme

// Define the BlogPost interface
export interface BlogPost {
  id: number;
  title: string;
  featured_img: string;
  blog_title: string;
  blog_description: string;
  author: string;
  created_at: string;
  blog_content: string;
  tags: { data: string[] };
  interactions: { likes: number; dislikes: number };
}

const Blog = () => {
  const { id } = useParams(); // Get the dynamic route parameter
  const [blogData, setBlogData] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userInteraction, setUserInteraction] = useState<"like" | "dislike" | null>(null);
  const [selectedText, setSelectedText] = useState<string | null>(null);
  const [isSelecting, setIsSelecting] = useState(false); // Used to track if text is selected
  const [response, setResponse] = useState<string | null>(null); // Store AI response
  const [isResponseLoading, setIsResponseLoading] = useState(false); // Manage loading state for AI response
  const [showSidePanel, setShowSidePanel] = useState(false); // State to control visibility of SidePanel

  useEffect(() => {
    if (!id) return;

    const fetchBlogData = async () => {
      try {
        const { data, error } = await supabase
          .from("blogs")
          .select("*")
          .eq("id", id)
          .single();

        if (error) {
          throw new Error("Error fetching blog data: " + error.message);
        }

        setBlogData(data as BlogPost);

        // Check local storage for user's previous interaction
        const savedInteraction = localStorage.getItem(`blog-interaction-${id}`);
        if (savedInteraction === "like" || savedInteraction === "dislike") {
          setUserInteraction(savedInteraction as "like" | "dislike");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
        const codeBlocks = document.querySelectorAll('.codeblock-container');
        codeBlocks.forEach((block) => {
          Prism.highlightElement(block); // Apply syntax highlighting to each block
        });
      }
    };

    fetchBlogData();
  }, [id]);



  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(date);
  };

  const handleInteraction = async (type: "likes" | "dislikes") => {
    if (!blogData) return;

    let updatedLikes = blogData.interactions.likes;
    let updatedDislikes = blogData.interactions.dislikes;

    if (type === "likes") {
      if (userInteraction === "like") {
        updatedLikes--;
        setUserInteraction(null);
        localStorage.removeItem(`blog-interaction-${id}`);
      } else {
        updatedLikes++;
        if (userInteraction === "dislike") {
          updatedDislikes--;
        }
        setUserInteraction("like");
        localStorage.setItem(`blog-interaction-${id}`, "like");
      }
    } else if (type === "dislikes") {
      if (userInteraction === "dislike") {
        updatedDislikes--;
        setUserInteraction(null);
        localStorage.removeItem(`blog-interaction-${id}`);
      } else {
        updatedDislikes++;
        if (userInteraction === "like") {
          updatedLikes--;
        }
        setUserInteraction("dislike");
        localStorage.setItem(`blog-interaction-${id}`, "dislike");
      }
    }

    try {
      const { error } = await supabase
        .from("blogs")
        .update({
          interactions: { likes: updatedLikes, dislikes: updatedDislikes },
        })
        .eq("id", blogData.id);

      if (error) {
        throw new Error("Error updating interactions: " + error.message);
      }

      setBlogData({
        ...blogData,
        interactions: { likes: updatedLikes, dislikes: updatedDislikes },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelection = () => {
    const selection = window.getSelection()?.toString().trim();
    if (selection && selection.length > 0) {
      setSelectedText(selection); // Save the selected text
      setIsSelecting(true);  // Mark as text selected
    } else {
      setIsSelecting(false); // No selection, reset
      setSelectedText(null);
    }
  };

  const handleTextSelection = () => {
    document.getElementById("blog_content")?.addEventListener("mouseup", handleSelection);
    document.getElementById("blog_content")?.addEventListener("keyup", handleSelection);
  };

  useEffect(() => {
    if (blogData) {
      handleTextSelection();
    }
  }, [blogData]);

  const highlightSelectedText = (content: string) => {
    if (selectedText) {
      const index = content.indexOf(selectedText);
      if (index !== -1) {
        const highlightedText = content.slice(0, index) + 
          `<span class="bg-yellow-300">${selectedText}</span>` + 
          content.slice(index + selectedText.length);
        return highlightedText;
      }
    }
    return content;
  };

  useEffect(() => {
    const handleClickOutside = () => {
      setIsSelecting(false);
      setSelectedText(null);
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const askQuestion = async (question: string) => {
    try {
      setIsResponseLoading(true); // Set loading state to true
      const response = await fetch("https://1de8-2a01-c22-34ad-3000-800d-b9b1-72f5-a408.ngrok-free.app/ask/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });


      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setResponse(data.response); // Set the response in state
      
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsResponseLoading(false); // Reset loading state
    }
  };

  const handleAskAI = async () => {
    if (selectedText) {
      setShowSidePanel(true); // Show the side panel when response is ready
      await askQuestion(selectedText);
    } else {
      console.log("No text selected");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (!blogData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Blog post not found!</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen  md:p-12 relative">
        <div className="max-w-4xl mx-auto overflow-hidden p-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {blogData.blog_title}
          </h1>

          <p className="text-gray-600 text-sm font-medium mb-4 flex">
            By {blogData.author} | {formatDateTime(blogData.created_at)} |{" "}
            <div className="flex space-x-1 ml-2 items-center">
              <FaThumbsUp />
              <span>{blogData.interactions.likes}</span>
            </div>
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {blogData.tags.data.map((tag, index) => (
              <span
                key={index}
                className="text-xs font-medium text-white bg-gray-400 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="w-full">
            <img
              src={blogData.featured_img}
              alt="Featured"
              className="w-full object-cover h-64 md:h-[70vh]"
            />
          </div>

          <div
            id="blog_content"
            className="prose lg:prose-xl text-gray-800"
            dangerouslySetInnerHTML={{
              __html: highlightSelectedText(blogData.blog_content),
            }}
          />

          <div className="px-6 py-4 flex items-center gap-6">
            <button
              className={`flex items-center ${
                userInteraction === "like" ? "text-green-600" : "text-gray-700"
              } hover:text-green-600 transition transform hover:scale-110`}
              onClick={() => handleInteraction("likes")}
            >
              <FaThumbsUp className="mr-2" />
              <span>{blogData.interactions.likes}</span>
            </button>

            <button
              className={`flex items-center ${
                userInteraction === "dislike" ? "text-red-600" : "text-gray-700"
              } hover:text-red-600 transition transform hover:scale-110`}
              onClick={() => handleInteraction("dislikes")}
            >
              <FaThumbsDown className="mr-2" />
              <span>{blogData.interactions.dislikes}</span>
            </button>
          </div>

          {isSelecting && selectedText && (
            <div className="fixed bottom-24 md:bottom-6 left-1/2 transform -translate-x-1/2">
              <button
                className="px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                onClick={handleAskAI}
              >
                Ask AI
              </button>
            </div>
          )}

          {/* SidePanel will be shown when the showSidePanel state is true */}
          
        </div>
        <SidePanel response={response} isLoading={isResponseLoading} isVisible={showSidePanel} close={setShowSidePanel} question={selectedText}  />
      </div>
    </>
  );
};

export default Blog;

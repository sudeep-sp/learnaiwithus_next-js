"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/app/lib/supabaseClient";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import Navbar from "@/app/components/blogs/Navbar";
import "../../globals.css";

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
        // Undo like
        updatedLikes--;
        setUserInteraction(null);
        localStorage.removeItem(`blog-interaction-${id}`);
      } else {
        // Add like and undo dislike (if it exists)
        updatedLikes++;
        if (userInteraction === "dislike") {
          updatedDislikes--;
        }
        setUserInteraction("like");
        localStorage.setItem(`blog-interaction-${id}`, "like");
      }
    } else if (type === "dislikes") {
      if (userInteraction === "dislike") {
        // Undo dislike
        updatedDislikes--;
        setUserInteraction(null);
        localStorage.removeItem(`blog-interaction-${id}`);
      } else {
        // Add dislike and undo like (if it exists)
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
      <div className="bg-gray-50 min-h-screen p-6 md:p-12">
        <div className="max-w-4xl mx-auto overflow-hidden">
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

          <div className="max-w-4xl mx-auto mt-10">
          <div
            id="blog_content"
            className="px-0 py-4 text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: blogData.blog_content
                .trim()
                .replace(/\s+$/, "")
                .replace(/<img/g, '<img style="max-width:100%;height:auto;display:block;margin:0 auto;"'),
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { FaTimes } from "react-icons/fa";
import { supabase } from "../lib/supabaseClient";
import "../globals.css";

// Dynamically import Jodit editor to avoid SSR issues
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const BlogEditor = () => {
  const editor = useRef<any>(null);
  const contentRef = useRef("<p>Start writing your blog here...</p>");
  const titleRef = useRef<HTMLInputElement | null>(null);
  const authorRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
  const tagInputRef = useRef<HTMLInputElement | null>(null);

  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("No file chosen");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [loading, setLoading] = useState(false);

    const [searchQuery, setSearchQuery] = useState(""); // State for search input
    const [responseData, setResponseData] = useState<string | null>(null); // State for API response
    const [isLoading, setIsLoading] = useState(false); // State for loading spinner

    const handleGenerate = async () => {
      if (!searchQuery.trim()) return; // Avoid empty requests
  
      setIsLoading(true); // Show loading state
      setResponseData(null); // Clear previous response
  
      try {
        // Simulating API call - Replace with actual API endpoint
        const response = await fetch("https://f2b8-2a01-c22-34ad-3000-800d-b9b1-72f5-a408.ngrok-free.app/generate_blog/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ topic: searchQuery }),
        });
  
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
  
        const data = await response.json();
        setResponseData(data.result.raw || "No response received."); // Update response data
      } catch (error) {
          console.log(error)
        setResponseData("Error: Unable to fetch data. Try again."); // Handle error
      } finally {
        setIsLoading(false); // Remove loading state
      }
    };

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput)) {
      setTags([...tags, tagInput.trim()]);
    }
    setTagInput(""); // Clear input after adding tag
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleKeyDown = (e: { key: string; preventDefault: () => void }) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    }
  };

  const handleSave = async () => {
    setLoading(true);

    try {
      // Upload the file to Supabase storage
      let featuredImgUrl = "";
      if (file) {
        const { data, error } = await supabase.storage
          .from("blog_storage")
          .upload(`${Date.now()}_${file.name}`, file);

        if (error) throw error;

        const { data: publicUrlData } = supabase.storage
          .from("blog_storage")
          .getPublicUrl(data.path);

        if (!publicUrlData) throw new Error("Failed to get public URL");

        featuredImgUrl = publicUrlData.publicUrl;
      }

      // Clean up content before saving (trim any unnecessary whitespace)
      const blogContent = contentRef.current.trim();

      // Prepare the data from refs
      const blogPost = {
        featured_img: featuredImgUrl,
        blog_title: titleRef.current?.value ?? "",
        blog_description: descriptionRef.current?.value ?? "",
        author: authorRef.current?.value ?? "",
        tags: { data: tags },
        interactions: { likes: 0, views: 0 }, // Default interactions
        blog_content: blogContent,
      };

      // Insert data into the database
      const { error: insertError } = await supabase.from("blogs").insert(blogPost);

      if (insertError) throw insertError;

      alert("Blog post saved successfully!");
    } catch (error: any) {
      console.error("Error saving blog post:", error.message);
      alert("Failed to save blog post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Jodit editor configuration
  const config = {
    readonly: false,
    height: 600,
    toolbar: true,
    saveModeInSessionStorage: false,
    autofocus: false,
    showCharsCounter: true,
    showWordsCounter: true,
  };
  
  

  const handleEditorChange = (newContent: string) => {
    // Ensure the content is trimmed when it changes
    contentRef.current = newContent.trim(); // Trim the content before updating the ref
  };

  const handleEditorBlur = () => {
    // Ensure the latest content is stored in the ref and trimmed
    if (editor.current) {
      contentRef.current = editor.current?.value.trim();
    }
  };

  // Focus Control: Prevent focus jumping
  useEffect(() => {
    const editorInstance = editor.current;
    if (editorInstance && editorInstance.jodit) {
      editorInstance.jodit.events.on("focus", (e: Event) => {
        // Prevent focus stealing by stopping event propagation
        e.stopPropagation();
      });
    }
  }, []);

  return (
    <div className="p-6 min-h-screen box-container border-slate-400">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Blog Editor</h1>

      <div className="p-6 bg-white rounded-md shadow-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Create a Blog Post</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Blog Title */}
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
              Blog Title
            </label>
            <input
              type="text"
              id="title"
              ref={titleRef}
              placeholder="Enter blog title"
              className="w-full px-5 py-2 border rounded-full focus:outline-none focus:ring focus:ring-gray-400"
            />
          </div>

          {/* Featured Image */}
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="featured-image">
              Featured Image
            </label>
            <div className="flex items-center">
              <input
                type="file"
                id="featured-image"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
              <label
                htmlFor="featured-image"
                className="px-4 py-2 bg-gray-700 text-white rounded-full cursor-pointer hover:bg-gray-800"
              >
                Choose File
              </label>
              <span className="ml-4 text-gray-600">{fileName}</span>
            </div>
          </div>

          {/* Author Name */}
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="author">
              Author Name
            </label>
            <input
              type="text"
              id="author"
              ref={authorRef}
              placeholder="Enter author name"
              className="w-full px-5 py-2 border rounded-full focus:outline-none focus:ring focus:ring-gray-400"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="tags">
              Tags
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                id="tags"
                ref={tagInputRef}
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Add a tag and press Enter"
                className="flex-grow px-5 py-2 border rounded-full focus:outline-none focus:ring focus:ring-gray-400"
              />
              <button
                onClick={addTag}
                className="px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-800"
              >
                Add
              </button>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
              Blog Description
            </label>
            <textarea
              id="description"
              ref={descriptionRef}
              placeholder="Enter a brief description of the blog"
              className="w-full px-5 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-400"
              rows={3}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
              Generate a Blog
            </label>
            <div className="flex items-center space-x-5">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter a keyword"
                className="w-80 md:w-96 p-3 px-5 border border-gray-300 rounded-full focus:outline-none focus:ring focus:ring-blue-300 transition-all duration-300"
              />
              <button
                onClick={handleGenerate}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold rounded-full hover:scale-105 transform transition-all duration-300"
              >
                {isLoading ? "Generating..." : "Generate"}
              </button>
            </div>
          </div>
        </div>

        {/* Tags Display */}
        <div className="my-4">
          <h3 className="text-gray-700 font-bold mb-2">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="flex items-center gap-2 px-3 py-1 bg-gray-200 text-teal-800 rounded-full text-sm"
              >
                {tag}
                <button
                  onClick={() => removeTag(tag)}
                  className="text-gray-400 hover:text-gray-600 text-xs transition-all"
                >
                  <FaTimes />
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Editor */}
        <div className="rounded-lg mb-4 mt-4">
        <JoditEditor
          ref={editor}
          value={
            isLoading
              ? "<p class='text-gray-500'>Fetching data...</p>"
              : responseData
              ? responseData.replace(/^<p>```html[\s\S]*?```<\/p>$/g, '')
              : "<p class='text-gray-500'>Content of the blog</p>"
          }
          config={config}
          onChange={handleEditorChange}
          onBlur={handleEditorBlur}
        />


        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-800"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Blog"}
        </button>
      </div>
    </div>
  );
};

export default BlogEditor;

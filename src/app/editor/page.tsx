/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { FaTimes } from "react-icons/fa";
import { supabase } from "../lib/supabaseClient";
import "../globals.css";



// Dynamically import Jodit editor to avoid SSR issues
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const BlogEditor = () => {
  const editor = useRef<any>(null);
  const [content, setContent] = useState("<p>Start writing your blog here...</p>");
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("No file chosen");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);

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

      // Prepare the data
      const blogPost = {
        featured_img: featuredImgUrl,
        blog_title: title,
        blog_description: content.substring(0, 150), // First 150 chars for description
        author,
        tags: { data: tags },
        interactions: { likes: 0, views: 0 }, // Default interactions
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
    showCharsCounter: true,
    showWordsCounter: true,
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter blog title"
              className="w-full px-5 py-2 border rounded-full focus:outline-none focus:ring focus:ring-teal-300"
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
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter author name"
              className="w-full px-5 py-2 border rounded-full focus:outline-none focus:ring focus:ring-teal-300"
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
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Add a tag and press Enter"
                className="flex-grow px-5 py-2 border rounded-full focus:outline-none focus:ring focus:ring-teal-300"
              />
              <button
                onClick={addTag}
                className="px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-800"
              >
                Add
              </button>
            </div>
          </div>
        </div>

        {/* Display Tags */}
        <div className="mt-4">
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

        <div className="rounded-lg mb-4 mt-4">
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            onChange={(newContent: string) => setContent(newContent)}
          />
        </div>
      </div>

      <div className="mt-4">
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

"use client"
import { useRef, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import Jodit editor to avoid SSR issues
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const BlogEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("<p>Start writing your blog here...</p>");

  // Jodit editor configuration
  const config = {
    readonly: false,
    height: 400,
    toolbar: true,
    showCharsCounter: true,
    showWordsCounter: true,
    // Other settings as needed
  };

  // Handle the content change
  const handleSave = () => {
    if (editor.current && editor.current.editor) {
      const savedContent = editor.current.editor.getEditorValue();
      console.log("Saved content:", savedContent);
      setContent(savedContent); // Save content to the state if necessary
    }
  };

  // Initialize editor without React state updating constantly
  const handleChange = (newContent: string) => {
    // We won't update the state here to avoid the re-render issue
    console.log("Editor content updated (for internal use):", newContent);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Custom Blog Editor</h1>

      {/* Jodit Editor */}
      <div className="bg-white shadow-md p-4 rounded-lg mb-4">
        <JoditEditor
          ref={editor}
          value={content}
          config={config}
          onChange={handleChange} // Updates internal content (not React state)
        />
      </div>

      {/* Save button */}
      <div className="mt-4">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Save Blog
        </button>
      </div>
    </div>
  );
};

export default BlogEditor;


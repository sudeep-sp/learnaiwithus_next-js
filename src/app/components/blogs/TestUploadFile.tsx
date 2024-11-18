import { useState } from "react";
import { supabase } from "@/app/lib/supabaseClient";

const TestFileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const uploadFile = async () => {
    if (!file) {
      setUploadStatus("No file selected");
      return;
    }

    const fileName = `${Date.now()}_${file.name}`;
    const { data, error } = await supabase.storage
      .from("blog_storage") // Replace "blog_storage" with your bucket name.
      .upload(`/s/ss${fileName}`, file);

    if (error) {
      console.error("File upload error:", error.message);
      setUploadStatus(`Upload failed: ${error.message}`);
    } else {
      console.log("File uploaded successfully:", data);
      setUploadStatus(`File uploaded successfully: ${data?.path}`);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Test File Upload</h1>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="block mb-4"
      />
      <button
        onClick={uploadFile}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Upload File
      </button>
      {uploadStatus && <p className="mt-4">{uploadStatus}</p>}
    </div>
  );
};

export default TestFileUpload;

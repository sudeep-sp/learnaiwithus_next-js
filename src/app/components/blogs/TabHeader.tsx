"use client";
import React, { useState } from "react";

const allData = [
  {
    imageUrl: "url1",
    title: "Blog Post 1",
    tags: ["Tab1", "Tab2"],
    publishedDate: "2023-01-01",
    author: "Author 1",
  },
  {
    imageUrl: "url2",
    title: "Blog Post 2",
    tags: ["Tab1"],
    publishedDate: "2023-01-02",
    author: "Author 2",
  },
  {
    imageUrl: "url3",
    title: "Blog Post 3",
    tags: ["Tab3"],
    publishedDate: "2023-01-03",
    author: "Author 3",
  },
  {
    imageUrl: "url4",
    title: "Blog Post 4",
    tags: ["Tab2"],
    publishedDate: "2023-01-04",
    author: "Author 4",
  },
  {
    imageUrl: "url5",
    title: "Blog Post 5",
    tags: ["Tab3"],
    publishedDate: "2023-01-05",
    author: "Author 5",
  },
];

const getUniqueTags = (data: { tags: string[] }[]) => {
  const tags = data.flatMap((item) => item.tags);
  return ["All", ...new Set(tags)];
};

const TabHeader: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("All");
  const tabs = getUniqueTags(allData);

  const dataToDisplay =
    activeTab === "All"
      ? allData
      : allData.filter((item) => item.tags.includes(activeTab));

  return (
    <div className="mx-auto">
      <div className="flex justify-center items-center border-b border-gray-300 border-opacity-30 py-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 ${
              activeTab === tab ? "font-bold text-teal-500" : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="box-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {dataToDisplay.map((item, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h2 className="text-xl font-bold mt-2">{item.title}</h2>
            <p className="text-gray-500">
              {item.publishedDate} by {item.author}
            </p>
            <div className="flex flex-wrap mt-2">
              {item.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="bg-teal-500 text-white text-xs px-2 py-1 rounded-full mr-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabHeader;

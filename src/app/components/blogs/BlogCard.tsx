"use client";
import React from "react";

interface BlogCardProps {
  title: string;
  author: string;
  date: string;
  description: string;
  tags: string[];
  image: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  author,
  date,
  description,
  tags,
  image,
}) => {
  return (
    <div className="overflow-hidden bg-transparent">
      <img src={image} alt={title} className="w-full h-72 object-cover" />
      <div className="py-6">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-gray-500 text-sm font-bold">
          {author} - {date}
        </p>
        <p className="mt-4 text-sm text-gray-700 opacity-75">{description}</p>
        <div className="mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-bold text-gray-600 mr-2 border-2 rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

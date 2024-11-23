"use client";
import React from "react";
import Link from "next/link";
import { FaThumbsUp } from "react-icons/fa";

interface BlogCardProps {
  id: number;
  title: string;
  author: string;
  description: string;
  tags: string[];
  image: string;
  interactions: Record<string, number>;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  author,
  tags,
  image,
  interactions,
}) => {

  return (
    <Link href={`/blog/${id}`}>
      <div className="overflow-hidden bg-transparent cursor-pointer group">
        <div className="overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
          />
        </div>
        <div className="py-6">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-gray-500 text-xs font-bold mt-1 flex">
            {author} | <div  className="flex space-x-1 ml-2 items-center" ><FaThumbsUp className="mt-[2px]"/> <span>{interactions.likes}</span></div>
          </p>
          {/* <p className="mt-4 text-sm text-gray-700 opacity-75">{description}</p> */}
          <div className="mt-4">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs whitespace-nowrap font-bold text-gray-600 mr-2 border-2 rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

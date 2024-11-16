"use client";
import React, { useEffect, useState } from 'react';
import { getLatestBlogPosts } from '../lib/getLatestBlogPosts';
import { BlogPost } from '../lib/@types/types';

export default function BlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const latestPosts = await getLatestBlogPosts();
      setPosts(latestPosts);
    };
    fetchPosts();
  }, []);

  if (posts.length === 0) {
    return <p>Loading...</p>;
  }

  const mainPost = posts[0];
  const sidePosts = posts.slice(1);

  return (
    <section className="py-16 px-4 lg:px-8 boxed-container">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center lg:text-left">Recent blog posts</h2>

        <div className="mt-8 grid lg:grid-cols-[2fr_1fr] gap-8 -z-0">
          {/* Left column (main post with large image) */}
          <div className="space-y-4">
            <div className="relative aspect-w-16 aspect-h-9">
              <img
                src={mainPost.featured_img}
                alt={mainPost.blog_title}
                className="w-full h-full object-cover rounded-lg -z-1"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
            </div>
            <div>
              <p className="text-gray-400">{mainPost.author}</p>
              <h3 className="text-2xl font-semibold text-white mt-2">{mainPost.blog_title}</h3>
              <p className="text-gray-300 mt-2">{mainPost.blog_description}</p>
              <div className="mt-4 space-x-2">
                {Array.isArray(mainPost.tags.data) &&
                  mainPost.tags.data.map((tag: string, index: number) => (
                    <span key={index} className="bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full text-nowrap">
                      {tag}
                    </span>
                  ))}
              </div>
            </div>
          </div>

          {/* Right column (sidebar with two items) */}
          <div className="space-y-8">
            {sidePosts.map((post, index) => (
              <div key={index}>
                <img
                  src={post.featured_img}
                  alt={post.blog_title}
                  className="w-full h-48 sm:h-32 object-cover rounded-lg -z-0"
                />
                <div className="mt-4">
                  <p className="text-gray-400 sm:text-xs">{post.author}</p>
                  <h4 className="sm:text-md font-semibold text-white mt-1">{post.blog_title}</h4>
                  <div className="mt-2 space-x-2">
                  {Array.isArray(post.tags.data) &&
                      post.tags.data.slice(0,2).map((tag: string, idx: number) => (
                        <span key={idx} className="bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full text-nowrap">
                          {tag}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
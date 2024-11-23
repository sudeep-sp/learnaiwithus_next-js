"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';
import { BlogPost } from '@/app/lib/@types/types';
import { getBlogsData } from '@/app/lib/getBlogsData';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function LatestBlogs() {
  const [topPosts, setTopPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchTopPosts = async () => {
      const allPosts = await getBlogsData();

      // Sort by likes and select top 3 posts
      const sortedPosts = allPosts
        .sort((a, b) => (b.interactions.likes || 0) - (a.interactions.likes || 0))
        .slice(0, 3);

      setTopPosts(sortedPosts);
    };

    fetchTopPosts();
  }, []);

  if (topPosts.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <section className="py-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* <h2 className="text-4xl font-bold text-center">Writings from our team</h2>
        <p className="text-center text-gray-500 mt-4">
          The latest industry news, interviews, technologies, and resources.
        </p> */}

        <div className="mt-8 relative mx-auto">
          <Swiper
            modules={[Autoplay, EffectFade]}
            autoplay
            loop={true}
            effect={'fade'}
            slidesPerView={1}
            className="relative overflow-hidden"
          >
            {topPosts.map((post) => (
          <SwiperSlide key={post.id}>
            <Link href={`/blog/${post.id}`}>
            <div className="relative overflow-hidden">
              <img
                src={post.featured_img}
                alt={post.blog_title}
                className="w-full h-[70vh] object-cover object-center"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
                <p className="text-sm text-gray-300">{post.author}</p>
                <h3 className="text-2xl font-semibold text-white mt-2">{post.blog_title}</h3>
                <p className="text-gray-200 mt-1">{post.blog_description}</p>
                <div className="mt-4 space-x-2">
                  {Array.isArray(post.tags.data) &&
                    post.tags.data.map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="inline-block bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full text-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
              </div>
            </div>
            </Link>
          </SwiperSlide>
        ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

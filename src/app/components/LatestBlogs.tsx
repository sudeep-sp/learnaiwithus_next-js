"use client";
import React from 'react';
import { FaAngleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

const LatestBlogs = () => {
    const items = [
        { id: 1, title: "Learning to Reason with LLMs", date: "Sep 12, 2024", tags: ["Research"], image: "/image-1.jpg" },
        { id: 2, title: "o1 System Card", date: "Sep 12, 2024", tags: ["Research"], image: "/image-1.jpg" },
        { id: 3, title: "GPT-4o System Card", date: "Aug 8, 2024", tags: ["Safety & Alignment"], image: "/image-1.jpg" },
        { id: 4, title: "o1 System Card", date: "Sep 12, 2024", tags: ["Research"], image: "/image-1.jpg" },
        { id: 5, title: "Learning to Reason with LLMs", date: "Sep 12, 2024", tags: ["Research"], image: "/image-1.jpg" },
    ];
    
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
    
    return (
        <div className="latest-blogs boxed-container">
            <h2 className="text-2xl font-bold mt-10 mb-4 text-white">Research</h2>
            <Swiper
                spaceBetween={3}
                slidesPerView={3}
                scrollbar={{ draggable: true }}
                breakpoints={{
                    0: {
                        slidesPerView:1.5,
                    },
                    640: {
                        slidesPerView: 1.5,
                    },
                    768: {
                        slidesPerView: 2.5,
                    },
                    1024: {
                        slidesPerView: 3.5,
                    },
                }}
            >
                {items.map(item => (
                    <SwiperSlide key={item.id}>
                        <div className="relative p-4">
                            <img src={item.image} alt={item.title} className="w-full h-80 object-cover rounded-md" />
                            <div className="absolute inset-0 flex flex-col justify-between p-4  rounded-lg">
                                <div className="flex justify-between text-sm text-white">
                                    <span className="bg-gray-800/70 px-2 py-1 rounded text-xs">{item.date}</span>
                                    <span className="bg-gray-800/70 px-2 py-1 rounded text-xs">{item.tags[0]}</span>
                                </div>
                                <h5 className="text-md font-bold text-white bg-gray-900/70 rounded px-2 py-1 mt-4">
                                    {item.title}
                                </h5>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <SwiperSlide>
                    <div className="flex items-center justify-center h-80">
                        <a href="/more-blogs" className="inline-block  text-white px-4 py-2 rounded">
                            <span className='flex items-center'> See More <FaAngleRight className='ml-2' /></span>
                        </a>
                    </div>
                </SwiperSlide>
            </Swiper>
            <style jsx>{`
                .swiper-pagination {
                    padding-top: 10px;
                }
            `}</style>
        </div>
    );
};

export default LatestBlogs;

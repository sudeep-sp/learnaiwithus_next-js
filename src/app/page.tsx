"use client";
import AboutSection from "./components/AboutSection";
import BlogPosts from "./components/BlogPosts";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
// import LatestBlogs from "./components/LatestBlogs";
import NavSection from "./components/NavSection";
import Newsletter from "./components/Newsletter";

import { useState, useEffect } from "react";
import { getBlogsData } from "./lib/getBlogsData";
import { BlogPost } from "./lib/@types/types";

const Home = () => {
	const [tasks, setTasks] = useState<BlogPost[]>([]);

	useEffect(() => {
		fetchTasks();
	}, []);

	const fetchTasks = async () => {
		const data = await getBlogsData();
		setTasks(data);
	};
  

  return (
	<div className='home-page'>
		<HeroSection />
		<NavSection />
		<AboutSection />
		{/* <LatestBlogs /> */}
		<button onClick={() => console.log(tasks)} className=" bg-white">Show Data</button>
		<BlogPosts />
		<Newsletter />
		<Contact />
	</div>
  );
};

export default Home;
"use client";
import AboutSection from "./components/AboutSection";
import BlogPosts from "./components/BlogPosts";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import NavSection from "./components/NavSection";
import Newsletter from "./components/Newsletter";

const Home = () => {

  return (
	<div className='home-page'>
		<HeroSection />
		<NavSection />
		<AboutSection />
		<BlogPosts />
		<Newsletter />
		<Contact />
	</div>
  );
};

export default Home;
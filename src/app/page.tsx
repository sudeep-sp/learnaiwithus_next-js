"use client";
import AboutSection from "./components/AboutSection";
import BlogPosts from "./components/BlogPosts";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import NavSection from "./components/NavSection";
import Newsletter from "./components/Newsletter";
import { VortexDemo } from "./components/VertexDemo";

const Home = () => {

  return (
	<div className='home-page'>
		{/* HeroSection displayed only on large screens */}
		<div className="hidden lg:block">
        <HeroSection />
      </div>
      
      {/* VortexDemo displayed on small and medium screens */}
      <div className="block lg:hidden">
        <VortexDemo />
      </div>
		<NavSection />
		<AboutSection />
		<BlogPosts />
		<Newsletter />
		<Contact />
	</div>
  );
};

export default Home;
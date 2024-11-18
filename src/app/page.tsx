"use client";
import AboutSection from "./components/AboutSection";
import BlogPosts from "./components/BlogPosts";
import Contact from "./components/Contact";
import { MobileHeroSection } from "./components/MobileHeroSection";
import HeroSection from "./components/HeroSection";
import NavSection from "./components/NavSection";
import Newsletter from "./components/Newsletter";

const Home = () => {

  return (
	<div className='home-page'>
		{/* HeroSection displayed only on large screens */}
		<div className="hidden xl:block">
        <HeroSection />
      </div>
      
      {/* VortexDemo displayed on small and medium screens */}
      <div className="block xl:hidden">
        {/* <VortexDemo /> */}
		<MobileHeroSection />
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
import AboutSection from "./components/AboutSection";
import BlogPosts from "./components/BlogPosts";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
// import LatestBlogs from "./components/LatestBlogs";
import NavSection from "./components/NavSection";
import Newsletter from "./components/Newsletter";

const Home = () => {
  

  return (
	<div className='home-page'>
		<HeroSection />
		<NavSection />
		<AboutSection />
		{/* <LatestBlogs /> */}
		<BlogPosts />
		<Newsletter />
		<Contact />
	</div>
  );
};

export default Home;
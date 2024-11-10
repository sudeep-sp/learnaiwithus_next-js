import HeroSection from "./components/HeroSection";
import NavSection from "./components/NavSection";

const Home = () => {
  

  return (
	<div className='home-page'>
		<HeroSection />
		<NavSection />
		<div className="boxed-container ">
			<div className="about-section mt-5 px-6">
			<h2 className="text-2xl font-bold mb-4 text-white">About</h2>
			<p className="text-base leading-relaxed text-gray-400">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sapiente. Quisquam recusandae laudantium quaerat. Quaerat exercitationem, alias dolores illum aspernatur modi magnam est iste, amet a doloremque nesciunt cumque quae!
				Consequuntur dolorem dolore a velit itaque quidem, quasi alias, in dicta doloribus tempora quae autem! Quam dignissimos molestiae quisquam quas minus iste laborum quia! Ab, fugiat? Blanditiis illo explicabo reprehenderit! <br /><br />
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dicta, nemo nostrum, tempore odit deleniti officiis ut assumenda atque non quo fuga vero, ducimus rerum labore! Deleniti amet tempore possimus.
				Optio dolorum autem harum tenetur laborum quae quos voluptate consequuntur natus cupiditate, ex consectetur, officia sequi nostrum minus corrupti repellat debitis dignissimos consequatur. Laudantium fugiat aliquid labore possimus voluptatibus saepe.
				<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
			</p>
			</div>
		</div>
	</div>
  );
};

export default Home;
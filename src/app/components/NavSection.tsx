const NavSection = () => {
	return (
	  <div className="sticky top-0 bg-opacity-50 backdrop-blur" style={{ backgroundColor: '#1b1b1b' }}>
		<div className="flex flex-col md:flex-row justify-between p-4 md:px-10 box-container">
		  <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
			<div className="inline-flex space-x-4">
			  <button className="text-white text-sm rounded-full px-10 py-2 transition-all duration-300 hover:bg-blue-500 hover:text-white">
				Blog
			  </button>
			  <button className="text-white text-sm rounded-full px-10 py-2 transition-all duration-300 hover:bg-blue-500 hover:text-white">
				About
			  </button>
			</div>
		  </div>
		  <div className="sticky top-0 w-full bg-gray-900 text-white text-center py-2">
          The site is under construction
        </div>
		  <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
			<button className="text-white text-sm rounded-full px-8 py-2 transition-all duration-300 hover:bg-red-500 hover:text-white">
			  Contact 
			</button>
		  </div>
		</div>
	  </div>
	);
  };
  
  export default NavSection;
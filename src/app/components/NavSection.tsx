const NavSection = () => {
    return (
        <div className="sticky top-0 bg-opacity-70 backdrop-blur-md" style={{ backgroundColor: 'rgba(27, 27, 27, 0.7)' }}>
            <div className="flex flex-col md:flex-row justify-between p-4 md:px-10 box-container">
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                    <div className="inline-flex space-x-4">
                        <button className="text-white text-sm rounded-full px-10 py-2 transition-all duration-300 hover:bg-blue-500 hover:text-white bg-blue-500 bg-opacity-5">
                            Blog
                        </button>
                        <button className="text-white text-sm rounded-full px-10 py-2 transition-all duration-300 hover:bg-teal-500 hover:text-white bg-teal-500 bg-opacity-5">
                            About
                        </button>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                    <button className="text-white text-sm rounded-full px-8 py-2 transition-all duration-300 mt-4 sm:mt-0 hover:bg-red-500 hover:text-white bg-red-500 bg-opacity-5">
                        Contact
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavSection;
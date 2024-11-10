"use client"
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" pt-4 px-4 md:pb-4">
      <div className="box-container mx-auto flex justify-between items-center">
        <div className="text-black text-lg font-bold">
          <Link href="/">
            <span>LearnAI</span>
          </Link>
        </div>
        <div className="hidden md:flex space-x-12">
          <Link href="/">
            <span className="text-black text-sm font-bold hover:text-gray-400">Home</span>
          </Link>
          <Link href="/articles">
            <span className="text-black text-sm font-bold hover:text-gray-400">Article</span>
          </Link>
          <Link href="/about-us">
            <span className="text-black text-sm font-bold hover:text-gray-400">About Us</span>
          </Link>
          <Link href="/contact-us">
            <span className="text-black text-sm font-bold hover:text-gray-400">Contact Us</span>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden flex flex-col items-center mt-4 space-y-2 transition-all duration-300 ease-in-out transform ${
          isOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'
        }`}
      >
        <Link href="/">
          <span className="block text-black text-sm font-bold hover:text-gray-400 py-2">Home</span>
        </Link>
        <Link href="/articles">
          <span className="block text-black text-sm font-bold hover:text-gray-400 py-2">Article</span>
        </Link>
        <Link href="/about-us">
          <span className="block text-black text-sm font-bold hover:text-gray-400 py-2">About Us</span>
        </Link>
        <Link href="/contact-us">
          <span className="block text-black text-sm font-bold hover:text-gray-400 py-2">Contact Us</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
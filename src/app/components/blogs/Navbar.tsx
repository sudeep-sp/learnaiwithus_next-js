import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex sticky top-0 justify-center items-center h-16 border-b border-gray-400 border-opacity-30 bg-white z-10">
      <div className="logo_container">
        <h2 className="text-2xl font-bold">
          <Link href="/">LearnAIwithUs</Link>
        </h2>
      </div>
    </nav>
  );
};

export default Navbar;

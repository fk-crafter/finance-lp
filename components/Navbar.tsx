import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              logo
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link href="#home" className="text-gray-600 hover:text-gray-700">
              homepage
            </Link>
            <Link
              href="#features"
              className="text-gray-600 hover:text-gray-700"
            >
              features
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-gray-700">
              use cases
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-700">
              pricing
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-700">
              blog
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="#login" className="text-gray-600 hover:text-gray-700">
              sign up
            </Link>
            <Link
              href="#signup"
              className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
            >
              sign in
            </Link>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-gray-700 focus:outline-none focus:text-blue-600"
              aria-label="Open menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

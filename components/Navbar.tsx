import Link from "next/link";
import { NavLinkProps } from "@/types";

const Navbar = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-gray-900 to-gray-700 shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white">
              logo
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <NavLink href="#home">homepage</NavLink>
            <NavLink href="#features">features</NavLink>
            <NavLink href="#about">use cases</NavLink>
            <NavLink href="#contact">pricing</NavLink>
            <NavLink href="#blog">blog</NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="#waitlist"
              className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-all duration-300"
            >
              Join the waitlist
            </Link>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:text-gray-200 focus:outline-none"
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

const NavLink = ({ href, children }: NavLinkProps) => (
  <Link
    href={href}
    className="relative text-white font-medium pb-1 transition-all duration-300 group"
  >
    <span>{children}</span>
    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

export default Navbar;

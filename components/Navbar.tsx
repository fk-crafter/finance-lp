import Link from "next/link";
import { NavLinkProps } from "@/types";

const Navbar = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-gray-900 to-gray-800 top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex-shrink-0">
          <Link href="/" className="text-2xl font-bold text-white">
            Logo
          </Link>
        </div>

        <div className="hidden md:flex space-x-8 items-center ml-20">
          <NavLink href="#home">Homepage</NavLink>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#about">Use cases</NavLink>
          <NavLink href="#contact">Pricing</NavLink>
          <NavLink href="#blog">Blog</NavLink>
        </div>

        <div className="hidden md:flex items-center">
          <Link
            href="#"
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
    </nav>
  );
};

const NavLink = ({ href, children }: NavLinkProps) => (
  <Link
    href={href}
    className="text-white font-medium transition-all duration-300"
  >
    {children}
  </Link>
);

export default Navbar;

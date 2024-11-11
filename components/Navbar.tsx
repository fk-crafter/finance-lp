import Link from "next/link";
import { NavLinkProps } from "@/types";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full  top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex-shrink-0">
          <Image src="/img/logo.png" alt="Logo" width={150} height={150} />
        </div>

        <div className="hidden md:flex space-x-8 items-center ml-20">
          <NavLink href="#">Homepage</NavLink>
          <NavLink href="#">Features</NavLink>
          <NavLink href="#">Use cases</NavLink>
          <NavLink href="#">Pricing</NavLink>
          <NavLink href="#">Blog</NavLink>
        </div>

        <div className="hidden md:flex items-center">
          <Link
            href="#"
            className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-all duration-300"
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

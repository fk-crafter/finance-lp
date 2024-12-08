"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { NavLinkProps } from "@/types";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 15 }}
      className="w-full top-0 z-50 bg-white bg-opacity-10 backdrop-blur-md shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <div className="flex-shrink-0">
          <Image src="/img/logo.png" alt="Logo" width={150} height={150} />
        </div>

        <div className="hidden md:flex space-x-11 items-center">
          <NavLink href="#" delay={0.1}>
            Homepage
          </NavLink>
          <NavLink href="#" delay={0.2}>
            Features
          </NavLink>
          <NavLink href="#" delay={0.3}>
            Use cases
          </NavLink>
          <NavLink href="#" delay={0.4}>
            Pricing
          </NavLink>
          <NavLink href="#" delay={0.5}>
            Blog
          </NavLink>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="hidden md:flex items-center"
        >
          <Link
            href="#"
            className="bg-teal-500 text-white px-5 py-2 rounded-md hover:bg-teal-600 transition-all duration-300 text-lg font-semibold"
          >
            Join the waitlist
          </Link>
        </motion.div>

        <div className="md:hidden">
          <button
            type="button"
            className="text-white hover:text-gray-200 focus:outline-none"
            onClick={toggleMenu}
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

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col space-y-6 bg-gray-800 p-6"
        >
          <NavLink href="#" delay={0.1}>
            Homepage
          </NavLink>
          <NavLink href="#" delay={0.2}>
            Features
          </NavLink>
          <NavLink href="#" delay={0.3}>
            Use cases
          </NavLink>
          <NavLink href="#" delay={0.4}>
            Pricing
          </NavLink>
          <NavLink href="#" delay={0.5}>
            Blog
          </NavLink>
          <Link
            href="#"
            className="bg-teal-500 text-white px-5 py-2 rounded-md text-center font-semibold hover:bg-teal-600 transition-all duration-300"
          >
            Join the waitlist
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

const NavLink = ({
  href,
  children,
  delay,
}: NavLinkProps & { delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.4 }}
  >
    <Link
      href={href}
      className="text-white font-medium transition-all duration-300 text-lg block"
    >
      {children}
    </Link>
  </motion.div>
);

export default Navbar;

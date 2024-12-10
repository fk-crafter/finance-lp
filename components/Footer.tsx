"use client";

import Link from "next/link";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <hr className="border-t border-gray-700 my-8 -mt-12" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:items-start"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <img
                src="/img/logo.png"
                alt="Logo"
                className="w-24 hover:scale-105 transition-transform duration-300"
              />
            </div>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a href="#" className="text-white hover:text-teal-400">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-teal-400">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-teal-400">
                <FaLinkedin size={20} />
              </a>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              {
                title: "Product",
                links: ["Landingpage", "Features", "Documentation", "Pricing"],
              },
              {
                title: "Services",
                links: ["Documentation", "Themes", "UI Kit"],
              },
              {
                title: "Company",
                links: ["About", "Terms", "Privacy Policy", "Careers"],
              },
              {
                title: "More",
                links: ["Documentation", "License", "Changelog"],
              },
            ].map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-3">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <Link href="#">{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h3 className="text-lg font-semibold mb-4">
            Subscribe to our Newsletter
          </h3>
          <p className="text-gray-400 mb-6">
            Get the latest updates and offers.
          </p>
          <form className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-auto px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-md bg-teal-500 text-white font-medium hover:bg-teal-600 transition-all duration-300 shadow-[0_0_10px_#14b8a6] hover:shadow-[0_0_20px_#14b8a6] hover:scale-105 whitespace-nowrap text-center"
            >
              Subscribe
            </button>
          </form>
        </motion.div>

        <motion.div
          className="mt-4 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          &copy; 2024 FinVest. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;

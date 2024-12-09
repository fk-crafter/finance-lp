"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaMoneyBillWave } from "react-icons/fa";

const Hero = () => {
  const refStars = React.useRef(null);
  const refImage = React.useRef(null);
  const inViewStars = useInView(refStars, { once: true });
  const inViewImage = useInView(refImage, { once: true });

  return (
    <section className="relative w-full text-white pt-28 pb-12 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-900 via-gray-800 to-black">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-teal-500 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-indigo-500 opacity-30 rounded-full filter blur-3xl animate-pulse delay-500"></div>
        <div
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_1px,_transparent_1px)]"
          style={{ backgroundSize: "40px 40px" }}
        ></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-8"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          Unlock the Power of <br />
          <span className="text-teal-400 drop-shadow-[0_0_10px_#14b8a6]">
            AI in{" "}
            <span className="relative inline-block px-3 py-1 bg-transparent border-2 border-teal-500 rounded-md text-teal-400 shadow-[0_0_20px_#14b8a6]">
              Financial
            </span>
          </span>{" "}
          <span className="text-teal-400 drop-shadow-[0_0_10px_#14b8a6]">
            Analysis
          </span>{" "}
          <br />
          for Smarter Decisions{" "}
          <FaMoneyBillWave className="inline-block text-teal-400 drop-shadow-[0_0_10px_#14b8a6]" />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 max-w-3xl mx-auto text-gray-300"
        >
          Access cutting-edge insights, automate expense tracking, and maximize
          your investment performance effortlessly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-wrap justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8"
        >
          <Link
            href="#"
            className="w-full sm:w-auto bg-teal-500 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-teal-600 transition-all duration-300 drop-shadow-[0_0_10px_#14b8a6]"
          >
            Join The Waitlist
          </Link>
          <a
            href="#learn-more"
            className="w-full sm:w-auto border border-white text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            See More
          </a>
        </motion.div>

        <motion.div
          ref={refStars}
          initial={{ opacity: 0, y: 50 }}
          animate={inViewStars ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="flex flex-col items-center space-y-4 mb-12"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2">
            <div className="flex -space-x-3">
              <Image
                src="/img/1.jpg"
                alt="User 1"
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="/img/2.jpg"
                alt="User 2"
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="/img/3.jpg"
                alt="User 3"
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
            </div>
            <span className="text-gray-300 text-base sm:text-lg">
              Join 150+ satisfied beta testers
            </span>
          </div>

          <div className="flex flex-col items-center sm:flex-row justify-center space-x-1 sm:space-x-2 text-sm sm:text-lg">
            <div className="flex space-x-1">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-lg" />
                ))}
            </div>
            <span className="text-gray-300 mt-1 sm:mt-0">
              4.7 / 5 (150+ reviews)
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

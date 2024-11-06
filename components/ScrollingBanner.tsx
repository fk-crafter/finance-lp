"use client";

import { motion } from "framer-motion";
import React from "react";

const ScrollingBanner = () => {
  return (
    <div className="w-full bg-indigo-500 py-8 overflow-hidden ">
      <div className="flex">
        <motion.div
          className="flex space-x-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...Array(10)].map((_, index) => (
            <p
              key={`text-1-${index}`}
              className={`font-montserrat text-white font-bold text-2xl whitespace-nowrap px-4 ${
                index % 2 === 0 ? "opacity-100" : "opacity-40"
              }`}
            >
              Join The Waitlist
            </p>
          ))}
        </motion.div>

        <motion.div
          className="flex space-x-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...Array(10)].map((_, index) => (
            <p
              key={`text-2-${index}`}
              className={`font-montserrat text-white font-bold text-2xl whitespace-nowrap px-4 ${
                index % 2 === 0 ? "opacity-100" : "opacity-40"
              }`}
            >
              Join The Waitlist
            </p>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollingBanner;

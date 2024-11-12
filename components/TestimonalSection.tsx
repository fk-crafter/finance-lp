"use client";

import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/constants";
import { FaStar } from "react-icons/fa";

const TestimonialsSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-16 px-4 lg:px-8 text-white overflow-hidden">
      <hr className="border-t border-gray-700 my-11 -mt-16" />
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What People Are Saying About Our Finance Tool
        </h2>
        <p className="text-gray-300 text-lg">
          Discover how our tool has helped users manage, optimize, and grow
          their wealth.
        </p>
      </div>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex space-x-6"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
        >
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-40 rounded-lg p-6 shadow-md flex flex-col items-center text-left w-80 flex-shrink-0 mx-3"
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full mb-3"
              />
              <h3 className="text-lg font-semibold mb-1 text-white">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-400 mb-2">{testimonial.role}</p>
              <p className="text-gray-300 text-sm mb-4">
                {testimonial.message}
              </p>
              <div className="flex space-x-1">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-lg" />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

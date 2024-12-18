"use client";

import React from "react";
import { motion } from "framer-motion";
import Marquee from "@/components/ui/marquee";
import { testimonials } from "@/constants";

const ReviewCard = ({
  avatar,
  name,
  role,
  message,
}: {
  avatar: string;
  name: string;
  role: string;
  message: string;
}) => {
  return (
    <motion.figure
      className="relative w-full max-w-xs sm:max-w-sm md:w-72 overflow-hidden rounded-2xl border border-gray-700 p-4 sm:p-6 bg-gradient-to-b from-gray-900 to-gray-800 shadow-lg transition-transform hover:scale-105 duration-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex flex-row items-center gap-3 sm:gap-4 mb-4">
        <img
          className="rounded-full border-2 border-teal-500"
          width="48"
          height="48"
          alt=""
          src={avatar}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm sm:text-md font-bold text-white">
            {name}
          </figcaption>
          <p className="text-xs sm:text-sm font-medium text-gray-400">{role}</p>
        </div>
      </div>
      <blockquote className="text-xs sm:text-sm text-gray-300 italic">
        {message}
      </blockquote>
    </motion.figure>
  );
};

export const TestimonialsSection = () => {
  const firstRow = testimonials.slice(0, testimonials.length / 2);
  const secondRow = testimonials.slice(testimonials.length / 2);

  return (
    <motion.section
      className="relative h-auto w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 py-12 sm:py-16 px-4 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 sm:mb-8 text-white text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Hear From Our Users
      </motion.h2>
      <motion.p
        className="text-gray-300 text-sm sm:text-lg mb-8 sm:mb-12 max-w-xl sm:max-w-2xl text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        Discover how our tool has helped users manage, optimize, and grow their
        wealth efficiently.
      </motion.p>
      <div className="relative flex w-full flex-col items-center justify-center space-y-6 sm:space-y-8">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((testimonial) => (
            <ReviewCard key={testimonial.name} {...testimonial} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((testimonial) => (
            <ReviewCard key={testimonial.name} {...testimonial} />
          ))}
        </Marquee>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;

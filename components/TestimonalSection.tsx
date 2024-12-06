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
      className="relative w-72 overflow-hidden rounded-2xl border border-gray-700 p-6 bg-gradient-to-b from-gray-900 to-gray-800 shadow-lg transition-transform hover:scale-105 duration-300"
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex flex-row items-center gap-4 mb-4">
        <img
          className="rounded-full border-2 border-teal-500"
          width="48"
          height="48"
          alt=""
          src={avatar}
        />
        <div className="flex flex-col">
          <figcaption className="text-md font-bold text-white">{name}</figcaption>
          <p className="text-sm font-medium text-gray-400">{role}</p>
        </div>
      </div>
      <blockquote className="text-sm text-gray-300 italic">{message}</blockquote>
    </motion.figure>
  );
};

export const TestimonialsSection = () => {
  const firstRow = testimonials.slice(0, testimonials.length / 2);
  const secondRow = testimonials.slice(testimonials.length / 2);

  return (
    <motion.section
      className="relative h-auto w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-4 lg:px-8"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        className="text-4xl font-extrabold mb-8 text-white"
        initial={{ y: -20 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        What People Are Saying About Our Finance Tool
      </motion.h2>
      <motion.p
        className="text-gray-300 text-lg mb-12 max-w-2xl text-center"
        initial={{ y: -20 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        Discover how our tool has helped users manage, optimize, and grow their wealth efficiently.
      </motion.p>
      <div className="relative flex w-full flex-col items-center justify-center space-y-6">
        <Marquee pauseOnHover className="[--duration:25s]">
          {firstRow.map((testimonial) => (
            <ReviewCard key={testimonial.name} {...testimonial} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:25s]">
          {secondRow.map((testimonial) => (
            <ReviewCard key={testimonial.name} {...testimonial} />
          ))}
        </Marquee>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;

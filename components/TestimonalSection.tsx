"use client";

import React from "react";
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
    <figure className="relative w-72 overflow-hidden rounded-2xl border border-gray-700 p-6 bg-gradient-to-b from-gray-900 to-gray-800 shadow-lg transition-transform hover:scale-105 duration-300">
      <div className="flex flex-row items-center gap-4 mb-4">
        <img className="rounded-full border-2 border-teal-500" width="48" height="48" alt="" src={avatar} />
        <div className="flex flex-col">
          <figcaption className="text-md font-bold text-white">{name}</figcaption>
          <p className="text-sm font-medium text-gray-400">{role}</p>
        </div>
      </div>
      <blockquote className="text-sm text-gray-300 italic">{message}</blockquote>
    </figure>
  );
};

export const TestimonialsSection = () => {
  const firstRow = testimonials.slice(0, testimonials.length / 2);
  const secondRow = testimonials.slice(testimonials.length / 2);

  return (
    <section className="relative h-[500px] w-full flex flex-col items-center justify-center overflow-hidden bg-gray-800 py-16 px-4 lg:px-8">
      <h2 className="text-3xl font-bold mb-6 text-white">
        What People Are Saying About Our Finance Tool
      </h2>
      <p className="text-gray-300 text-lg mb-8">
        Discover how our tool has helped users manage, optimize, and grow their wealth.
      </p>
      <div className="relative flex w-full flex-col items-center justify-center">
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-800 to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-800 to-transparent pointer-events-none"></div>

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
    </section>
  );
};


export default TestimonialsSection;

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaWallet,
  FaGlobe,
  FaShieldAlt,
  FaBullseye,
  FaBalanceScale,
} from "react-icons/fa";
import { TbPlayerPlay } from "react-icons/tb";
import { FeatureCardProps } from "@/types";
import Image from "next/image";

const FinanceSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-900 py-12 px-4 sm:px-6 lg:px-8 text-white">
      <hr className="border-t border-gray-700 my-8" />
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Why Our Finance Tool is Your Best Choice
        </motion.h2>
        <motion.p
          className="text-gray-300 text-base sm:text-lg mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover how our financial tool can help you manage, optimize, and
          grow your wealth efficiently.
        </motion.p>

        <motion.div
          className="relative mx-auto mb-8 w-full max-w-sm sm:max-w-3xl aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="absolute inset-0 bg-gray-800 bg-opacity-30 flex items-center justify-center">
            <motion.button
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-teal-500 text-white flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <TbPlayerPlay className="text-2xl sm:text-3xl" />
            </motion.button>
          </div>
          <Image
            src="/img/financedash.jpg"
            alt="Finance Video"
            className="object-cover w-full h-full"
            width={800}
            height={450}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <FeatureCard
            icon={<FaWallet className="text-teal-500 text-2xl sm:text-3xl" />}
            title="Budget Management"
            description="Track and manage your budget effortlessly."
          />
          <FeatureCard
            icon={
              <FaShieldAlt className="text-teal-500 text-2xl sm:text-3xl" />
            }
            title="Data Security"
            description="We prioritize your data security with top-notch protection."
          />
          <FeatureCard
            icon={<FaBullseye className="text-teal-500 text-2xl sm:text-3xl" />}
            title="Investment Goals"
            description="Set and reach your financial goals with ease."
          />
          <FeatureCard
            icon={<FaGlobe className="text-teal-500 text-2xl sm:text-3xl" />}
            title="Global Access"
            description="Access your data and insights anytime, anywhere."
          />
          <FeatureCard
            icon={
              <FaBalanceScale className="text-teal-500 text-2xl sm:text-3xl" />
            }
            title="Financial Planning"
            description="Get insights for long-term financial planning."
          />
          <FeatureCard
            icon={
              <FaChartLine className="text-teal-500 text-2xl sm:text-3xl" />
            }
            title="Analytics & Insights"
            description="Detailed analytics to help you make informed decisions."
          />
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  const lightStyle = {
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.2), transparent 60%)`,
  };

  return (
    <motion.div
      className="relative flex flex-col items-center text-center p-4 bg-gray-800 bg-opacity-40 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
      style={lightStyle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="mb-2 sm:mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {icon}
      </motion.div>
      <motion.h3
        className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {title}
      </motion.h3>
      <motion.p
        className="text-gray-400 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default FinanceSection;

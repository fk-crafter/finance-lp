"use client";

import React, { useState } from "react";
import {
  FaChartLine,
  FaWallet,
  FaGlobe,
  FaShieldAlt,
  FaBullseye,
  FaBalanceScale,
} from "react-icons/fa";
import { FeatureCardProps } from "@/types";

const FinanceSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-16 px-4 lg:px-8 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Why Our Finance Tool is Your Best Choice
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          Discover how our financial tool can help you manage, optimize, and
          grow your wealth efficiently.
        </p>

        <div className="relative mx-auto mb-10 w-full max-w-3xl aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-gray-800 bg-opacity-30 flex items-center justify-center">
            <button className="w-20 h-20 rounded-full bg-indigo-500 text-white flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110">
              <FaChartLine className="text-3xl" />
            </button>
          </div>
          <img
            src="/images/finance-video-placeholder.jpg"
            alt="Finance Video"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          <FeatureCard
            icon={<FaWallet className="text-indigo-500 text-3xl" />}
            title="Budget Management"
            description="Track and manage your budget effortlessly."
          />
          <FeatureCard
            icon={<FaShieldAlt className="text-indigo-500 text-3xl" />}
            title="Data Security"
            description="We prioritize your data security with top-notch protection."
          />
          <FeatureCard
            icon={<FaBullseye className="text-indigo-500 text-3xl" />}
            title="Investment Goals"
            description="Set and reach your financial goals with ease."
          />
          <FeatureCard
            icon={<FaGlobe className="text-indigo-500 text-3xl" />}
            title="Global Access"
            description="Access your data and insights anytime, anywhere."
          />
          <FeatureCard
            icon={<FaBalanceScale className="text-indigo-500 text-3xl" />}
            title="Financial Planning"
            description="Get insights for long-term financial planning."
          />
          <FeatureCard
            icon={<FaChartLine className="text-indigo-500 text-3xl" />}
            title="Analytics & Insights"
            description="Detailed analytics to help you make informed decisions."
          />
        </div>
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
    <div
      className="relative flex flex-col items-center text-center p-4 bg-gray-800 bg-opacity-40 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
      style={lightStyle}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

export default FinanceSection;

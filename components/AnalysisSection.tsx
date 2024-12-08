"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChartPie, FaBriefcase, FaMoneyBillWave, FaWallet } from "react-icons/fa";
import { AnalysisProps, TiltCardProps } from "@/types";

const AnalysisSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-12 px-4 sm:py-16 lg:py-20 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <TiltCard>
          <h3 className="lg:text-lg text-base font-semibold text-gray-200 mb-6 text-center lg:text-left">
            Financial Activity
          </h3>
          <div className="space-y-6">
  <div className="flex items-center justify-center space-x-4">
    <div className="w-14 h-14 bg-teal-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
      <FaWallet />
    </div>
    <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white text-md font-bold">
      $7,000
    </div>
    <p className="text-gray-300 text-base">Savings</p>
  </div>
  <div className="flex items-center justify-center space-x-4 ml-8 lg:ml-6">
    <div className="w-14 h-14 bg-gray-600 rounded-full flex items-center justify-center text-white">
      <FaBriefcase />
    </div>
    <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center text-white">
      $8,000
    </div>
    <p className="text-gray-300 text-base">Investments</p>
  </div>
  <div className="flex items-center justify-center space-x-4 ml-3">
    <div className="w-14 h-14 bg-teal-500 rounded-full flex items-center justify-center text-white">
      <FaMoneyBillWave />
    </div>
    <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center text-white">
      $4,000
    </div>
    <p className="text-gray-300 text-base">Expenses</p>
  </div>
</div>
          <div className="mt-8 text-center lg:text-left">
            <h4 className="text-gray-200 font-medium mb-4 lg:text-lg text-base">
              Monthly Comparison
            </h4>
            <div className="bg-gray-800 rounded-lg p-2 flex justify-between items-center mb-2">
              <p className="text-gray-300 text-xs lg:text-sm">This Month</p>
              <motion.div
                className="w-full bg-teal-800 h-1 rounded"
                initial={{ width: 0 }}
                animate={{ width: "50%" }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>
            <div className="bg-gray-800 rounded-lg p-2 flex justify-between items-center">
              <p className="text-gray-300 text-xs lg:text-sm">Last Month</p>
              <motion.div
                className="w-full bg-teal-500 h-1 rounded"
                initial={{ width: 0 }}
                animate={{ width: "25%" }}
                transition={{ duration: 1, delay: 0.6 }}
              />
            </div>
          </div>
        </TiltCard>

        <motion.div
          className="space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="text-xl lg:text-2xl font-bold leading-tight mb-4">
            Help You Organize <br /> and Grow Your Finances
          </h3>
          <div className="space-y-4">
            <InfoCard
              icon={<FaChartPie className="text-teal-500 text-lg" />}
              title="Smart Financial Planning"
              description="Easily track your savings, expenses, and investments to optimize your budget."
            />
            <InfoCard
              icon={<FaBriefcase className="text-teal-500 text-lg" />}
              title="Professional Investment Insights"
              description="Receive reliable insights to make better financial decisions and grow your wealth."
            />
            <InfoCard
              icon={<FaMoneyBillWave className="text-teal-500 text-lg" />}
              title="Savings Optimization"
              description="Identify areas to save and accumulate more efficiently for future goals."
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TiltCard = ({ children }: TiltCardProps) => {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;

    setStyle({
      transform: `rotateY(${x}deg) rotateX(${y}deg)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: `rotateY(0deg) rotateX(0deg)`,
    });
  };

  return (
    <motion.div
      className="group bg-white bg-opacity-5 p-6 rounded-lg shadow-md text-center relative overflow-hidden"
      style={{
        ...style,
        transition: "transform 0.1s ease-out",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-teal-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"></div>
      {children}
    </motion.div>
  );
};

const InfoCard = ({ icon, title, description }: AnalysisProps) => {
  return (
    <div className="flex items-start space-x-4 max-w-sm mx-auto lg:mx-0">
      <div>{icon}</div>
      <div>
        <h4 className="text-md font-semibold">{title}</h4>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default AnalysisSection;

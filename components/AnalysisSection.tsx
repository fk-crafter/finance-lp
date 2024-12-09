"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaChartPie,
  FaBriefcase,
  FaMoneyBillWave,
  FaWallet,
} from "react-icons/fa";
import { AnalysisProps, TiltCardProps } from "@/types";

const AnalysisSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-12 px-4 sm:py-16 lg:py-20 text-white overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500 opacity-20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-52 h-52 bg-indigo-500 opacity-20 rounded-full filter blur-3xl animate-pulse delay-300"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <TiltCard>
          <h3 className="lg:text-lg text-base font-semibold text-gray-200 mb-6 text-center lg:text-left">
            Financial Activity
          </h3>
          <div className="space-y-6">
            <motion.div
              className="flex items-center justify-center space-x-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-14 h-14 bg-teal-500 rounded-full flex items-center justify-center text-white text-lg font-bold drop-shadow-[0_0_10px_#14b8a6]">
                <FaWallet />
              </div>
              <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center text-white">
                $7,000
              </div>
              <p className="text-gray-300 text-base">Savings</p>
            </motion.div>

            <motion.div
              className="flex items-center justify-center space-x-4 ml-8 lg:ml-7"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-14 h-14 bg-gray-600 rounded-full flex items-center justify-center text-white">
                <FaBriefcase />
              </div>
              <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center text-white">
                $8,000
              </div>
              <p className="text-gray-300 text-base">Investments</p>
            </motion.div>

            <motion.div
              className="flex items-center justify-center space-x-4 ml-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-14 h-14 bg-teal-500 rounded-full flex items-center justify-center text-white drop-shadow-[0_0_10px_#14b8a6]">
                <FaMoneyBillWave />
              </div>
              <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center text-white">
                $4,000
              </div>
              <p className="text-gray-300 text-base">Expenses</p>
            </motion.div>
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
            Organize Your <br />{" "}
            <span className="relative inline-block px-3 py-1 bg-transparent border-2 border-teal-500 rounded-md text-teal-400 shadow-[0_0_10px_#14b8a6]">
              Finances
            </span>{" "}
            Efficiently
          </h3>
          <div className="space-y-4">
            <InfoCard
              icon={
                <FaChartPie className="text-teal-500 text-lg drop-shadow-[0_0_10px_#14b8a6]" />
              }
              title="Smart Financial Planning"
              description="Easily track your savings, expenses, and investments to optimize your budget."
            />
            <InfoCard
              icon={
                <FaBriefcase className="text-teal-500 text-lg drop-shadow-[0_0_10px_#14b8a6]" />
              }
              title="Professional Investment Insights"
              description="Receive reliable insights to make better financial decisions and grow your wealth."
            />
            <InfoCard
              icon={
                <FaMoneyBillWave className="text-teal-500 text-lg drop-shadow-[0_0_10px_#14b8a6]" />
              }
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
  return (
    <motion.div
      className="group bg-white bg-opacity-5 p-6 rounded-lg shadow-md text-center relative overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
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

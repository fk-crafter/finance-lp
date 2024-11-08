"use client";

import React, { useState } from "react";
import { FaChartPie, FaBriefcase, FaPiggyBank } from "react-icons/fa";
import { AnalysisProps, TiltCardProps } from "@/types";

const AnalysisSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-16 px-4 lg:px-8 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <TiltCard>
          <h3 className="text-lg font-semibold text-gray-200 mb-6">
            Financial Activity
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3 mb-4 mr-4">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-white text-md font-bold">
                $7,000
              </div>
              <p className="text-gray-300">Savings</p>
            </div>
            <div className="flex items-center justify-center space-x-3 mb-4 ml-5">
              <div className="w-14 h-14 bg-gray-600 rounded-full flex items-center justify-center text-white">
                $8,000
              </div>
              <p className="text-gray-300">Investments</p>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-14 h-14 bg-gray-600 rounded-full flex items-center justify-center text-white">
                $4,000
              </div>
              <p className="text-gray-300">Expenses</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <h4 className="text-gray-200 font-medium mb-2">
              Monthly Comparison
            </h4>
            <div className="bg-gray-800 rounded-lg p-2 flex justify-between items-center mb-1">
              <p className="text-gray-300 text-xs">This Month</p>
              <div className="w-1/2 bg-indigo-800 h-1 rounded"></div>
            </div>
            <div className="bg-gray-800 rounded-lg p-2 flex justify-between items-center">
              <p className="text-gray-300 text-xs">Last Month</p>
              <div className="w-1/4 bg-indigo-500 h-1 rounded"></div>
            </div>
          </div>
        </TiltCard>

        <div className="space-y-4 md:text-left text-center">
          <h3 className="text-2xl font-bold leading-tight mb-4">
            Help You Organize <br /> and Grow Your Finances
          </h3>
          <div className="space-y-4">
            <InfoCard
              icon={<FaChartPie className="text-indigo-500 text-lg" />}
              title="Smart Financial Planning"
              description="Easily track your savings, expenses, and investments to optimize your budget."
            />
            <InfoCard
              icon={<FaBriefcase className="text-indigo-500 text-lg" />}
              title="Professional Investment Insights"
              description="Receive reliable insights to make better financial decisions and grow your wealth."
            />
            <InfoCard
              icon={<FaPiggyBank className="text-indigo-500 text-lg" />}
              title="Savings Optimization"
              description="Identify areas to save and accumulate more efficiently for future goals."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const TiltCard: React.FC<TiltCardProps> = ({ children }) => {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;

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
    <div
      className="group bg-white bg-opacity-5 p-6 rounded-lg shadow-md text-center transition-transform duration-300 relative overflow-hidden"
      style={{
        ...style,
        transition: "transform 0.1s ease-out",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-indigo-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"></div>
      {children}
    </div>
  );
};

const InfoCard = ({ icon, title, description }: AnalysisProps) => {
  return (
    <div className="flex items-start space-x-4 max-w-md mx-auto md:mx-0">
      <div>{icon}</div>
      <div>
        <h4 className="text-md font-semibold">{title}</h4>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default AnalysisSection;

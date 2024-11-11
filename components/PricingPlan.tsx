"use client";

import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import { pricingFeatures } from "@/constants";
import { PricingCardProps } from "@/types";

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );

  const pricing = {
    monthly: {
      silver: "$50/month",
      gold: "$100/month",
      premium: "$150/month",
    },
    yearly: {
      silver: "$500/year",
      gold: "$1000/year",
      premium: "$1500/year",
    },
  };

  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-16 px-4 lg:px-8 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Plans</h2>
        <p className="text-gray-300 text-lg mb-8">
          Choose the plan that best suits your needs. All plans come with a free
          14-day trial of our Premium features.
        </p>

        <div className="relative flex justify-center mb-12">
          <div className="flex w-52 space-x-1 bg-gray-700 rounded-lg p-1 relative">
            <motion.div
              layout
              initial={false}
              animate={{ x: billingCycle === "monthly" ? 0 : "100%" }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="absolute top-0 left-0 w-1/2 h-full bg-teal-500 rounded-lg"
            />
            <button
              onClick={() => setBillingCycle("monthly")}
              className="relative z-10 w-1/2 py-2 font-medium text-white focus:outline-none"
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className="relative z-10 w-1/2 py-2 font-medium text-white focus:outline-none"
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PricingCard
            title="Silver"
            price={
              billingCycle === "monthly"
                ? pricing.monthly.silver
                : pricing.yearly.silver
            }
            features={pricingFeatures.silver}
          />
          <PricingCard
            title="Gold"
            price={
              billingCycle === "monthly"
                ? pricing.monthly.gold
                : pricing.yearly.gold
            }
            features={pricingFeatures.gold}
            popular
          />
          <PricingCard
            title="Premium"
            price={
              billingCycle === "monthly"
                ? pricing.monthly.premium
                : pricing.yearly.premium
            }
            features={pricingFeatures.premium}
          />
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ title, price, features, popular }: PricingCardProps) => (
  <div
    className={`relative rounded-lg p-6 shadow-md transition-all duration-300 ${
      popular
        ? "bg-teal-600 text-white scale-105 transform translate-y-2 shadow-2xl z-10"
        : "bg-gray-800 bg-opacity-40"
    }`}
    style={{ marginTop: popular ? "-20px" : "0" }}
  >
    {popular && (
      <span className="absolute top-[-12px] left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white font-semibold py-1 px-3 rounded-full text-sm">
        MOST POPULAR
      </span>
    )}
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-4xl font-bold mb-4">{price}</p>

    <hr className="border-t border-gray-500 my-4" />

    <ul className="text-gray-300 mb-6 space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <FaCheck className="text-teal-500 mr-2" /> {feature}
        </li>
      ))}
    </ul>

    <button className="bg-teal-100 text-gray-900 font-medium py-2 px-4 rounded-md hover:bg-teal-800 hover:text-white transition-all duration-300">
      Choose Plan
    </button>
  </div>
);

export default PricingPlans;
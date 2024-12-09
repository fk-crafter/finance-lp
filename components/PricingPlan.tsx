"use client";

import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import { pricingFeatures, pricing } from "@/constants";
import { PricingCardProps } from "@/types";

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );

  return (
    <motion.section
      className="relative py-16 px-4 lg:px-8 text-white overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-900 via-gray-800 to-black">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-teal-500 opacity-20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-indigo-500 opacity-20 rounded-full filter blur-3xl animate-pulse delay-500"></div>
        <div
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_1px,_transparent_1px)]"
          style={{ backgroundSize: "40px 40px" }}
        ></div>
      </div>

      <hr className="border-t border-gray-700 my-8 -mt-12" />
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Plans</h2>
        <p className="text-gray-300 text-lg mb-8">
          Choose the plan that best suits your needs. All plans come with a free
          14-day trial of our Premium features.
        </p>

        <motion.div
          className="relative flex justify-center mb-16"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
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
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          key={billingCycle}
          initial={{ opacity: 0, x: billingCycle === "monthly" ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: billingCycle === "monthly" ? 50 : -50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <PricingCard
            title="Silver"
            price={
              billingCycle === "monthly"
                ? pricing.monthly.silver
                : pricing.yearly.silver.price
            }
            features={pricingFeatures.silver}
            trialText="14 Days Free Trial"
          />
          <PricingCard
            title="Gold"
            price={
              billingCycle === "monthly"
                ? pricing.monthly.gold
                : pricing.yearly.gold.price
            }
            features={pricingFeatures.gold}
            popular
            trialText="30 Days Satisfaction or Refund"
          />
          <PricingCard
            title="Premium"
            price={
              billingCycle === "monthly"
                ? pricing.monthly.premium
                : pricing.yearly.premium.price
            }
            features={pricingFeatures.premium}
            trialText="14 Days Free Trial"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

const PricingCard = ({
  title,
  price,
  features,
  popular,
  trialText,
}: PricingCardProps & { trialText: string }) => (
  <div
    className={`relative rounded-lg p-6 shadow-md transition-all duration-300 ${
      popular
        ? "bg-teal-600 text-white scale-105 transform translate-y-2 z-10 shadow-[0_0_20px_#14b8a6]"
        : "bg-gray-600 bg-opacity-40 shadow-[0_0_10px_#14b8a6]"
    } mt-4 mb-4 md:mt-0 md:mb-0 pb-16 lg:pb-8`}
    style={{ marginTop: popular ? "-20px" : "0" }}
  >
    {popular && (
      <span className="absolute top-[-12px] left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white font-semibold py-1 px-3 rounded-full text-sm">
        MOST POPULAR
      </span>
    )}
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <div className="mb-4">
      <p className="text-4xl font-bold">{price}</p>
    </div>

    <hr className="border-t border-gray-500 my-4" />

    <ul className="text-gray-300 mb-6 space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-2">
          <FaCheck className="text-teal-500 mt-1" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>

    <p className="text-teal-400 text-sm font-medium mb-4">{trialText}</p>

    <button className="bg-teal-100 text-gray-900 font-medium py-2 px-4 rounded-md hover:bg-teal-800 hover:text-white transition-all duration-300">
      Choose Plan
    </button>
  </div>
);

export default PricingPlans;

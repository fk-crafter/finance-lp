"use client";

import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import { pricingFeatures } from "@/constants";
import { PricingCardProps } from "@/types";

const PricingPlans = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-16 px-4 lg:px-8 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Plans</h2>
        <p className="text-gray-300 text-lg mb-8">
          Choose the plan that best suits your needs. All plans come with a free
          14-day trial of our Premium features.
        </p>

        <div className="flex justify-center mb-8">
          <button className="text-white font-medium bg-indigo-500 px-4 py-2 rounded-l-lg">
            Monthly
          </button>
          <button className="text-gray-300 font-medium bg-gray-700 px-4 py-2 rounded-r-lg">
            Yearly
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PricingCard
            title="Silver"
            price="$50/month"
            features={pricingFeatures.silver}
            delay={0}
          />
          <PricingCard
            title="Gold"
            price="$100/month"
            features={pricingFeatures.gold}
            popular
            delay={0.2}
          />
          <PricingCard
            title="Premium"
            price="$150/month"
            features={pricingFeatures.premium}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({
  title,
  price,
  features,
  popular,
  delay,
}: PricingCardProps) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [0, -5, 0] }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    }}
    className={`relative rounded-lg p-6 shadow-md ${
      popular ? "bg-indigo-600 text-white" : "bg-gray-800 bg-opacity-40"
    }`}
  >
    {popular && (
      <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-white font-semibold py-1 px-3 rounded-full text-sm">
        MOST POPULAR
      </span>
    )}
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-4xl font-bold mb-4">{price}</p>

    <hr className="border-t border-gray-500 my-4" />

    <ul className="text-gray-300 mb-6 space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <FaCheck className="text-indigo-500 mr-2" /> {feature}
        </li>
      ))}
    </ul>

    <button className="bg-indigo-200 text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-400 transition-all duration-300">
      Choose Plan
    </button>
  </motion.div>
);

export default PricingPlans;

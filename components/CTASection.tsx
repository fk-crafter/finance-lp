"use client";

import React from "react";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-900 flex justify-center py-16 px-4 lg:px-8">
      <div className="relative max-w-4xl w-full bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-10 text-center shadow-lg border border-opacity-20 border-white">
        <h2 className="text-3xl font-semibold text-white mb-4">
          Explore Free Version now!
        </h2>
        <p className="text-gray-300 mb-8">
          Get a 14-day free trial to test our features and maximize your
          financial potential.
        </p>

        <div className="flex justify-center space-x-6">
          <Link
            href="#"
            className="bg-teal-500 text-white px-6 py-3 rounded-md font-medium hover:bg-teal-600 transition duration-300"
          >
            Join Waitlist
          </Link>
          <Link
            href="#"
            className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-gray-900 transition duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <motion.section
      className="bg-gradient-to-r from-gray-800 to-gray-900 flex justify-center py-16 px-4 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative max-w-4xl w-full bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-10 text-center shadow-lg border border-opacity-20 border-white"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <motion.h2
          className="text-3xl font-semibold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Join Our Beta Testers in the Next Opening Wave!
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          Sign now to gain 14-days free access during the next beta-testing
          wave.
        </motion.p>
        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Link
            href="#"
            className="bg-teal-500 text-white px-6 py-3 rounded-md font-medium hover:bg-teal-600 transition duration-300 whitespace-nowrap"
          >
            Join Waitlist
          </Link>
          <Link
            href="#"
            className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-gray-900 transition duration-300"
          >
            Contacttt
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default CTASection;

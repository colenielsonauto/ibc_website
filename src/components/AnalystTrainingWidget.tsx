"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AnalystTrainingWidget() {
  return (
    <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-[#0a2966]/90 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl mt-4 overflow-hidden relative">
      {/* Background animated gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-[#0a2966]/20 to-[#0a2966]/0"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ 
          repeat: Infinity, 
          duration: 3, 
          ease: "linear",
          repeatType: "loop"
        }}
      />
      
      <motion.div 
        className="flex-grow text-center lg:text-left relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h2 className="text-2xl font-medium lg:text-3xl">
          Analyst Training Program
        </h2>
        <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
          Our flagship program preparing students for careers in investment banking through hands-on training and mentorship.
        </p>
      </motion.div>
      
      <motion.div 
        className="flex-shrink-0 w-full text-center lg:w-auto relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        whileHover={{ scale: 1.05 }}
      >
        <Link
          href="/training"
          className="inline-block py-3 mx-auto text-lg font-medium text-center text-[#0a2966] bg-white rounded-md px-7 lg:px-10 lg:py-5 hover:bg-gray-100 transition-colors"
        >
          Apply Now
        </Link>
      </motion.div>
    </div>
  );
} 
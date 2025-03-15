"use client";

import React from "react";
import { Container } from "@/components/Container";
import Link from "next/link";
import { motion } from "framer-motion";

export const Cta = () => {
  return (
    <Container>
      <motion.div
        className="w-full max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="relative overflow-hidden rounded-xl">
          {/* Animated background gradient */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-[#0a2966]/30 via-[#0a2966]/0 to-[#0a2966]/30"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ 
              repeat: Infinity, 
              duration: 5, 
              ease: "linear",
              repeatType: "loop"
            }}
          />
          
          <div className="flex flex-wrap items-center justify-between w-full text-white bg-[#0a2966] px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap shadow-lg hover:shadow-xl transition-all duration-300 relative z-10">
            <motion.div 
              className="flex-grow text-center lg:text-left"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h2 className="text-2xl font-medium lg:text-3xl">
                Ready to join the Investment Banking Club?
              </h2>
              <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
                Take the first step towards your career in investment banking.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex-shrink-0 w-full text-center lg:w-auto"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="inline-block py-3 mx-auto text-lg font-medium text-center text-[#0a2966] bg-white rounded-md px-7 lg:px-10 lg:py-5 hover:bg-gray-100 transition-colors"
              >
                Click Here
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

"use client";

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AnimatedHeading, AnimatedText, AnimatedList } from './animations';

interface BulletPointProps {
  index: number;
  children: ReactNode;
}

export default function WhyJoinAnimation() {
  const bulletPoints = [
    "Comprehensive training in financial modeling and valuation",
    "Networking opportunities with industry professionals",
    "Resume and interview preparation for finance roles",
    "Hands-on experience through competitions and case studies",
    "Community of like-minded students interested in finance"
  ];

  return (
    <div className="bg-[#0a2966]/5 dark:bg-gray-800 rounded-xl p-8 my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <AnimatedHeading 
            as="h2"
            className="text-3xl font-bold text-gray-800 dark:text-white mb-4"
          >
            Why Join the Investment Banking Club?
          </AnimatedHeading>
          <AnimatedList
            items={bulletPoints}
            className="space-y-4"
            direction="left"
          />
        </div>
        <motion.div 
          className="relative h-64 md:h-80 w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1, y: -10 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2966] to-[#0a2966]/80 rounded-lg opacity-20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white text-center">
              Preparing Future <br /> Investment Bankers
            </h3>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function BulletPoint({ index, children }: BulletPointProps) {
  // Calculate staggered animation delay based on index
  const delay = 0.2 * index;
  
  return (
    <AnimatedText
      as="li"
      className="flex items-start"
      index={index}
      direction="left"
    >
      <svg className="w-6 h-6 text-[#0a2966] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <span className="text-gray-600 dark:text-gray-300">{children}</span>
    </AnimatedText>
  );
} 
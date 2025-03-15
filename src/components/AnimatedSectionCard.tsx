"use client";

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { AnimatedCard, AnimatedText } from './animations';

interface AnimatedSectionCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  index: number;
}

export default function AnimatedSectionCard({ 
  title, 
  description, 
  icon, 
  link, 
  index 
}: AnimatedSectionCardProps) {
  return (
    <Link href={link} className="group">
      <AnimatedCard 
        index={index}
        className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md p-6 h-full transition-transform group-hover:scale-105"
        whileHover={{ y: -5 }}
      >
        <div className="flex items-center mb-4">
          <motion.div 
            className="bg-[#0a2966]/10 dark:bg-[#0a2966]/20 p-3 rounded-lg mr-4"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.2 + 0.2, 
              ease: [0.25, 0.1, 0.25, 1] 
            }}
          >
            {icon}
          </motion.div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
        </div>
        <AnimatedText 
          as="p" 
          className="text-gray-600 dark:text-gray-300 mb-4"
          direction="up"
          index={0.5}
        >
          {description}
        </AnimatedText>
        <motion.div 
          className="text-[#0a2966] dark:text-white font-medium group-hover:underline"
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        >
          Learn more →
        </motion.div>
      </AnimatedCard>
    </Link>
  );
} 
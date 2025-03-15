"use client";

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedProfileProps {
  children: ReactNode;
  index?: number;
  className?: string;
}

/**
 * AnimatedProfile - A reusable component for team/board member profiles
 * 
 * @param children - The content of the profile card
 * @param index - Optional index for staggered animations
 * @param className - Additional CSS classes
 */
export default function AnimatedProfile({ 
  children, 
  index = 0, 
  className = "" 
}: AnimatedProfileProps) {
  // Calculate staggered animation delay based on index
  const delay = index * 0.2;
  
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
    >
      {children}
    </motion.div>
  );
} 
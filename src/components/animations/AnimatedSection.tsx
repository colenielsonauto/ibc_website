"use client";

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: boolean;
  staggerDelay?: number;
}

/**
 * AnimatedSection - A reusable component for animated sections
 * 
 * @param children - The content of the section
 * @param className - Additional CSS classes
 * @param delay - Optional delay for the animation
 * @param staggerChildren - Whether to stagger the animations of children
 * @param staggerDelay - The delay between each child animation
 */
export default function AnimatedSection({ 
  children, 
  className = "", 
  delay = 0,
  staggerChildren = false,
  staggerDelay = 0.1
}: AnimatedSectionProps) {
  // Define variants for parent container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerChildren ? staggerDelay : 0
      }
    }
  };
  
  // Define variants for children
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
    }
  };
  
  if (staggerChildren) {
    return (
      <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return (
              <motion.div key={index} variants={childVariants}>
                {child}
              </motion.div>
            );
          }
          return child;
        })}
      </motion.div>
    );
  }
  
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.25, 0.1, 0.25, 1] 
      }}
    >
      {children}
    </motion.div>
  );
} 
"use client";

import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface AnimatedCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  index?: number;
  className?: string;
  hoverEffect?: boolean;
}

/**
 * AnimatedCard - A reusable component for animated cards
 * 
 * @param children - The content of the card
 * @param index - Optional index for staggered animations
 * @param className - Additional CSS classes
 * @param hoverEffect - Whether to apply a hover effect
 * @param props - Any additional props for the motion component
 */
export default function AnimatedCard({ 
  children, 
  index = 0, 
  className = "", 
  hoverEffect = true,
  ...props 
}: AnimatedCardProps) {
  // Calculate staggered animation delay based on index
  const delay = index * 0.2;
  
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      whileHover={hoverEffect ? { y: -5 } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
} 
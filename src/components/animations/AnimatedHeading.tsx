"use client";

import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface AnimatedHeadingProps extends HTMLMotionProps<"h1" | "h2" | "h3" | "h4" | "h5" | "h6"> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * AnimatedHeading - A reusable component for animated headings
 * 
 * @param as - The heading element type (h1, h2, etc.)
 * @param children - The content of the heading
 * @param delay - Optional delay for the animation
 * @param className - Additional CSS classes
 * @param props - Any additional props for the motion component
 */
export default function AnimatedHeading({ 
  as = "h2", 
  children, 
  delay = 0, 
  className = "", 
  ...props 
}: AnimatedHeadingProps) {
  const Component = motion[as];
  
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.7, 
        delay, 
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      {...props}
    >
      {children}
    </Component>
  );
} 
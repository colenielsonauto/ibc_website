"use client";

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type ElementType = "p" | "li" | "div" | "span";

interface AnimatedTextProps {
  as?: ElementType;
  children: ReactNode;
  index?: number;
  className?: string;
  direction?: "left" | "right" | "up" | "down";
  [key: string]: any; // For additional props
}

/**
 * AnimatedText - A reusable component for animated text elements
 * 
 * @param as - The element type (p, li, div, span)
 * @param children - The content of the text element
 * @param index - Optional index for staggered animations
 * @param className - Additional CSS classes
 * @param direction - The direction of the animation
 * @param props - Any additional props for the motion component
 */
export default function AnimatedText({ 
  as = "p", 
  children, 
  index = 0, 
  className = "", 
  direction = "left",
  ...props 
}: AnimatedTextProps) {
  // Calculate staggered animation delay based on index
  const delay = index * 0.15;
  
  // Set initial and animate values based on direction
  const getInitialProps = () => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -50 };
      case "right":
        return { opacity: 0, x: 50 };
      case "up":
        return { opacity: 0, y: 50 };
      case "down":
        return { opacity: 0, y: -50 };
      default:
        return { opacity: 0, x: -50 };
    }
  };
  
  const getAnimateProps = () => {
    switch (direction) {
      case "left":
      case "right":
        return { opacity: 1, x: 0 };
      case "up":
      case "down":
        return { opacity: 1, y: 0 };
      default:
        return { opacity: 1, x: 0 };
    }
  };
  
  const animationProps = {
    initial: getInitialProps(),
    whileInView: getAnimateProps(),
    viewport: { once: true, amount: 0.3 },
    transition: { 
      duration: 0.6, 
      delay, 
      ease: [0.25, 0.1, 0.25, 1] 
    },
    className,
    ...props
  };
  
  // Render the appropriate motion component based on the 'as' prop
  switch (as) {
    case "p":
      return <motion.p {...animationProps}>{children}</motion.p>;
    case "li":
      return <motion.li {...animationProps}>{children}</motion.li>;
    case "div":
      return <motion.div {...animationProps}>{children}</motion.div>;
    case "span":
      return <motion.span {...animationProps}>{children}</motion.span>;
    default:
      return <motion.p {...animationProps}>{children}</motion.p>;
  }
} 
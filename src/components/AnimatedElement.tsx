"use client";

import { ReactNode } from 'react';
import { motion, Variant } from 'framer-motion';

interface AnimatedElementProps {
  children: ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'scale' | 'parallax';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number; // Viewport threshold for triggering animation
  once?: boolean; // Whether to trigger animation only once
}

const animations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  },
  parallax: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }
};

export default function AnimatedElement({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 0.5,
  className = '',
  threshold = 0.1, // 10% of element needs to be in view
  once = true
}: AnimatedElementProps) {
  const selectedAnimation = animations[animation];
  
  const transition = {
    duration,
    delay,
    ease: [0.25, 0.1, 0.25, 1] // Smooth easing function
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={selectedAnimation}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

// For parallax effect on images
export function ParallaxImage({
  src,
  alt,
  className = '',
  speed = 0.5,
  threshold = 0.1
}: {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  threshold?: number;
}) {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: threshold }}
      transition={{ duration: 0.6 }}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        initial={{ y: 20, scale: 1.05 }}
        whileInView={{ y: 0, scale: 1 }}
        viewport={{ once: true, amount: threshold }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ transformStyle: "preserve-3d" }}
      />
    </motion.div>
  );
} 
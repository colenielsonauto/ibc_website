"use client";

import { motion } from 'framer-motion';
import Image, { ImageProps } from 'next/image';

interface AnimatedImageProps extends Omit<ImageProps, 'ref'> {
  className?: string;
  containerClassName?: string;
  delay?: number;
  parallaxEffect?: boolean;
}

/**
 * AnimatedImage - A reusable component for animated images
 * 
 * @param src - The source of the image
 * @param alt - The alt text for the image
 * @param className - Additional CSS classes for the image
 * @param containerClassName - Additional CSS classes for the container
 * @param delay - Optional delay for the animation
 * @param parallaxEffect - Whether to apply a parallax effect
 * @param props - Any additional props for the Image component
 */
export default function AnimatedImage({ 
  src, 
  alt, 
  className = "", 
  containerClassName = "",
  delay = 0,
  parallaxEffect = false,
  ...props 
}: AnimatedImageProps) {
  if (parallaxEffect) {
    return (
      <motion.div
        className={`overflow-hidden ${containerClassName}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.div
          initial={{ y: 30, scale: 1.05 }}
          whileInView={{ y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: delay + 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Image
            src={src}
            alt={alt}
            className={`w-full h-full object-cover ${className}`}
            {...props}
          />
        </motion.div>
      </motion.div>
    );
  }
  
  return (
    <motion.div
      className={containerClassName}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Image
        src={src}
        alt={alt}
        className={className}
        {...props}
      />
    </motion.div>
  );
} 
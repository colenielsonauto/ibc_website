"use client";

import React, { ReactNode, useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { AnimatedHeading } from './animations';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface ValueCardProps {
  title: string;
  children: ReactNode;
  index: number;
  isMobile?: boolean;
  inView?: boolean;
}

export default function ValuesAnimation({ children }: { children?: ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  // Check if we're on mobile on client side
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Default values if children are not provided
  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, from our training program to our networking events and competitions."
    },
    {
      title: "Integrity",
      description: "We uphold the highest standards of integrity and ethics in all our interactions and activities."
    },
    {
      title: "Community",
      description: "We foster a supportive community where members can learn, grow, and succeed together."
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 my-10">
      <AnimatedHeading 
        as="h3"
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center"
      >
        Our Values
      </AnimatedHeading>
      <div 
        ref={sectionRef}
        className="relative mt-6 overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {children ? 
            // If children are provided, use them
            React.Children.map(children, (child, index) => {
              if (React.isValidElement(child)) {
                return React.cloneElement(child as React.ReactElement<ValueCardProps>, {
                  isMobile,
                  inView: isInView,
                  index
                });
              }
              return child;
            })
            : 
            // Otherwise use the default values
            values.map((value, index) => (
              <ValueCard 
                key={value.title} 
                title={value.title} 
                index={index}
                isMobile={isMobile}
                inView={isInView}
              >
                {value.description}
              </ValueCard>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export function ValueCard({ title, children, index, isMobile = false, inView = true }: ValueCardProps) {
  // Calculate the stacking offset based on index
  const stackOffset = 40 - (index * 15); // Decreasing offset for each card
  
  // Define card variants for animation - stacked cards sliding out from left
  const cardVariants: Variants = {
    hidden: {
      opacity: 0.85,
      x: -180 + (index * 40), // Start from left side with staggered positions
      scale: 0.97 - (index * 0.04), // Slightly smaller scale for cards further back
      rotate: -6 + (index * 2), // Slight rotation for stacked effect
      transformOrigin: "left center",
      zIndex: 10 - index, // Higher index cards are behind
      position: "relative",
      left: `${stackOffset}px`, // Staggered starting position
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
    },
    visible: {
      opacity: 1,
      x: 0, // Final position
      scale: 1,
      rotate: 0, // No rotation in final state
      zIndex: 1,
      left: 0,
      position: "relative",
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)", // Enhanced shadow for better separation
      transition: {
        duration: 0.9,
        delay: index * 0.25, // Staggered delay for sequential animation
        ease: [0.25, 0.1, 0.25, 1], // easeInOut cubic bezier
        type: "spring", // Spring physics for more natural movement
        stiffness: 70,
        damping: 12
      }
    }
  };
  
  // For mobile, we'll use a different animation that stacks the cards vertically
  const mobileCardVariants: Variants = {
    hidden: {
      opacity: 0.85,
      y: 10,
      x: -50 + (index * 15), // Start slightly to the left with staggered positions
      scale: 0.95,
      rotate: -3 + (index * 1), // Slight rotation for stacked effect
      zIndex: 10 - index,
      position: "relative",
      top: `${index * -20}px` // Stacked vertically
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotate: 0,
      zIndex: 1,
      position: "relative",
      top: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.25,
        ease: [0.25, 0.1, 0.25, 1],
        type: "spring",
        stiffness: 70,
        damping: 12
      }
    }
  };
  
  return (
    <motion.div
      className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm"
      custom={index}
      variants={isMobile ? mobileCardVariants : cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">{title}</h4>
      <p className="text-gray-600 dark:text-gray-400">
        {children}
      </p>
    </motion.div>
  );
} 
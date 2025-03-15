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
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
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
        className="relative mt-6"
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
  // Define card variants for animation
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
      zIndex: 3 - (index || 0),
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      zIndex: 3 - (index || 0),
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)", // Enhanced shadow for better separation
      transition: {
        duration: 0.8,
        delay: (index || 0) * 0.2,
        ease: [0.25, 0.1, 0.25, 1] // easeInOut cubic bezier
      }
    }
  };
  
  // For mobile, we'll use a different animation that stacks the cards vertically
  const mobileCardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: (index || 0) * 0.2,
        ease: [0.25, 0.1, 0.25, 1]
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
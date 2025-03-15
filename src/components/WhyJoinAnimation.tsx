"use client";

import { ReactNode, useRef } from 'react';
import { motion } from 'framer-motion';
import { AnimatedHeading, AnimatedText } from './animations';
import Link from 'next/link';
import VantaFogBackground from './VantaFogBackground';
import { usePathname } from 'next/navigation';

interface BulletPointProps {
  index: number;
  children: ReactNode;
}

export default function WhyJoinAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  
  const bulletPoints = [
    "Comprehensive training in financial modeling and valuation",
    "Networking opportunities with industry professionals",
    "Resume and interview preparation for finance roles",
    "Hands-on experience through competitions and case studies",
    "Community of like-minded students interested in finance"
  ];

  return (
    <div className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <AnimatedHeading 
            as="h2"
            className="text-3xl font-bold text-gray-800 dark:text-white mb-4"
          >
            Why Join the Investment Banking Club?
          </AnimatedHeading>
          <ul className="space-y-4 list-none">
            {bulletPoints.map((point, index) => (
              <BulletPoint key={index} index={index}>
                {point}
              </BulletPoint>
            ))}
          </ul>
        </div>
        <motion.div 
          ref={containerRef}
          className="relative h-64 md:h-80 w-full flex flex-col items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1, y: -10 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="w-full h-full border border-black/50 rounded-xl overflow-hidden">
            <VantaFogBackground key={`vanta-wrapper-${pathname}`}>
              {/* Semi-transparent overlay to ensure text readability */}
              <div className="absolute inset-0 bg-black bg-opacity-25 z-10"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-20">
                <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 drop-shadow-lg">
                  Join the Investment Banking Club Today.
                </h3>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4"
                >
                  <Link
                    href="/contact"
                    className="inline-block py-3 md:py-4 text-lg font-medium text-center text-white bg-transparent rounded-md px-8 md:px-10 hover:bg-black/20 transition-all duration-300 shadow-md hover:shadow-lg border border-black"
                  >
                    Click Here
                  </Link>
                </motion.div>
              </div>
            </VantaFogBackground>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function BulletPoint({ index, children }: BulletPointProps) {
  return (
    <AnimatedText
      as="li"
      className="flex items-start"
      index={index}
      direction="left"
    >
      <svg className="w-6 h-6 text-[#0a2966] mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <span className="text-gray-600 dark:text-gray-300">{children}</span>
    </AnimatedText>
  );
} 
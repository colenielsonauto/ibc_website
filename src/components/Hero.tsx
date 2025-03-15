"use client";

import Image from "next/image";
import { Container } from "@/components/Container";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <motion.h1 
              className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Investment Banking Club
              <motion.span 
                className="text-[#0a2966] dark:text-white block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                Boise State University
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Preparing the next generation of finance professionals through education, networking, and real-world experience.
            </motion.p>

            <motion.div 
              className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link
                href="/about"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-[#0a2966] rounded-md hover:bg-[#0a2966]/80 transition-colors">
                Learn More
              </Link>
              <Link
                href="/contact"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-[#0a2966] dark:hover:text-white transition-colors">
                <span>Contact Us</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"></path>
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <SpinningLogo />
          </motion.div>
        </div>
      </Container>
    </>
  );
};

// Spinning Logo Component
const SpinningLogo = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const logoElement = logoRef.current;
    if (!logoElement) return;

    let animationFrameId: number;
    let rotation = 0;
    
    const animate = () => {
      rotation += 0.5;
      if (logoElement) {
        logoElement.style.transform = `rotateY(${rotation}deg)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="flex items-center justify-center" style={{ perspective: '1000px' }}>
      <div 
        ref={logoRef} 
        className="relative transition-transform duration-300 w-[400px] h-[400px]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <Image
          src={`/ibc_logos/${isDark ? 'WhiteTransparent.png' : 'ibcbulllogo-removebg.png'}`}
          alt="Investment Banking Club Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};


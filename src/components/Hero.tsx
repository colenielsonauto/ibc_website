"use client";

import Image from "next/image";
import { Container } from "@/components/Container";
import Link from "next/link";
import { useEffect, useRef } from "react";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Investment Banking Club
              <span className="text-[#0a2966] dark:text-white"> Boise State University</span>
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Preparing the next generation of finance professionals through education, networking, and real-world experience.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
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
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <SpinningLogo />
        </div>
      </Container>
    </>
  );
};

// Spinning Logo Component
const SpinningLogo = () => {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const logoElement = logoRef.current;
    if (!logoElement) return;

    let animationFrameId: number;
    let rotation = 0;
    
    const animate = () => {
      rotation += 0.5; // 25% faster rotation speed (increased from 0.3)
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
          src="/ibc_logos/ibcbulllogo-removebg.png"
          alt="Investment Banking Club Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};


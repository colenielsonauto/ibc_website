"use client";

import { useState, useEffect } from 'react';

export default function AnimationDebug() {
  const [viewportHeight, setViewportHeight] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    // Set initial values
    setViewportHeight(window.innerHeight);
    setScrollY(window.scrollY);
    
    // Update on scroll
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    // Update on resize
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };
    
    // Toggle visibility
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'd' && e.ctrlKey) {
        setIsVisible(prev => !prev);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
  if (!isVisible) return null;
  
  // Calculate threshold lines (10%, 20%, etc.)
  const thresholdLines = [0.1, 0.2, 0.3, 0.5].map(threshold => {
    const position = scrollY + viewportHeight * threshold;
    return { threshold, position };
  });
  
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Viewport boundaries */}
      <div className="absolute top-0 left-0 w-full h-1 bg-red-500 opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-red-500 opacity-50" />
      
      {/* Threshold lines */}
      {thresholdLines.map(({ threshold, position }) => (
        <div 
          key={threshold}
          className="absolute left-0 w-full h-0.5 bg-blue-500 opacity-50"
          style={{ top: `${position}px` }}
        >
          <span className="absolute right-0 px-2 py-1 text-xs text-white bg-blue-500 rounded-md">
            {threshold * 100}% threshold
          </span>
        </div>
      ))}
      
      {/* Debug info */}
      <div className="absolute top-2 right-2 p-2 bg-black bg-opacity-70 text-white text-xs rounded">
        <p>Viewport Height: {viewportHeight}px</p>
        <p>Scroll Y: {scrollY}px</p>
        <p>Press Ctrl+D to toggle</p>
      </div>
    </div>
  );
} 
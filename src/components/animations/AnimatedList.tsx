"use client";

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

interface AnimatedListProps {
  items: ReactNode[];
  className?: string;
  itemClassName?: string;
  as?: "ul" | "ol";
  direction?: "left" | "right" | "up" | "down";
  staggerDelay?: number;
}

/**
 * AnimatedList - A reusable component for animated lists
 * 
 * @param items - Array of list items
 * @param className - Additional CSS classes for the list
 * @param itemClassName - Additional CSS classes for each list item
 * @param as - The list element type (ul or ol)
 * @param direction - The direction of the animation
 * @param staggerDelay - The delay between each item animation
 */
export default function AnimatedList({ 
  items, 
  className = "", 
  itemClassName = "",
  as = "ul",
  direction = "left",
  staggerDelay = 0.15
}: AnimatedListProps) {
  const ListComponent = as === "ul" ? motion.ul : motion.ol;
  
  return (
    <ListComponent className={className}>
      {items.map((item, index) => (
        <AnimatedText
          key={index}
          as="li"
          index={index}
          direction={direction}
          className={itemClassName}
        >
          {item}
        </AnimatedText>
      ))}
    </ListComponent>
  );
} 
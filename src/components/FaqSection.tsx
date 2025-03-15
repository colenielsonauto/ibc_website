"use client";

import { useState } from 'react';
import { AnimatedHeading, AnimatedText, AnimatedSection } from './animations';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
  index: number;
}

export default function FaqSection({ faqs }: { faqs: FaqItemProps[] }) {
  return (
    <div className="py-12">
      <AnimatedHeading 
        as="h2"
        className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white"
      >
        Frequently Asked Questions
      </AnimatedHeading>
      
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <FaqItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

function FaqItem({ question, answer, index }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2, 
        ease: [0.25, 0.1, 0.25, 1] 
      }}
    >
      <button
        className="flex justify-between items-center w-full p-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AnimatedText
          as="span"
          className="text-lg font-medium text-gray-800 dark:text-white"
          direction="left"
          index={0.1}
        >
          {question}
        </AnimatedText>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-[#0a2966]" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-gray-600 dark:text-gray-300 border-t border-gray-100 dark:border-gray-700">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
} 
"use client";

import { ReactNode } from 'react';
import { AnimatedHeading, AnimatedCard, AnimatedText, AnimatedSection } from './animations';
import Link from 'next/link';

interface ProgramProps {
  title: string;
  description: string;
  features: string[];
  link: string;
  index: number;
}

export default function ProgramsSection({ programs }: { programs: ProgramProps[] }) {
  return (
    <div className="py-12">
      <AnimatedHeading 
        as="h2"
        className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white"
      >
        Our Programs
      </AnimatedHeading>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <ProgramCard
            key={index}
            title={program.title}
            description={program.description}
            features={program.features}
            link={program.link}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

function ProgramCard({ title, description, features, link, index }: ProgramProps) {
  return (
    <AnimatedCard
      index={index}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md p-6 h-full flex flex-col"
    >
      <AnimatedText
        as="div"
        className="text-xl font-bold text-gray-800 dark:text-white mb-4"
        direction="up"
        index={0.1}
      >
        {title}
      </AnimatedText>
      
      <AnimatedText
        as="p"
        className="text-gray-600 dark:text-gray-300 mb-4"
        direction="up"
        index={0.2}
      >
        {description}
      </AnimatedText>
      
      <div className="space-y-2 mb-6 flex-grow">
        <AnimatedText
          as="div"
          className="text-sm font-bold text-gray-700 dark:text-gray-200 mb-2"
          direction="up"
          index={0.3}
        >
          Key Features:
        </AnimatedText>
        
        <ul className="space-y-1 pl-5 list-disc">
          {features.map((feature, featureIndex) => (
            <AnimatedText
              key={featureIndex}
              as="li"
              className="text-gray-600 dark:text-gray-300"
              direction="left"
              index={0.3 + (featureIndex * 0.1)}
            >
              {feature}
            </AnimatedText>
          ))}
        </ul>
      </div>
      
      <Link href={link} className="mt-auto">
        <AnimatedText
          as="div"
          className="bg-[#0a2966] text-white py-2 px-4 rounded text-center hover:bg-[#0a2966]/90 transition-colors"
          direction="up"
          index={0.5}
        >
          Learn More
        </AnimatedText>
      </Link>
    </AnimatedCard>
  );
} 
"use client";

import { AnimatedHeading, AnimatedText, AnimatedImage, AnimatedSection } from './animations';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <div className="py-12">
      <AnimatedHeading 
        as="h2"
        className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white"
      >
        About the Investment Banking Club
      </AnimatedHeading>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
        <div>
          <AnimatedText
            as="p"
            className="text-lg text-gray-600 dark:text-gray-300 mb-6"
            direction="left"
            index={0.1}
          >
            The Investment Banking Club at Boise State University was founded in 2015 with a mission to prepare students for careers in investment banking and finance through education, networking, and real-world experience.
          </AnimatedText>
          
          <AnimatedText
            as="p"
            className="text-lg text-gray-600 dark:text-gray-300"
            direction="left"
            index={0.2}
          >
            Our club provides members with opportunities to develop the skills and knowledge needed to succeed in the competitive world of finance. Through workshops, speaker events, and our flagship Analyst Training Program, we help students build the foundation for successful careers in investment banking.
          </AnimatedText>
        </div>
        
        <AnimatedImage
          src="/path-to-your-image.jpg"
          alt="Investment Banking Club members"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
          containerClassName="w-full h-full"
          delay={0.3}
          parallaxEffect={true}
        />
      </div>
      
      <AnimatedSection className="max-w-4xl mx-auto text-center mb-16">
        <AnimatedHeading 
          as="h3"
          className="text-2xl font-bold mb-6 text-gray-800 dark:text-white"
          delay={0.1}
        >
          Our Mission
        </AnimatedHeading>
        
        <AnimatedText
          as="p"
          className="text-lg text-gray-600 dark:text-gray-300"
          direction="up"
          index={0.2}
        >
          To empower students with the knowledge, skills, and connections needed to succeed in investment banking and finance through education, mentorship, and real-world experience.
        </AnimatedText>
      </AnimatedSection>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <AnimatedCard index={0} title="Education" icon="🎓">
          We provide comprehensive training in financial modeling, valuation, and other essential skills for investment banking careers.
        </AnimatedCard>
        
        <AnimatedCard index={1} title="Networking" icon="🤝">
          We connect students with industry professionals through speaker events, networking sessions, and alumni relationships.
        </AnimatedCard>
        
        <AnimatedCard index={2} title="Experience" icon="💼">
          We offer hands-on experience through case competitions, projects, and our Analyst Training Program.
        </AnimatedCard>
      </div>
    </div>
  );
}

function AnimatedCard({ title, icon, children, index }: { title: string, icon: string, children: React.ReactNode, index: number }) {
  return (
    <AnimatedSection
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center"
      delay={index * 0.2}
    >
      <div className="text-4xl mb-4">{icon}</div>
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
        className="text-gray-600 dark:text-gray-300"
        direction="up"
        index={0.2}
      >
        {children}
      </AnimatedText>
    </AnimatedSection>
  );
} 
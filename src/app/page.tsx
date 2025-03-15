import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import Link from "next/link";
import Image from "next/image";
import { Info, GraduationCap, Users, CalendarDays, Trophy, Send } from "lucide-react";
import dynamic from 'next/dynamic';
import WhyJoinAnimation from "@/components/WhyJoinAnimation";
import AnimatedSectionCard from "@/components/AnimatedSectionCard";

// Import the debug component with no SSR
const AnimationDebug = dynamic(() => import('@/components/AnimationDebug'), { ssr: false });

export default function Home() {
  const sections = [
    {
      title: "About Us",
      description: "Learn about our mission, vision, and values.",
      icon: <Info className="w-6 h-6 text-[#0a2966] dark:text-white" />,
      link: "/about"
    },
    {
      title: "Analyst Training Program",
      description: "Our flagship program preparing students for careers in investment banking.",
      icon: <GraduationCap className="w-6 h-6 text-[#0a2966] dark:text-white" />,
      link: "/training"
    },
    {
      title: "Board Members",
      description: "Meet our dedicated team of student leaders.",
      icon: <Users className="w-6 h-6 text-[#0a2966] dark:text-white" />,
      link: "/board"
    },
    {
      title: "Events",
      description: "Join us for networking, workshops, and speaker panels.",
      icon: <CalendarDays className="w-6 h-6 text-[#0a2966] dark:text-white" />,
      link: "/events"
    },
    {
      title: "Competitions",
      description: "Test your skills in real-world financial scenarios.",
      icon: <Trophy className="w-6 h-6 text-[#0a2966] dark:text-white" />,
      link: "/competitions"
    },
    {
      title: "Contact Us",
      description: "Get in touch with questions or to join our club.",
      icon: <Send className="w-6 h-6 text-[#0a2966] dark:text-white" />,
      link: "/contact"
    }
  ];

  return (
    <Container>
      {/* Animation Debug Tool - Press Ctrl+D to toggle */}
      <AnimationDebug />
      
      <Hero />
      
      <SectionTitle
        preTitle="Explore"
        title="Discover the Investment Banking Club"
      >
        The Investment Banking Club at Boise State University is dedicated to preparing students for careers in investment banking and finance through education, networking, and real-world experience.
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
        {sections.map((section, index) => (
          <AnimatedSectionCard
            key={index}
            title={section.title}
            description={section.description}
            icon={section.icon}
            link={section.link}
            index={index}
          />
        ))}
      </div>

      {/* Why Join Section with Interactive Slide & Reveal */}
      <div className="pb-16">
        <WhyJoinAnimation />
      </div>
    </Container>
  );
}

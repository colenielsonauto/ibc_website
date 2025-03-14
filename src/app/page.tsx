import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Cta } from "@/components/Cta";
import Link from "next/link";
import Image from "next/image";
import { Info, GraduationCap, Users, CalendarDays, Trophy, Send } from "lucide-react";

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
      <Hero />
      
      <SectionTitle
        preTitle="Explore"
        title="Discover the Investment Banking Club"
      >
        The Investment Banking Club at Boise State University is dedicated to preparing students for careers in investment banking and finance through education, networking, and real-world experience.
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
        {sections.map((section, index) => (
          <Link key={index} href={section.link} className="group">
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md p-6 h-full transition-transform group-hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="bg-[#0a2966]/10 dark:bg-[#0a2966]/20 p-3 rounded-lg mr-4">
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{section.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{section.description}</p>
              <div className="text-[#0a2966] dark:text-white font-medium group-hover:underline">
                Learn more →
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-[#0a2966]/5 dark:bg-gray-800 rounded-xl p-8 my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Why Join the Investment Banking Club?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#0a2966] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Comprehensive training in financial modeling and valuation</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#0a2966] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Networking opportunities with industry professionals</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#0a2966] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Resume and interview preparation for finance roles</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#0a2966] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Hands-on experience through competitions and case studies</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#0a2966] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Community of like-minded students interested in finance</span>
              </li>
            </ul>
          </div>
          <div className="relative h-64 md:h-80 w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a2966] to-[#0a2966]/80 rounded-lg opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white text-center">
                Preparing Future <br /> Investment Bankers
              </h3>
            </div>
          </div>
        </div>
      </div>

      <Cta />

      {/* Analyst Training Program Widget */}
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-[#0a2966]/90 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl mt-4">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Analyst Training Program
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Our flagship program preparing students for careers in investment banking through hands-on training and mentorship.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <Link
            href="/training"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-[#0a2966] bg-white rounded-md px-7 lg:px-10 lg:py-5 hover:bg-gray-100 transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </Container>
  );
}

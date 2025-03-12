import Image from "next/image";
import { Container } from "@/components/Container";
import Link from "next/link";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Investment Banking Club
              <span className="text-indigo-600 dark:text-indigo-400"> Boise State University</span>
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Preparing the next generation of finance professionals through education, networking, and real-world experience.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href="/about"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors">
                Learn More
              </Link>
              <Link
                href="/contact"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
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
          <div className="relative w-full h-[400px] bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-2xl overflow-hidden backdrop-blur-sm border border-indigo-100 dark:border-indigo-900">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Analyst Training Program</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
                  Our flagship program preparing students for careers in investment banking through hands-on training and mentorship.
                </p>
                <Link
                  href="/training"
                  className="px-6 py-3 text-lg font-medium text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors">
                  Explore Program
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};


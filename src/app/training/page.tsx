import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import Image from "next/image";

export default function TrainingPage() {
  return (
    <Container>
      <SectionTitle
        preTitle="Analyst Training Program"
        title="Prepare for a Career in Investment Banking"
      >
        Our flagship Analyst Training Program is designed to equip students with the knowledge, skills, and experience needed to succeed in investment banking interviews and careers.
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 items-center">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Program Overview</h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            The Analyst Training Program is a comprehensive, semester-long curriculum that covers all aspects of investment banking, from financial modeling and valuation to pitch books and interview preparation.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Participants meet weekly for hands-on workshops led by experienced upperclassmen and industry professionals, gaining practical skills that are directly applicable to internships and full-time roles.
          </p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
          <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Program Highlights</h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-indigo-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-600 dark:text-gray-300">Financial modeling in Excel</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-indigo-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-600 dark:text-gray-300">Valuation methodologies (DCF, Comps, Precedent Transactions)</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-indigo-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-600 dark:text-gray-300">M&A analysis and LBO modeling</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-indigo-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-600 dark:text-gray-300">Pitch book creation and presentation skills</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-indigo-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-600 dark:text-gray-300">Technical and behavioral interview preparation</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-indigo-50 dark:bg-gray-800 rounded-xl p-8 my-10">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">Program Structure</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
            <div className="text-indigo-500 text-4xl font-bold mb-3">01</div>
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Fundamentals</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Learn the basics of financial statements, Excel modeling, and the investment banking industry.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
            <div className="text-indigo-500 text-4xl font-bold mb-3">02</div>
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Advanced Modeling</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Master complex valuation techniques, M&A analysis, and leveraged buyout modeling.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
            <div className="text-indigo-500 text-4xl font-bold mb-3">03</div>
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Career Preparation</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Develop your resume, practice interviews, and learn networking strategies for landing internships and jobs.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center py-10">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Join Our Next Cohort</h3>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
          Applications for our Analyst Training Program open at the beginning of each semester. Space is limited, and admission is competitive.
        </p>
        <a
          href="/contact"
          className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors">
          Apply Now
        </a>
      </div>
    </Container>
  );
} 
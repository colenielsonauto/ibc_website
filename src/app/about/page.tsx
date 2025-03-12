import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export default function AboutPage() {
  return (
    <Container>
      <SectionTitle
        preTitle="About Us"
        title="Investment Banking Club at Boise State University"
      >
        The Investment Banking Club at Boise State University is dedicated to preparing students for careers in investment banking and finance through education, networking, and real-world experience.
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Our Mission</h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Our mission is to bridge the gap between academic learning and industry practice by providing students with the knowledge, skills, and network necessary to succeed in the competitive field of investment banking.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            We aim to increase the representation of Boise State University in the investment banking industry by preparing our members for successful careers through our comprehensive training program, networking events, and competitions.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Our Vision</h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            We envision a future where Boise State University is recognized as a top school for investment banking recruitment, with our alumni working at prestigious financial institutions across the globe.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Through our commitment to excellence, we strive to create a community of finance professionals who support each other's growth and success throughout their careers.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 my-10">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">Our Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Excellence</h4>
            <p className="text-gray-600 dark:text-gray-400">
              We strive for excellence in everything we do, from our training program to our networking events and competitions.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Integrity</h4>
            <p className="text-gray-600 dark:text-gray-400">
              We uphold the highest standards of integrity and ethics in all our interactions and activities.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Community</h4>
            <p className="text-gray-600 dark:text-gray-400">
              We foster a supportive community where members can learn, grow, and succeed together.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
} 
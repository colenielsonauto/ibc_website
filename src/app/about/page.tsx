import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import ValuesAnimation, { ValueCard } from "@/components/ValuesAnimation";

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
            Through our commitment to excellence, we strive to create a community of finance professionals who support each other&apos;s growth and success throughout their careers.
          </p>
        </div>
      </div>

      {/* Our Values Section with Stacked Cards Animation */}
      <ValuesAnimation>
        <ValueCard title="Excellence" index={0}>
          We strive for excellence in everything we do, from our educational programs to our networking events. Our members are committed to developing the skills and knowledge needed to succeed in the competitive world of investment banking.
        </ValueCard>
        <ValueCard title="Integrity" index={1}>
          We believe in conducting ourselves with the highest level of integrity and ethics. Our members understand that trust is the foundation of the financial industry, and we emphasize ethical decision-making in all our activities.
        </ValueCard>
        <ValueCard title="Community" index={2}>
          We foster a supportive community where students can learn, grow, and connect. We believe that collaboration and mentorship are essential for personal and professional development in the finance industry.
        </ValueCard>
      </ValuesAnimation>
    </Container>
  );
} 
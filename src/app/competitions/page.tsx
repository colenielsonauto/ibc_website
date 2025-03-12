import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import Image from "next/image";

export default function CompetitionsPage() {
  const competitions = [
    {
      title: "Financial Modeling Competition",
      description: "Test your financial modeling skills in this annual competition. Participants will build a comprehensive DCF model for a public company and present their investment recommendation to a panel of judges from top investment banks.",
      date: "Fall Semester",
      prizes: "Cash prizes, interview opportunities, and recognition",
      image: "/img/competitions/placeholder.jpg"
    },
    {
      title: "M&A Case Competition",
      description: "Work in teams to analyze a potential merger or acquisition. Develop a comprehensive analysis including valuation, synergies, deal structure, and post-merger integration strategy. Present your findings to a panel of M&A professionals.",
      date: "Spring Semester",
      prizes: "Cash prizes, networking opportunities with M&A professionals",
      image: "/img/competitions/placeholder.jpg"
    },
    {
      title: "Pitch Competition",
      description: "Develop and present an investment pitch for a stock of your choice. Conduct thorough research, build a valuation model, and create a compelling investment thesis. Judges will evaluate your analysis, presentation skills, and ability to answer questions.",
      date: "Spring Semester",
      prizes: "Cash prizes, mentorship from investment professionals",
      image: "/img/competitions/placeholder.jpg"
    }
  ];

  const pastWinners = [
    {
      competition: "Financial Modeling Competition 2022",
      winners: [
        { name: "Jane Smith", place: "1st Place" },
        { name: "John Davis", place: "2nd Place" },
        { name: "Emily Johnson", place: "3rd Place" }
      ]
    },
    {
      competition: "M&A Case Competition 2022",
      winners: [
        { name: "Team Alpha (Michael Brown, Sarah Wilson, David Lee)", place: "1st Place" },
        { name: "Team Beta (Robert Johnson, Lisa Chen, Mark Taylor)", place: "2nd Place" },
        { name: "Team Gamma (James Wilson, Emma Davis, Alex Kim)", place: "3rd Place" }
      ]
    },
    {
      competition: "Pitch Competition 2022",
      winners: [
        { name: "David Lee", place: "1st Place" },
        { name: "Sarah Wilson", place: "2nd Place" },
        { name: "Michael Brown", place: "3rd Place" }
      ]
    }
  ];

  return (
    <Container>
      <SectionTitle
        preTitle="Competitions"
        title="Test Your Skills in Real-World Scenarios"
      >
        Our competitions provide valuable opportunities to apply your knowledge, develop your skills, and showcase your abilities to industry professionals.
      </SectionTitle>

      <div className="space-y-12 py-10">
        {competitions.map((competition, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row">
            <div className="md:w-1/3 relative h-64 md:h-auto">
              <Image
                src={competition.image}
                alt={competition.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">{competition.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{competition.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">When</h4>
                  <p className="text-gray-600 dark:text-gray-300">{competition.date}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Prizes</h4>
                  <p className="text-gray-600 dark:text-gray-300">{competition.prizes}</p>
                </div>
              </div>
              <a
                href="#"
                className="inline-block px-6 py-2 text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white transition-colors dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-indigo-500 dark:hover:text-white"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

      <SectionTitle
        preTitle="Past Winners"
        title="Competition Hall of Fame"
      >
        Congratulations to our past competition winners who demonstrated exceptional skills and dedication.
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
        {pastWinners.map((competition, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">{competition.competition}</h3>
              <ul className="space-y-3">
                {competition.winners.map((winner, winnerIndex) => (
                  <li key={winnerIndex} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-3">
                      <span className="text-indigo-600 dark:text-indigo-400 text-sm font-medium">
                        {winnerIndex + 1}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">{winner.name}</p>
                      <p className="text-sm text-indigo-600 dark:text-indigo-400">{winner.place}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-indigo-50 dark:bg-gray-800 rounded-xl p-8 my-10 text-center">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Ready to Compete?</h3>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6">
          Our competitions are open to all Boise State University students. No prior experience is required, but participation in our Analyst Training Program is recommended.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/training"
            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors"
          >
            Join Training Program
          </a>
          <a
            href="/contact"
            className="px-6 py-3 bg-white text-indigo-600 border border-indigo-600 font-medium rounded-md hover:bg-indigo-50 transition-colors dark:bg-gray-700 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-gray-600"
          >
            Contact Us
          </a>
        </div>
      </div>
    </Container>
  );
} 
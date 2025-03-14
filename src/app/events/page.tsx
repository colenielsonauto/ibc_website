import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import Image from "next/image";

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "Fireside Chat with Brian Jorgenson",
      date: "October 12, 2023",
      time: "6:00 PM - 7:00 PM",
      location: "Business Building, Room 102",
      description: "Join us for an exclusive fireside chat with Brian Jorgenson, a distinguished professional in investment banking. Learn about his career journey, insights into the industry, and gain valuable advice for your own career path in finance. This is a unique opportunity to hear firsthand experiences and ask questions in an intimate setting.",
      image: "/img/events/Fireside Chat with Brian Jorgenson.PNG"
    },
    {
      title: "Investment Banking Panel",
      date: "April 15, 2023",
      time: "5:00 PM - 7:00 PM",
      location: "Business Building, Room 102",
      description: "Join us for a panel discussion with investment banking professionals from Goldman Sachs, Morgan Stanley, and JP Morgan. Learn about their career paths, day-to-day responsibilities, and get advice on breaking into the industry.",
      image: "/img/events/placeholder.jpg"
    },
    {
      title: "Resume Workshop",
      date: "April 22, 2023",
      time: "4:00 PM - 6:00 PM",
      location: "Business Building, Room 204",
      description: "Bring your resume for a review session with finance professionals. Get personalized feedback on how to make your resume stand out to investment banking recruiters.",
      image: "/img/events/placeholder.jpg"
    },
    {
      title: "Mock Interviews",
      date: "May 1, 2023",
      time: "3:00 PM - 7:00 PM",
      location: "Business Building, Various Rooms",
      description: "Practice your technical and behavioral interview skills with finance professionals. Sign up for a 30-minute slot to receive feedback on your interview performance.",
      image: "/img/events/placeholder.jpg"
    }
  ];

  const pastEvents = [
    {
      title: "Financial Modeling Workshop",
      date: "March 10, 2023",
      description: "A hands-on workshop on building DCF models in Excel.",
      image: "/img/events/placeholder.jpg"
    },
    {
      title: "Networking Mixer",
      date: "February 25, 2023",
      description: "Networking event with alumni working in investment banking and finance.",
      image: "/img/events/placeholder.jpg"
    },
    {
      title: "Investment Banking 101",
      date: "February 10, 2023",
      description: "Introduction to investment banking careers, divisions, and recruitment timeline.",
      image: "/img/events/placeholder.jpg"
    }
  ];

  return (
    <Container>
      <SectionTitle
        preTitle="Events"
        title="Upcoming Events"
      >
        Join us for our upcoming events to learn more about investment banking, network with professionals, and develop your skills.
      </SectionTitle>

      <div className="space-y-10 py-10">
        {upcomingEvents.map((event, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row">
            <div className="md:w-1/3 relative h-64 md:h-auto">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 md:w-2/3">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{event.title}</h3>
                <div className="mt-2 md:mt-0 text-[#0a2966] dark:text-white font-medium">{event.date}</div>
              </div>
              <div className="mb-4">
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-1">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  {event.time}
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  {event.location}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{event.description}</p>
              <a
                href="#"
                className="inline-block px-6 py-2 text-[#0a2966] border border-[#0a2966] rounded-md hover:bg-[#0a2966] hover:text-white transition-colors dark:text-white dark:border-white dark:hover:bg-[#0a2966] dark:hover:text-white"
              >
                RSVP
              </a>
            </div>
          </div>
        ))}
      </div>

      <SectionTitle
        preTitle="Past Events"
        title="Event Archive"
      >
        Check out some of our past events. We host a variety of events throughout the academic year to help our members prepare for careers in investment banking.
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
        {pastEvents.map((event, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
            <div className="relative h-48 w-full">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{event.title}</h3>
              <p className="text-[#0a2966] dark:text-white font-medium mb-3">{event.date}</p>
              <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#0a2966]/5 dark:bg-gray-800 rounded-xl p-8 my-10 text-center">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Stay Updated</h3>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6">
          Subscribe to our newsletter to receive updates on upcoming events and opportunities.
        </p>
        <form className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0a2966] dark:bg-gray-700 dark:text-white"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#0a2966] text-white font-medium rounded-md hover:bg-[#0a2966]/80 transition-colors"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
} 
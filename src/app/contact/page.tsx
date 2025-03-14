import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Mail, MapPin, Phone, Instagram, Linkedin, Twitter } from "lucide-react";

export default function ContactPage() {
  return (
    <Container>
      <SectionTitle
        preTitle="Contact Us"
        title="Get in Touch with the Investment Banking Club"
      >
        Have questions about our club, events, or how to get involved? We&apos;d love to hear from you!
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Contact Information</h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#0a2966]/10 dark:bg-[#0a2966]/20 flex items-center justify-center mr-4">
                <Mail className="h-5 w-5 text-[#0a2966] dark:text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Email</h4>
                <a href="mailto:ibcbsu@boisestate.edu" className="text-[#0a2966] dark:text-white hover:underline">
                  ibcbsu@boisestate.edu
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#0a2966]/10 dark:bg-[#0a2966]/20 flex items-center justify-center mr-4">
                <MapPin className="h-5 w-5 text-[#0a2966] dark:text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Location</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  College of Business and Economics<br />
                  Boise State University<br />
                  1910 University Dr<br />
                  Boise, ID 83725
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#0a2966]/10 dark:bg-[#0a2966]/20 flex items-center justify-center mr-4">
                <Phone className="h-5 w-5 text-[#0a2966] dark:text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Phone</h4>
                <p className="text-gray-600 dark:text-gray-300">(208) 123-4567</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-10 mb-6">Follow Us</h3>
          
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/ibcatbsu"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-12 rounded-full bg-[#0a2966]/10 dark:bg-[#0a2966]/20 flex items-center justify-center text-[#0a2966] dark:text-white hover:bg-[#0a2966]/20 dark:hover:bg-[#0a2966]/30 transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/ibc-bsu/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-12 rounded-full bg-[#0a2966]/10 dark:bg-[#0a2966]/20 flex items-center justify-center text-[#0a2966] dark:text-white hover:bg-[#0a2966]/20 dark:hover:bg-[#0a2966]/30 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com/ibcbsu"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-12 rounded-full bg-[#0a2966]/10 dark:bg-[#0a2966]/20 flex items-center justify-center text-[#0a2966] dark:text-white hover:bg-[#0a2966]/20 dark:hover:bg-[#0a2966]/30 transition-colors"
            >
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Send Us a Message</h3>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0a2966] dark:bg-gray-700 dark:text-white"
                placeholder="Your name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0a2966] dark:bg-gray-700 dark:text-white"
                placeholder="Your email address"
                required
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0a2966] dark:bg-gray-700 dark:text-white"
                placeholder="Subject of your message"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0a2966] dark:bg-gray-700 dark:text-white"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#0a2966] text-white font-medium rounded-md hover:bg-[#0a2966]/80 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      
      <div className="bg-[#0a2966]/5 dark:bg-gray-800 rounded-xl p-8 my-10">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">Join Our Mailing List</h3>
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto mb-8">
          Stay updated with our latest events, competitions, and opportunities by subscribing to our newsletter.
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
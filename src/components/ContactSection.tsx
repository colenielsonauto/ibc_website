"use client";

import { AnimatedHeading, AnimatedText, AnimatedSection } from './animations';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <div className="py-12">
      <AnimatedHeading 
        as="h2"
        className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white"
      >
        Contact Us
      </AnimatedHeading>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div>
          <AnimatedText
            as="p"
            className="text-lg text-gray-600 dark:text-gray-300 mb-8"
            direction="up"
            index={0.1}
          >
            Have questions about the Investment Banking Club? We'd love to hear from you! Fill out the form or contact us directly using the information below.
          </AnimatedText>
          
          <div className="space-y-6">
            <AnimatedText
              as="div"
              className="flex items-start"
              direction="left"
              index={0.2}
            >
              <div className="bg-[#0a2966]/10 dark:bg-[#0a2966]/20 p-3 rounded-lg mr-4">
                <Mail className="w-6 h-6 text-[#0a2966] dark:text-white" />
              </div>
              <div>
                <div className="font-medium text-gray-800 dark:text-white">Email</div>
                <div className="text-gray-600 dark:text-gray-300">info@investmentbankingclub.org</div>
              </div>
            </AnimatedText>
            
            <AnimatedText
              as="div"
              className="flex items-start"
              direction="left"
              index={0.3}
            >
              <div className="bg-[#0a2966]/10 dark:bg-[#0a2966]/20 p-3 rounded-lg mr-4">
                <Phone className="w-6 h-6 text-[#0a2966] dark:text-white" />
              </div>
              <div>
                <div className="font-medium text-gray-800 dark:text-white">Phone</div>
                <div className="text-gray-600 dark:text-gray-300">(208) 555-1234</div>
              </div>
            </AnimatedText>
            
            <AnimatedText
              as="div"
              className="flex items-start"
              direction="left"
              index={0.4}
            >
              <div className="bg-[#0a2966]/10 dark:bg-[#0a2966]/20 p-3 rounded-lg mr-4">
                <MapPin className="w-6 h-6 text-[#0a2966] dark:text-white" />
              </div>
              <div>
                <div className="font-medium text-gray-800 dark:text-white">Location</div>
                <div className="text-gray-600 dark:text-gray-300">
                  Boise State University<br />
                  1910 University Dr<br />
                  Boise, ID 83725
                </div>
              </div>
            </AnimatedText>
          </div>
        </div>
        
        <motion.form
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-[#0a2966] focus:border-[#0a2966] dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-[#0a2966] focus:border-[#0a2966] dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-[#0a2966] focus:border-[#0a2966] dark:bg-gray-700 dark:text-white"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-[#0a2966] focus:border-[#0a2966] dark:bg-gray-700 dark:text-white"
            ></textarea>
          </div>
          
          <motion.button
            type="submit"
            className="w-full bg-[#0a2966] text-white py-3 px-4 rounded-md hover:bg-[#0a2966]/90 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
} 
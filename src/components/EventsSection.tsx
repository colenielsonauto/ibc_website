"use client";

import { ReactNode } from 'react';
import { AnimatedHeading, AnimatedCard, AnimatedText, AnimatedSection } from './animations';
import { CalendarDays, Clock, MapPin } from 'lucide-react';

interface EventProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  index: number;
}

export default function EventsSection({ events }: { events: EventProps[] }) {
  return (
    <div className="py-12">
      <AnimatedHeading 
        as="h2"
        className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white"
      >
        Upcoming Events
      </AnimatedHeading>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            date={event.date}
            time={event.time}
            location={event.location}
            description={event.description}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

function EventCard({ title, date, time, location, description, index }: EventProps) {
  return (
    <AnimatedCard
      index={index}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md p-6 h-full"
    >
      <AnimatedText
        as="div"
        className="text-xl font-bold text-gray-800 dark:text-white mb-4"
        direction="up"
        index={0.1}
      >
        {title}
      </AnimatedText>
      
      <div className="space-y-2 mb-4">
        <AnimatedText
          as="div"
          className="flex items-center text-gray-600 dark:text-gray-300"
          direction="left"
          index={0.2}
        >
          <CalendarDays className="w-5 h-5 mr-2 text-[#0a2966]" />
          {date}
        </AnimatedText>
        
        <AnimatedText
          as="div"
          className="flex items-center text-gray-600 dark:text-gray-300"
          direction="left"
          index={0.3}
        >
          <Clock className="w-5 h-5 mr-2 text-[#0a2966]" />
          {time}
        </AnimatedText>
        
        <AnimatedText
          as="div"
          className="flex items-center text-gray-600 dark:text-gray-300"
          direction="left"
          index={0.4}
        >
          <MapPin className="w-5 h-5 mr-2 text-[#0a2966]" />
          {location}
        </AnimatedText>
      </div>
      
      <AnimatedText
        as="p"
        className="text-gray-600 dark:text-gray-300"
        direction="up"
        index={0.5}
      >
        {description}
      </AnimatedText>
    </AnimatedCard>
  );
} 
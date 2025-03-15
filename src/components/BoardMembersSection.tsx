"use client";

import { ReactNode } from 'react';
import Image from 'next/image';
import { AnimatedHeading, AnimatedProfile, AnimatedText, AnimatedSection } from './animations';

interface BoardMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  index: number;
}

export default function BoardMembersSection({ members }: { members: BoardMemberProps[] }) {
  return (
    <div className="py-12">
      <AnimatedHeading 
        as="h2"
        className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white"
      >
        Meet Our Board
      </AnimatedHeading>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <BoardMemberCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
            bio={member.bio}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

function BoardMemberCard({ name, role, image, bio, index }: BoardMemberProps) {
  return (
    <AnimatedProfile
      index={index}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md h-full"
    >
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <AnimatedText
          as="div"
          className="text-xl font-bold text-gray-800 dark:text-white"
          direction="up"
          index={0.1}
        >
          {name}
        </AnimatedText>
        <AnimatedText
          as="p"
          className="text-[#0a2966] font-medium mb-4"
          direction="up"
          index={0.2}
        >
          {role}
        </AnimatedText>
        <AnimatedText
          as="p"
          className="text-gray-600 dark:text-gray-300"
          direction="up"
          index={0.3}
        >
          {bio}
        </AnimatedText>
      </div>
    </AnimatedProfile>
  );
} 
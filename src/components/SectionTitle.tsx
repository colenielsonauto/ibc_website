"use client";

import React from "react";
import { Container } from "@/components/Container";
import { motion } from "framer-motion";
import { AnimatedHeading, AnimatedText } from "./animations";

interface SectionTitleProps {
  preTitle?: string;
  title?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}

export const SectionTitle = (props: Readonly<SectionTitleProps>) => {
  return (
    <Container
      className={`flex w-full flex-col mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}>
      {props.preTitle && (
        <motion.div 
          className="text-sm font-bold tracking-wider text-[#0a2966] uppercase"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {props.preTitle}
        </motion.div>
      )}

      {props.title && (
        <AnimatedHeading
          as="h2"
          className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white"
          delay={0.1}
        >
          {props.title}
        </AnimatedHeading>
      )}

      {props.children && (
        <AnimatedText
          as="p"
          className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300"
          direction="up"
          index={1}
        >
          {props.children}
        </AnimatedText>
      )}
    </Container>
  );
}


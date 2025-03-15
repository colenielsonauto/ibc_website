"use client";

import Image from "next/image";
import React from "react";
import { Container }  from "@/components/Container";
import ClientAnimatedElement, { ClientParallaxImage } from "./ClientAnimatedElement";

interface BenefitsProps {
  imgPos?: "left" | "right";
  data: {
    imgPos?: "left" | "right";
    title: string;
    desc: string;
    image: any;
    bullets: {
      title: string;
      desc: string;
      icon: React.ReactNode;
    }[];
  };
}
export const Benefits = (props: Readonly<BenefitsProps>) => {
  const { data } = props;
  return (
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}>
          <ClientAnimatedElement 
            animation="scale" 
            duration={0.7} 
            threshold={0.2}
            className="w-full"
          >
            <div className="overflow-hidden rounded-lg">
              <Image
                src={data.image}
                width={521}
                height={521}
                alt="Benefits"
                className="object-cover transform hover:scale-105 transition-transform duration-700"
                placeholder="blur"
                blurDataURL={data.image.src}
              />
            </div>
          </ClientAnimatedElement>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            data.imgPos === "right" ? "lg:justify-end" : ""
          }`}>
          <div>
            <div className="flex flex-col w-full mt-4">
              <ClientAnimatedElement animation="slideUp" duration={0.6}>
                <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                  {data.title}
                </h3>
              </ClientAnimatedElement>

              <ClientAnimatedElement animation="slideUp" delay={0.2} duration={0.6}>
                <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                  {data.desc}
                </p>
              </ClientAnimatedElement>
            </div>

            <div className="w-full mt-5">
              {data.bullets.map((item, index) => (
                <ClientAnimatedElement 
                  key={index} 
                  animation="slideUp" 
                  delay={0.2 + index * 0.1} 
                  duration={0.5}
                >
                  <Benefit title={item.title} icon={item.icon}>
                    {item.desc}
                  </Benefit>
                </ClientAnimatedElement>
              ))}
            </div>
          </div>
        </div>
      </Container>
  );
};

function Benefit(props: any) {
  return (
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-[#0a2966] rounded-md w-11 h-11 ">
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-white",
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
            {props.title}
          </h4>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            {props.children}
          </p>
        </div>
      </div>
  );
}

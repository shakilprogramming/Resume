"use client";

import React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
      
      {/* <ParticleHero /> */}

      <div className="relative z-10 flex-col items-center">
        <Image
          src="/images/green1.jpg"
          alt="heroimage"
          width={150}
          height={150}
          className="rounded-full border-8 border-[#0c0c48aa]"
          data-aos="fade-up"
        />
      </div>

      <h1
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold tracking-wide"
      >
        Createing web products,
        <span className="text-cyan-200"> brands, and experiences</span>
      </h1>

      <h2
        data-aos="fade-up"
        data-aos-delay="400"
        className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center"
      >
        Hi I’m Shakil — A Passionate
        <span className="text-cyan-200 font-bold pl-2">
          <Typewriter
            options={{
              strings: [
                "Frontend Developer",
                "Backend Developer",
                "Web Developer",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </span>
      </h2>

      <button
        data-aos="fade-up"
        data-aos-delay="600"
        className="mt-6 px-10 py-2 bg-blue-700 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium flex items-center"
      >
        <span>See my work</span>
        <BsArrowRight className="w-5 h-5 ml-2" />
      </button>
    </div>
  );
};

export default Hero;

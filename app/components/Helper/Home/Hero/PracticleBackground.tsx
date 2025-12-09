"use client";
import React from 'react';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div className='relative h-screen flex items-center justify-center text-white overflow-hidden flex-col'>
      <div className='relative z-10 flex flex-col items-center'>
        <Image 
          src="/images/green.jpg" 
          alt="hero image" 
          width={150} 
          height={150} 
          className="rounded-full border-8 border-[#0c0c48aa]"
        />
      </div>
      
      <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold tracking-wide mt-6'>
        Creating web products, <span className='text-cyan-200'>brands, and experiences</span>
      </h1>
      
      <h2 className='mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center justify-center'>
        Hi I'm Shakil. A Passionate
        <span className='text-cyan-200 font-bold'>
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
              wrapperClassName: "pl-2",
            }}
          /> 
        </span>
      </h2>
      
      <button className='mt-6 px-10 py-3 bg-blue-600 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium flex items-center'>
        <span>See my work</span>
        <BsArrowRight className='w-5 h-5 ml-2' />
      </button>
    </div>
  );
};

export default Hero;
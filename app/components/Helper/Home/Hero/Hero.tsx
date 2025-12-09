"use client";
import { Particle } from '@tsparticles/engine';
import React from 'react';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import Typewriter from 'typewriter-effect'
const Hero = () => {
  return (
    <div className='relative h-screen flex items-center justify-center text-white overflow-hidden flex-col'>
        <ParticleHero/>

        <div className='relative z-10 flex-col items-center'>
            <Image src="/image/" alt="heroimage" width={150} height={150} className="rounded-full border=8 border-[#0c0c48aa ]"/>
        </div>
        <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center font center font-bold tracking-wide'>
            Createing web products,<span className='text-cyan-200'>brands, and expericences</span>

        </h1>
        <h2 className='mt-5 text-sm px-2 text-center sm:text-2xl font-medium fkex items-center '>
            Hi Im Shakil A Passionate
            <span className='text-cyan-200 font-bold'>
                <Typewriter 
                options={{
                    strings:[
                        "Frontedend Developer",
                        "Backend Developer",
                        "Web Developer",
                           
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50,
                    wrapperClassName: "pl-2",
                }}/> 
            </span>
        </h2>
        <button className='mt-6 px-10 bg-blue hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium'>
            <span>See my work</span>
            <BsArrowRight className='w-5 h-5 ml-2 inline-block'/>
        </button>
    </div>
  )
}

export default Hero
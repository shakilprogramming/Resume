'use client';
import React, { useEffect } from 'react';
import Hero from './Hero/Hero';
import Services from './Services/Services';
import Resume from './Resume/Resume';
import Projects from './Projects/Projects';
import Skills from './Skiils/Skills';
import ClientReview from './ClientReview/ClientReview';
import Blog from './Blog/Blog';
import Context from './Context/Context';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom',
      });
    };
    initAOS();
  }, []);

  return (
    <div className='overflow-hidden'>
      <Hero />
      <Services />
      <Resume />
      <Projects />
      <Skills />
      <ClientReview />
      <Blog />
      <Context />

      <div className='h-20'></div>
    </div>
  );
};

export default Home;
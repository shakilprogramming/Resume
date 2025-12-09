import React from 'react';
import Hero from './Hero/Hero';
import Services from './Services/Services';
import Resume from './Resume/Resume';
import Projects from './Projects/Projects';
import ClientReview from './ClientReview/ClientReview';
import Blog from './Blog/Blog';
import Context from './Context/Context';

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Services/>
      <Resume/>
      <Projects/>
      <Skills/>
      <ClientReview/>
      <Blog/>
      <Context/>

      <div className='h-20'></div>

      
    </div>
  )
}

export default Home
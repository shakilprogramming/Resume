import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div>
      <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
        Collaborator with brands <br /> and agencies with impactful results
      </h1>

      <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center'>
        
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <ServiceCard 
            icon="/images/uiux.png"
            name="UI & UX"
            description="Design interfaces that are intuitive, efficient, and easy to use."
          />
        </div>

        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
          <ServiceCard 
            icon="/images/webapp.png"
            name="Web & Mobile App"
            description="Build responsive and modern web & mobile applications."
          />
        </div>

      </div>
    </div>
  )
}

export default Services;

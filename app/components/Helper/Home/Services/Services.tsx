import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div>
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xk font-bold text-white'>Collleborator with brand <br/> and agenices imapctful results </h1>
    <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center'>
        <div>
         <ServiceCard icon="/images/" 
          name="Ui and Ux"
          description="Design infterfaces that are intuitive, efficient,and enjoyable to use"
        />
        </div>
        <div>
         <ServiceCard icon="images/" 
          name="web and Mobile App"
          description="Design infterfaces that are intuitive, efficient,and enjoyable to use"
        />
        </div>
    </div>
    </div>
    
  )
}

export default Services
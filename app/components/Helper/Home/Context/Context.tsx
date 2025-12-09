import React from 'react'
import { BiEnvelope, BiMap, BiPhone } from 'react-icons/bi';
import { FaFacebook } from 'react-icons/fa';

const Context = () => {
  return (
    <div className='pt- pb-16'>
        <div className='w-[90%] md:w-[80%0] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
         <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold sm:text-lg'>
            Schedule a call with me to see if i can help
         </h1>
         <p className='text-gray-400 mt-6 text-base sm:text-lg'>
            Reach out me today and let;s discuss how I can help achieve
         </p>

       < div className='mt-7'>
       <div className='flex items-center space-x-3 mb-4'>
        <BiPhone className='w-9 h-9 text-cyan-300'/>
        <p className='text-xl font-bold text-gray-400'>
            +33333333
        </p>

       </div>
       <div className='flex items-center space-x-3 mb-4'>
        <BiEnvelope className='w-9 h-9 text-cyan-300'/>
        <p className='text-xl font-bold text-gray-400'>
            hellow@gmail.com
        </p>

       </div>
       <div className='flex items-center space-x-3 mb-4'>
        <BiMap className='w-9 h-9 text-cyan-300'/>
        <p className='text-xl font-bold text-gray-400'>
            Dhaka
        </p>

       </div>


       </div>
       <div className='flex items-center mt-8 space-x-3'>
        <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300'>
          <FaFacebook className='text-white- w-6 h-5'/>

        </div>
        <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300'>
          <FaFacebook className='text-white- w-6 h-5'/>

        </div>
        <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300'>
          <FaFacebook className='text-white- w-6 h-5'/>

        </div>
        <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300'>
          <FaFacebook className='text-white- w-6 h-5'/>

        </div> 

       </div>
        </div>
        <div className='md:p-10  p-5 bg[#131332] rounded-lg '>
         <input type='text' placeholder='Name' className='px-4 mt-6 py-3.5 bg[#363659] text-white outline-none rounded-md w-full placeholder:text-whte/70'></input>
         <input type='text' placeholder='Name' className='px-4  mt-6 py-3.5 bg[#363659] text-white outline-none rounded-md w-full placeholder:text-whte/70'></input>
         <input type='text' placeholder='Name' className='px-4  mt-6 py-3.5 bg[#363659] text-white outline-none rounded-md w-full placeholder:text-whte/70'></input>
         <textarea placeholder='Your name' className='px-3.5 bg-[#353659] text-white outline-none rounded-md w-full placehoilder:text-white/70'></textarea>
         <button className='mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition duration-300 cursor-pointer text-white rounded-full'>send message</button>
        
        </div>


    </div>
  )
}

export default Context;
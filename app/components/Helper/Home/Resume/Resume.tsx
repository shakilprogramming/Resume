import React from 'react'
import ResumeCard from "./ResumeCard";
import { FaCodepen, FaReact } from 'react-icons/fa';
import { BsDatabase } from 'react-icons/bs';
import { BiBadge } from 'react-icons/bi';
const Resume = () => {
  return (
    <div className='pt-20 sm:w[70] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>
       <div>
        <h1 className='text-3xl sm:text-4xl font-bold text-white'>My work <span className='text-cyan-200'>Experice</span> </h1>
        <div className='mt-10 '>
            <ResumeCard Icon={FaCodepen} role="Full-Stack Developer"/>
            <ResumeCard Icon={FaReact} role="Full-end Developer"/>
            <ResumeCard Icon={BsDatabase} role="Full-Stack Developer"/>


        </div>
       </div>
       <div>

         <div>
            <h1 className='text-3xl sm:text-4xl font-bold text-white'>My work <span className='text-cyan-200'>Education</span></h1>
                 <div className='mt-10 '>
            <ResumeCard Icon={BiBadge} role="Design Institution"  date="jan 2019 dec 2022"/>
            <ResumeCard Icon={FaReact} role="Front-End Developer" date='jan 2019 Dec 2022' />
            <ResumeCard Icon={BsDatabase} role="Full-Stack Developer"  date='jan 2019 dec 2022'/>


        </div>
         </div>
       </div>
    </div>
  )
}

export default Resume
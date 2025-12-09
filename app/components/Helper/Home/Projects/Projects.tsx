import React from 'react'

const Projects = () => {
  return (
    <div className='pt-16'>
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>A Small selection of recent <br /> <span className='text-cyan-300'> Project</span></h1>
   
     <div className='w-[70%] mx:auto grid grid-cols md:grid-cols-2 gap-10 mt-16'>
     <div >
         <Image src='/images/p1.' alt="img" width={800} height={650} className="rounded-lg"/>

         <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white '> Modern Finace deshBoard</h1>

        <h1 className='pt-2 font-medium text-white/80'>Apps.UI/Uk</h1>
         
        </div> 
    
     </div>
    </div>

  )
}

export default Projects
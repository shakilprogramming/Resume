import React from 'react'
import BlogCard from './BlogCard'

const Blog = () => {
  return (
    <div className='pt-16 pb-16'>

     <h1 className='text-center text-2xl md:text-4xl md:text-4xl xl:text-5xl font-bold text-white'>
            My lastest <br>
            <span className='text-cyan-200'> Blogs </span></br>
        </h1>
        <div className='w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-3 xl:gap-4 gap-10 items-center mt-16'>
         <div>
            <BlogCard image="/" title=""/>
         </div>
         <div>
            <BlogCard image="/" title=""/>
         </div>
           <h1 className='text-center text-2xl md:text-4xl md:text-4xl xl:text-5xl font-bold text-white'>
            kind words from satisfied <br>
            <span className='text-cyan-200'> client</span></br>
        </h1> 
        </div>
    </div>
  )
}

export default Blog
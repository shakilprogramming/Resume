'use client';

import React from 'react';
import BlogCard from './BlogCard';

const Blog = () => {
    return (
        <div className='pt-16 pb-16'>
            <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
                My Latest <br />
                <span className='text-cyan-200'>Blogs</span>
            </h1>
            
            <div className='w-[90%] xl:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-center mt-16'>
                <div
                    data-aos="fade-right"
                    data-aos-anchor-placement="top-center"
                    data-aos-delay="100"
                >
                    <BlogCard 
                        image="/images/blog1.jpg" 
                        title="Getting Started with Next.js 15"
                        date="5 July 2024"
                        tags={["React", "Next.js"]}
                    />
                </div>
                
                <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    data-aos-delay="200"
                >
                    <BlogCard 
                        image="/images/blog2.jpg" 
                        title="Mastering TypeScript for React Development"
                        date="12 July 2024"
                        tags={["TypeScript", "React"]}
                    />
                </div>
                
                <div
                    data-aos="fade-left"
                    data-aos-anchor-placement="top-center"
                    data-aos-delay="300"
                >
                    <BlogCard 
                        image="/images/blog3.jpg" 
                        title="Building Modern UI with Tailwind CSS"
                        date="20 July 2024"
                        tags={["CSS", "Tailwind"]}
                    />
                </div>
            </div>
        </div>
    );
};

export default Blog;
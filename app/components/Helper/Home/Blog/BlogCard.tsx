import React from 'react';
import Image from 'next/image';

type Props = {
    image: string;
    title: string;
    date: string;
    tags: string[];
};

const BlogCard = ({ image, title, date, tags }: Props) => {
    return (
        <div className='bg-[#14134145] rounded-xl overflow-hidden hover:scale-105 transition-all duration-300'>
            <Image 
                src={image} 
                alt={title} 
                width={500} 
                height={300} 
                className="object-cover w-full h-64"
            />
            <div className='p-6'>
                <p className='text-gray-400 font-medium text-sm sm:text-base'>
                    {date}
                </p>

                <h1 className='mt-3 text-lg sm:text-xl font-bold text-white hover:underline hover:text-cyan-300 cursor-pointer transition-all duration-300'>
                    {title}
                </h1>
                
                <div className='mt-4 flex gap-2 flex-wrap'>
                    {tags.map((tag, index) => (
                        <span 
                            key={index}
                            className='px-4 py-1.5 bg-blue-950 text-white text-sm sm:text-base font-bold rounded-full'
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
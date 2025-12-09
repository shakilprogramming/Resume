import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

type Props = {
    image: string;
    name: string;
    role: string;
};

const ClientReviewCard = ({ image, name, role }: Props) => {
    return (
        <div className='bg-[#14134145] p-6 rounded-xl hover:scale-105 transition-all duration-300'>
            <Image 
                src={image} 
                alt={name} 
                width={60} 
                height={60} 
                className="rounded-full mx-auto" 
            />
            
            {/* Star Rating */}
            <div className='flex items-center justify-center mt-4 space-x-1'>
                <FaStar className='text-yellow-400' />
                <FaStar className='text-yellow-400' />
                <FaStar className='text-yellow-400' />
                <FaStar className='text-yellow-400' />
                <FaStar className='text-yellow-400' />
            </div>
            
            {/* Review Text */}
            <p className='mt-6 text-base text-gray-200 font-medium text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum similique a facilis unde possimus incidunt quod! Odit est ut assumenda accusantium.
            </p>
            
            {/* Name */}
            <h1 className='mt-6 text-xl font-bold text-cyan-200 text-center'>{name}</h1>
            
            {/* Role */}
            <p className='text-gray-400 text-center'>{role}</p>
        </div>
    );
};

export default ClientReviewCard;
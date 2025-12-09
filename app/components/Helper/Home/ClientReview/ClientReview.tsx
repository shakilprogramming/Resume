'use client';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ClientReviewCard from './ClientReviewCard';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
};

const ClientReview = () => {
    return (
        <div className='pt-16 pb-16'>
            <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
                Kind words from satisfied <br />
                <span className='text-cyan-200'>clients</span>
            </h1>
            <div className='mt-16 w-[90%] xl:w-[70%] mx-auto'>
                <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    autoPlaySpeed={5000}
                    infinite={true}
                    showDots={true}
                    arrows={true}
                >
                    <ClientReviewCard
                        image="/images/user1.jpg"
                        name="John Doe"
                        role="CEO, Tech Company"
                    />
                    <ClientReviewCard
                        image="/images/user2.jpg"
                        name="Jane Smith"
                        role="Designer"
                    />
                    <ClientReviewCard
                        image="/images/user3.jpg"
                        name="Mike Johnson"
                        role="Developer"
                    />
                    <ClientReviewCard
                        image="/images/user4.jpg"
                        name="Sarah Williams"
                        role="Marketing Manager"
                    />
                </Carousel>
            </div>
        </div>
    );
};

export default ClientReview;
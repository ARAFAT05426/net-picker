"use client";
import 'swiper/css';
import React from 'react';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import autoplay CSS
import { Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

export default function Banner() {
    const banners = [
        {
            image: "/pexels-ionela-mat-268382825-26181307.jpg",
            title: "Discover Amazing Products",
            description: "Explore our collection of unique items at unbeatable prices!",
        },
        {
            image: "/pexels-pixabay-47220.jpg",
            title: "Quality You Can Trust",
            description: "Shop with confidence! All our products are of top quality.",
        },
        {
            image: "/pexels-rdne-6849423.jpg",
            title: "Limited Time Offer",
            description: "Grab your favorites before they are gone! Sale ends soon.",
        },
    ];

    return (
        <Swiper
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination, Autoplay]} // Add Autoplay to modules
            loop={true}
            autoplay={{
                delay: 2000, // Delay between transitions in milliseconds
                disableOnInteraction: false, // Continue autoplay after user interactions
            }}
            className="mySwiper -mt-[80px]"
        >
            {
                banners.map((banner, i) => (
                    <SwiperSlide className='relative' key={i}>
                        <Image className='h-screen object-cover' src={banner.image} alt={banner.title} width={2000} height={500} />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
                            <h2 className="text-4xl font-bold mb-2">{banner.title}</h2>
                            <p className="text-lg text-center px-4">{banner.description}</p>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}

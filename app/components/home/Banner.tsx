"use client";
import 'swiper/css';
import React, { useState } from 'react';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';

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

    // Animation variants for the text reveal
    const textReveal = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    // State to track the active slide index
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Swiper
            modules={[Autoplay, EffectFade, Pagination]}
            pagination={{
                dynamicBullets: true,
            }}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}  // Update active index on slide change
            className="mySwiper"
            effect={'fade'}
            loop={true}
        >
            {banners.map((banner, i) => (
                <SwiperSlide className="relative h-screen" key={i}>
                    <div
                        className="h-screen flex items-center"
                        style={{ backgroundImage: `url('${banner.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                        <motion.div
                            className="container flex flex-col text-white/95 space-y-4 px-4 lg:px-0"
                            key={activeIndex}  // Re-render animation on slide change
                            initial="hidden"
                            animate="visible"
                            variants={textReveal}
                        >
                            <motion.h2
                                className="text-4xl lg:text-8xl font-extrabold max-w-4xl"
                                variants={textReveal}
                            >
                                {banner.title}
                            </motion.h2>
                            <motion.p
                                className="text-lg lg:text-xl max-w-2xl"
                                variants={textReveal}
                                transition={{ delay: 0.2 }}
                            >
                                {banner.description}
                            </motion.p>
                        </motion.div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

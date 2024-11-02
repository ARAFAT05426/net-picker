"use client";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import { Fade } from 'react-awesome-reveal'; // Import the Fade animation

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
            modules={[Autoplay, EffectFade, Pagination]}
            pagination={{
                dynamicBullets: true,
            }}
            autoplay={{
                delay: 3000,  // Increased delay for smoother transition
                disableOnInteraction: false,
            }}
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
                        <div className="container flex flex-col text-white/95 space-y-4 px-4 lg:px-0">
                            <Fade direction='up' duration={500} delay={0}>
                                <h2 className="text-4xl lg:text-8xl font-extrabold max-w-4xl">
                                    {banner.title}
                                </h2>
                            </Fade>
                            <Fade direction='up' duration={500} delay={350}>
                                <p className="text-lg lg:text-xl max-w-2xl">
                                    {banner.description}
                                </p>
                            </Fade>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

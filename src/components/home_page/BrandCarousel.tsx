import 'swiper/css';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import brand_partners from '../../statics/brand_partners';

const BrandCarousel = () => {
    return (
        <section className="relative">
            {/* Swiper component */}
            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                }}
                loop={true}
                speed={3000}
                spaceBetween={25}
                slidesPerView={5}
                className="relative z-10"
                style={{
                    transitionTimingFunction: 'linear'
                }}
            >
                {brand_partners?.map((brand, i) => (
                    <SwiperSlide key={i} className="py-5">
                        <h1 className="text-3xl font-bold">{brand.partner}{" "}{i}</h1>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default BrandCarousel;

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';
import LinkBtn from "../btns/LinkBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import banner_sliders from "../../statics/banner_sliders";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useTranslation } from "react-i18next";

const Banner = () => {

    const { t } = useTranslation()

    return (
        <div className="relative">
            <Swiper
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                pagination={{
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={{
                    enabled: true,
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }}
                className="mySwiper"
                effect="fade"
                loop={true}
            >
                {banner_sliders?.map((banner_slider, i) => (
                    <SwiperSlide key={i}>
                        <div
                            className="relative h-[calc(100vh-160px)] w-full flex items-center bg-cover bg-center"
                            style={{ backgroundImage: `url('${banner_slider?.image}')` }}
                        >
                            <div className="container">
                                <div className="w-full max-w-2xl space-y-2.5">
                                    <span className="text-primary text-lg font-semibold">
                                        {t(banner_slider?.title)}
                                    </span>
                                    <h1 className="text-6xl tracking-wider font-semibold">
                                        {t(banner_slider?.title)}
                                    </h1>
                                    <p className="max-w-xl pb-3.5">
                                        {t(banner_slider?.description)}
                                    </p>
                                    <LinkBtn to={banner_slider?.link}>
                                        {t(banner_slider?.buttonText)}
                                    </LinkBtn>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="absolute inset-y-1/2 inset-x-0 flex items-center justify-between">
                    <button className="swiper-button-prev px-3.5 py-2.5 bg-secondary text-white z-10 rounded-sm">
                        <GoChevronLeft size={22.5} />
                    </button>
                    <button className="swiper-button-next px-3.5 py-2.5 bg-secondary text-white z-10 rounded-sm">
                        <GoChevronRight size={22.5} />
                    </button>
                </div>
            </Swiper>
        </div>
    );
};

export default Banner;

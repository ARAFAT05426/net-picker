import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import banner_sliders from '../../statics/banner_sliders';
import LinkBtn from '../btns/LinkBtn';

const Banner = () => {
    return (<Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        pagination={{
            dynamicBullets: true,
        }}
        autoplay={{
            delay: 2500
        }}
        className="mySwiper mt-40"
        effect='fade'
        loop={true}
    >
        {banner_sliders?.map((banner_slider, i) => <SwiperSlide key={i}>
            <div className='h-[calc(100vh-160px)] w-full flex items-center' style={{
                backgroundImage: `url('${banner_slider?.image}')`
            }}>
                <div className='container'>
                    <div className='w-full max-w-2xl space-y-2.5'>
                        <span className='text-primary text-lg font-semibold'>{banner_slider?.title}</span>
                        <h1 className='text-6xl tracking-wider font-semibold'>{banner_slider?.title}</h1>
                        <p className='max-w-xl pb-3.5'>{banner_slider?.description}</p>
                        <LinkBtn to={banner_slider?.link}>
                            {banner_slider?.buttonText}
                        </LinkBtn>
                    </div>
                </div>
            </div>
        </SwiperSlide>)}
    </Swiper>);
}
export default Banner;
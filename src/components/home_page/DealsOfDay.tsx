import 'swiper/css';
import Product from "../cards/Product";
import { useEffect, useState } from "react";
import { Navigation } from 'swiper/modules';
import BarLoader from '../common/BarLoader';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios_common from "../../utils/axios_common";
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

const DealsOfDay = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios_common.get(`?limit=8`);
                setData(response?.data?.products);
                setError(""); // Clear any previous errors
            } catch (error) {
                console.error("Error fetching data", error);
                setError("Failed to fetch deals");
                setData(null);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) return <BarLoader />;
    if (error) return <div>Error: {error}</div>;

    return (
        <section className="bg-[#F4F2E6] space-y-3.5 py-20">
            <div className='container'>
                <div className="flex items-center justify-between mb-4">
                    <h1 className=" text-2xl md:text-4xl font-semibold">Deals of the Day</h1>
                    <div className="flex items-center gap-x-1.5 z-10">
                        <button className="swiper-button-prev bg-white hover:bg-primary hover:text-white p-1.5 rounded-sm border transition-all duration-300">
                            <GoChevronLeft size={22.5} />
                        </button>
                        <button className="swiper-button-next bg-white hover:bg-primary hover:text-white p-1.5 rounded-sm border transition-all duration-300">
                            <GoChevronRight size={22.5} />
                        </button>
                    </div>
                </div>

                {/* Responsive Swiper Component */}
                <Swiper
                    spaceBetween={12.5}
                    className="mySwiper"
                    modules={[Navigation]}
                    navigation={{
                        enabled: true,
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }}
                    loop={true}
                    slidesPerView={1}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {data?.map((deals, i) => (
                        <SwiperSlide key={i} className="min-h-full h-full">
                            <Product className='bg-white' product={deals} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default DealsOfDay;

import 'swiper/css';
import Product from "../cards/Product";
import BarLoader from '../common/BarLoader';
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import axios_common from "../../utils/axios_common";
import product_props from "../../types/product_props";
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

const DealsOfDay = () => {
    const [data, setData] = useState<product_props[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios_common.get(`?limit=8`);
                setData(response?.data?.products);
                setError("");
            } catch (error) {
                console.error("Error fetching data", error);
                setError("Failed to fetch deals");
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) return <BarLoader />;
    if (error) return <div>Error: {error}</div>;

    return (
        <section className="bg-[#f4f2e688] space-y-3.5 py-14">
            <div className='container'>
                <div className="flex items-center justify-between mb-4">
                    <h1 className=" text-2xl md:text-4xl font-semibold">Deals of the Day</h1>
                    <div className="flex items-center gap-x-1.5 z-10">
                        <button className="swiper-button-prev bg-white hover:bg-primary hover:text-white px-2.5 py-1.5 rounded-sm border transition-all duration-300">
                            <GoChevronLeft size={25} />
                        </button>
                        <button className="swiper-button-next bg-white hover:bg-primary hover:text-white px-2.5 py-1.5 rounded-sm border transition-all duration-300">
                            <GoChevronRight size={25} />
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
                            <Product className='' product={deals} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default DealsOfDay;

import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { LuHeart } from 'react-icons/lu';
import { TbArrowsExchange2 } from 'react-icons/tb';
import product_props from '../../types/product_props';
import { GoPlus } from 'react-icons/go';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaArrowUp } from 'react-icons/fa6';

interface Props {
    product: product_props;
    className?: string;
}

const Product: FC<Props> = ({ className = "", product }) => {
    const { name, rating = 0, image_url, price } = product;
    console.log(rating)
    // Function to render stars based on rating
    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                i <= rating ? (
                    <AiFillStar key={i} className="text-yellow-500" />
                ) : (
                    <AiOutlineStar key={i} className="text-yellow-500" />
                )
            );
        }
        return stars;
    };

    return (
        <div className={`${className} relative group p-3.5 flex flex-col border rounded-sm`} style={{ height: '100%' }}>
            <div className="relative h-48 md:h-56 lg:h-60 overflow-hidden mb-2.5">
                {/* "hello" label with higher z-index */}
                <div className="absolute top-2.5 left-2.5 bg-secondary text-white text-xs tracking-widest px-2.5 py-0.5 z-[1]">
                    hello
                </div>

                {/* Wrapper div for scaling image on hover */}
                <div className="transition-transform duration-300 group-hover:scale-110">
                    <img
                        className="min-h-full h-48 md:h-56 lg:h-60 w-full bg-[#EEEEEE] object-contain"
                        src={image_url}
                        alt={name}
                    />
                </div>

                {/* Options buttons with staggered reveal */}
                <div className="absolute inset-x-0 bottom-1 flex items-center justify-center gap-x-px opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white hover:text-white hover:bg-primary px-2.5 py-1.5 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-[50ms]">
                        <LuHeart size={22} />
                    </button>
                    <button className="bg-white hover:bg-primary hover:text-white flex items-center gap-x-1.5 px-2.5 py-1.5 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-150">
                        <GoPlus size={22} /> <span className="text-sm font-semibold tracking-wider">Quick View</span>
                    </button>
                    <button className="bg-white hover:bg-primary hover:text-white px-2.5 py-1.5 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-[250ms]">
                        <TbArrowsExchange2 size={22} />
                    </button>
                </div>
            </div>

            {/* Product name */}
            <h1 className="sm:text-lg md:text-xl tracking-wider text-primary font-semibold mb-2">
                {name}
            </h1>

            {/* Star rating */}
            <div className="flex items-center mb-1.5">
                {renderStars(rating)}
                <span className="ml-2.5 text-xs text-gray-500">({rating})</span>
            </div>

            {/* Divider */}
            <hr className="my-1" />

            {/* Price and View Offer link */}
            <div className="flex items-center justify-between tracking-widest font-semibold py-1 px-0.5">
                <p className='flex items-center gap-x-1.5'><span className=''>From</span> ${price}</p>
                <Link to={`/${name}`} className='flex items-center gap-x-1.5 underline tracking-widest font-semibold'>
                    View Offer
                    <FaArrowUp className='rotate-45' />
                </Link>
            </div>
        </div>
    );
};

export default Product;

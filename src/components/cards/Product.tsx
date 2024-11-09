import type { FC } from 'react';
import { GoArrowUpRight, GoPlus } from 'react-icons/go';
import { LuHeart } from 'react-icons/lu';
import { CiRoute } from 'react-icons/ci';
import product_props from '../../types/product_props';
import { Link } from 'react-router-dom';

interface Props {
    product: product_props;
    className?: string;
}

const Product: FC<Props> = ({ className = "", product }) => {
    const { title, images, price, brand } = product;
    console.log(product)

    return (
        <div className={`${className} relative group flex flex-col rounded transition-all duration-300`} style={{ height: '100%' }}>
            {/* Image container with fixed height */}
            <div className="relative h-48 md:h-56 lg:h-60 overflow-hidden mb-2.5">
                <img className="min-h-full h-48 md:h-56 lg:h-60 w-full bg-[#EEEEEE] object-contain group-hover:scale-110 transition-all duration-300" src={images[0]} alt={title} />
                {/* Options buttons with staggered reveal */}
                <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="option-button px-3 py-2 bg-primary text-white rounded-sm transform -translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                        <LuHeart size={22} />
                    </button>
                    <button className="option-button bg-white hover:bg-primary hover:text-white flex items-center gap-x-1.5 px-3 py-2 border rounded-sm transform -translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-[150ms]">
                        <GoPlus size={22} /> <span className="text-sm font-semibold tracking-wider">Quick View</span>
                    </button>
                    <button className="option-button bg-white hover:bg-primary hover:text-white px-3 py-2 border rounded-sm transform -translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-[225ms]">
                        <CiRoute size={22} />
                    </button>
                </div>
            </div>
            {/* Brand label */}
            <span className="flex items-center gap-1 text-xs font-semibold opacity-75 mb-2">
                <span className="h-[1.25px] w-5 bg-accent" /> {brand}
            </span>

            {/* Title with flexible height */}
            <h1 className="sm:text-lg md:text-xl tracking-wider text-primary font-semibold mb-2">
                {title.slice(0, 20)}
            </h1>
            {/* Divider */}
            <hr className="my-1.5" />
            {/* Price and stock */}
            <div className="flex items-center justify-between text-sm md:text-lg tracking-widest font-semibold py-1 px-0.5">
                <p className='flex items-center gap-x-1.5'><span className='text-xs'>From</span> ${price}</p>
                {/* <p className="flex items-center gap-0.5"><AiOutlineCodeSandbox /> {stock}</p> */}
                <Link to={`/${title}`} className='text-sm text-center tracking-widest font-semibold underline flex items-center gap-x-1.5'>
                    View Offer
                    <GoArrowUpRight />
                </Link>
            </div>
        </div>
    );
};

export default Product;

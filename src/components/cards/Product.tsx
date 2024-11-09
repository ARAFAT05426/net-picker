import type { FC } from 'react';
import { AiOutlineCodeSandbox } from 'react-icons/ai';
import { CiRoute } from 'react-icons/ci';
import { GoPlus } from 'react-icons/go';
import { LuHeart } from 'react-icons/lu';
import LinkBtn from '../btns/LinkBtn';

interface ProductProps {
    title: string;
    stock: number;
    images: [string];
    price: number;
    brand?: string;
}

interface Props {
    product: ProductProps;
    className?: string;
}

const Product: FC<Props> = ({ className = "", product }) => {
    const { title, images, price, stock, brand } = product;

    return (
        <div className={`${className} relative group flex flex-col p-4 sm:p-5 rounded border h-[27.5rem] md:h-[30rem] lg:h-[32rem] hover:shadow-lg transition-all duration-300`}>
            {/* Brand label */}
            <span className="flex items-center gap-1 text-xs font-semibold opacity-75 mb-2">
                <span className="h-[1.25px] w-5 bg-accent" /> {brand}
            </span>

            {/* Title with flexible height */}
            <h1 className="text-lg sm:text-xl md:text-2xl tracking-wider text-primary font-semibold flex-grow line-clamp-2 mb-2">
                {title}
            </h1>

            {/* Image container with fixed height */}
            <div className="relative flex-shrink-0 max-h-40 md:max-h-48 overflow-hidden my-2 transition-transform duration-300 transform group-hover:scale-105">
                <img className="h-full w-full object-contain" src={images[0]} alt={title} />
                
                {/* Options buttons with staggered reveal */}
                <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="option-button px-3 py-2 bg-primary text-white rounded transform -translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                        <LuHeart size={22} />
                    </button>
                    <button className="option-button bg-white flex items-center gap-x-1.5 px-3 py-2 border rounded transform -translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-[150ms]">
                        <GoPlus size={22} /> <span className="text-sm font-semibold tracking-wider">Quick View</span>
                    </button>
                    <button className="option-button bg-white px-3 py-2 border rounded transform -translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-[225ms]">
                        <CiRoute size={22} />
                    </button>
                </div>
            </div>

            {/* Divider */}
            <hr className="mx-2.5 my-2" />

            {/* Price and stock */}
            <div className="flex items-center justify-between text-lg md:text-xl tracking-widest font-semibold py-1 px-3.5">
                <p>${price}</p>
                <p className="flex items-center gap-0.5"><AiOutlineCodeSandbox /> {stock}</p>
            </div>

            {/* Link Button */}
            <div className="mt-auto">
                <LinkBtn to={`/${title}`} className="block w-full text-center bg-primary text-white font-semibold py-2 rounded hover:bg-opacity-90 transition duration-300">
                    View Offer
                </LinkBtn>
            </div>
        </div>
    );
};

export default Product;

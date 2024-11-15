import { Link } from "react-router-dom";
import { LuHeart } from "react-icons/lu";
import { FaArrowUp } from "react-icons/fa6";
import { TbArrowsExchange2 } from "react-icons/tb";
import product_props from "../../types/product_props";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface Props {
    product: product_props;
    className?: string;
}

const ProductBar: React.FC<Props> = ({ className = "", product }) => {
    const { name, description, rating = 0, image_url, price } = product;

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
        <div className={`w-full flex flex-col sm:flex-row px-2 py-3 sm:px-3 sm:py-4 border-b border-gray-200 ${className}`}>
            {/* Product Image */}
            <img 
                src={image_url} 
                alt={name} 
                className="w-full sm:w-36 md:w-48 h-36 sm:h-48 object-cover rounded-sm mb-2 sm:mb-0 sm:mr-4 bg-[#EEEEEE]"
            />

            {/* Product Details */}
            <div className="flex-1">
                {/* Product Name */}
                <h3 className="text-lg sm:text-xl font-semibold tracking-wide text-gray-800 mb-1">{name}</h3>

                {/* Product Description */}
                <p className="text-sm sm:text-base text-gray-600 opacity-80 mb-2">{description}</p>

                {/* Product Rating and Price */}
                <div className="flex items-center mb-2">
                    <span className="text-lg sm:text-xl font-semibold mr-3">${price.toFixed(2)}</span>
                    {renderStars(rating)}
                    <span className="ml-2 text-xs sm:text-sm text-gray-500 opacity-75">({rating})</span>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 text-gray-500 my-3">
                    <button aria-label="Add to Wishlist">
                        <LuHeart size={20} />
                    </button>
                    <button aria-label="Compare Product">
                        <TbArrowsExchange2 size={20} />
                    </button>
                </div>

                {/* Quick View and View Offer Links */}
                <div className="text-sm sm:text-base flex items-center gap-3 font-semibold">
                    <button className="underline flex items-center text-primary">
                        Quick View <FaArrowUp className="ml-1 rotate-45" />
                    </button>
                    <Link to={`/${name}`} className="underline flex items-center text-primary">
                        View Offer <FaArrowUp className="ml-1 rotate-45" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductBar;

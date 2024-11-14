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
    console.log(rating)
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
        <div className={`w-full flex px-0.5 py-2.5 border-b border-gray-200 ${className}`}>
            {/* Product Image */}
            <img src={image_url} alt={name} className="bg-[#EEEEEE] w-48 h-48 object-cover rounded-sm mr-3.5" />

            {/* Product Details */}
            <div className="flex-1">
                {/* Product Name */}
                <h3 className="text-xl tracking-wider font-semibold text-gray-800">{name}</h3>

                {/* Product Description */}
                <p className="text-sm tracking-wide opacity-75">{description}</p>

                {/* Product Rating */}
                <div className="flex items-center mt-1.5 mb-2">
                    <span className="tracking-wider font-semibold mr-3.5">$ {price.toFixed(2)}</span>
                    {renderStars(rating)}
                    <span className="ml-2.5 tracking-widest text-sm opacity-75">({rating})</span>
                </div>
                <div className="flex items-center gap-x-3.5 my-2.5">
                    <LuHeart size={20} />
                    <TbArrowsExchange2 size={20} />
                </div>
                <div className="text-sm flex items-center gap-x-3.5">
                    <span className="underline flex items-center font-bold tracking-wider">
                        Quick View <FaArrowUp className="ml-1.5 rotate-45" />
                    </span>
                    <Link to={`/${name}`} className='tracking-widest font-bold underline flex items-center'>
                        View Offer
                        <FaArrowUp className="ml-1.5 rotate-45" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductBar;

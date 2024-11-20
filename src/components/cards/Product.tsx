import type { FC } from "react";
import { Link } from "react-router-dom";
import { LuHeart } from "react-icons/lu";
import { TbArrowsExchange2 } from "react-icons/tb";
import product_props from "../../types/product_props";
import { GoPlus } from "react-icons/go";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaArrowUp } from "react-icons/fa6";
import { useProvider } from "../../contexts/ContextProvider";

interface Props {
  product: product_props;
  className?: string;
}

const Product: FC<Props> = ({ className = "", product }) => {
  const { name, rating = 0, image_url, price } = product;
  const { addToCompare } = useProvider();

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
    <div
      className={`${className} relative group p-3.5 md:p-4 lg:p-5 flex flex-col border rounded-sm`}
      style={{ height: "100%" }}
    >
      <div className="relative h-48 md:h-52 lg:h-60 overflow-hidden mb-2.5">
        {/* "hello" label with higher z-index */}
        <div className="absolute top-2 left-2 bg-secondary text-white text-xs sm:text-sm tracking-widest px-3 py-1 z-[1]">
          hello
        </div>

        {/* Wrapper div for scaling image on hover */}
        <div className="transition-transform duration-300 group-hover:scale-110">
          <img
            className="min-h-full w-full bg-[#EEEEEE] object-contain"
            src={image_url}
            alt={name}
          />
        </div>

        {/* Options buttons with staggered reveal */}
        <div className="absolute inset-x-0 bottom-2 flex items-end justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white hover:bg-primary hover:text-white p-2 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-[50ms]">
            <LuHeart className="" />
          </button>
          <button className="bg-white hover:bg-primary hover:text-white flex items-center gap-1.5 p-2 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-150">
            <GoPlus className="" />{" "}
            <span className="text-sm font-semibold tracking-widest">
              Quick View
            </span>
          </button>
          <button onClick={() =>addToCompare(product)} className="bg-white hover:bg-primary hover:text-white p-2 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-[250ms]">
            <TbArrowsExchange2 className="" />
          </button>
        </div>
      </div>

      {/* Product name */}
      <h1 className="text-md sm:text-lg md:text-xl tracking-wide text-primary font-semibold mb-2">
        {name}
      </h1>

      {/* Star rating */}
      <div className="flex items-center mb-2">
        {renderStars(rating)}
        <span className="ml-2 text-xs text-gray-500">({rating})</span>
      </div>

      {/* Divider */}
      <hr className="my-2" />

      {/* Price and View Offer link */}
      <div className="flex items-center justify-between text-sm sm:text-base font-semibold py-2">
        <p className="flex items-center gap-1.5">
          <span>From</span> ${price}
        </p>
        <Link
          to={`/${name}`}
          className="flex items-center gap-1.5 underline font-semibold"
        >
          View Offer
          <FaArrowUp className="rotate-45" />
        </Link>
      </div>
    </div>
  );
};

export default Product;

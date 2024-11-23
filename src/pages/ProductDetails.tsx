import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios_common from "../utils/axios_common";
import PageTitle from "../components/common/PageTitle";
import BarLoader from "../components/common/BarLoader";
import { FaStar } from "react-icons/fa6";
import { VscLaw } from "react-icons/vsc";
import { useState } from "react";
import { MdOutlineCategory } from "react-icons/md";

// Define the type for affiliate
interface Affiliate {
  id: number;
  price: number;
  link: string;
}

const ProductDetails = () => {
  const { id } = useParams();
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Fetch product details using react-query
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["productDetails", id],
    queryFn: async () => {
      const response = await axios_common.get(`/products/${id}`);
      return response.data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <BarLoader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center text-red-500">
        Error: {error.message}
      </div>
    );
  }

  const isDescriptionLong = data?.description?.length > 250;

  // Placeholder for affiliate links
  const affiliates: Affiliate[] = data?.affiliates || [
    { id: 1, price: 15.99, link: "https://example.com/affiliate1" },
    { id: 2, price: 18.49, link: "https://example.com/affiliate2" },
    { id: 3, price: 16.75, link: "https://example.com/affiliate3" },
  ];

  // Find the lowest-priced affiliate
  const lowestAffiliate = affiliates.reduce((prev: Affiliate, curr: Affiliate) =>
    curr.price < prev.price ? curr : prev
  );

  // Other affiliate options excluding the lowest one
  const otherAffiliates = affiliates.filter(
    (affiliate) => affiliate.id !== lowestAffiliate.id
  );

  return (
    <>
      <PageTitle title={data?.name} />
      <section className="container py-3.5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Product Image */}
          <div className="flex items-center justify-center bg-[#F9FAFB] p-5">
            <img
              className="w-full max-w-xs object-contain"
              src={data.image_url}
              alt={data.name}
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              {data.name}
            </h1>

            {/* Product Description */}
            <div className="text-gray-600">
              {isDescriptionLong && !showFullDescription
                ? `${data.description.slice(0, 250)}...`
                : data.description}
              {isDescriptionLong && (
                <span
                  onClick={() => setShowFullDescription(!showFullDescription)}
                  className="ml-2 text-xs text-primary font-medium hover:underline cursor-pointer"
                >
                  {showFullDescription ? "Show Less" : "Read More"}
                </span>
              )}
            </div>

            <div className="flex items-center gap-4">
              {/* Rating */}
              <div title={data?.price} className="flex items-center gap-x-1">
                4.3
                <FaStar className="-mt-1 tracking-widest text-orange-300" />
              </div>
              |
              {/* Compare Button */}
              <button className="flex items-center hover:text-primary transition gap-x-1">
                <VscLaw className="-mt-0.5" size={20} /> Compare
              </button>
              |
              <span className="flex items-center gap-x-1">
                <MdOutlineCategory /> {data.category}
              </span>
            </div>

            {/* Suggested Affiliate */}
            <div className="mt-4">
              <a
                href={lowestAffiliate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 text-center bg-primary text-white font-medium rounded-sm shadow-md hover:bg-primary-dark transition"
              >
                Buy Now - ${lowestAffiliate.price} (Suggested)
              </a>
            </div>

            {/* Other Affiliates */}
            <div className="mt-4">
              <h4 className="text-lg font-medium text-gray-800">
                Other Buying Options:
              </h4>
              <ul className="list-disc list-inside text-gray-600">
                {otherAffiliates.map((affiliate) => (
                  <li key={affiliate.id}>
                    <a
                      href={affiliate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      ${affiliate.price}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;

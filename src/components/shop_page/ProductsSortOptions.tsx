import { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { TfiLayoutListThumb } from "react-icons/tfi";
import CustomDropdown from "../fields/CustomDropdown";

interface Props {
  toggleView: () => void;
  isGridView: boolean;
}

const ProductsSortOptions: React.FC<Props> = ({ toggleView, isGridView }) => {
  const sort_by = ["Nike", "Adidas", "Puma", "Reebok", "Under Armour"];
  const show_products = ["New", "Discount", "Sale", "Exclusive", "Limited Edition"];

  const [selectedSortBy, setSelectedSortBy] = useState<string | null>(null);
  const [selectedShowProducts, setSelectedShowProducts] = useState<string | null>(null);

  console.log(selectedSortBy, selectedShowProducts);

  const handleSortBySelect = (option: string | null) => {
    setSelectedSortBy(option);
  };

  const handleShowProductsSelect = (option: string | null) => {
    setSelectedShowProducts(option);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between pb-3 border-b">
      <div className="flex items-center flex-wrap md:flex-nowrap gap-3.5 mb-3 lg:mb-0">
        <div className="flex items-center h-10 border">
          {/* Toggle Buttons */}
          <button
            onClick={toggleView}
            className={`h-full flex items-center justify-center p-2 ${isGridView ? "bg-primary text-white" : "bg-white text-gray-600"} transition duration-300 ease-in-out`}
            aria-label="Grid view"
          >
            <MdOutlineDashboard />
          </button>
          <button
            onClick={toggleView}
            className={`h-full flex items-center justify-center p-2 ${!isGridView ? "bg-primary text-white" : "bg-white text-gray-600"} transition duration-300 ease-in-out`}
            aria-label="List view"
          >
            <TfiLayoutListThumb className="mt-0.5" />
          </button>
        </div>

        {/* Sort By Dropdown */}
        <CustomDropdown options={sort_by} onSelect={handleSortBySelect} placeholder="Sort by brand" />

        {/* Show Products Dropdown */}
        <CustomDropdown options={show_products} onSelect={handleShowProductsSelect} placeholder="Show Products" />
      </div>

      <span className="text-sm text-gray-600">Show 01-09 of 36 Products</span>
    </div>
  );
};

export default ProductsSortOptions;

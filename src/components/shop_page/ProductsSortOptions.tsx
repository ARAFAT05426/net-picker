import { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { TfiLayoutListThumb } from "react-icons/tfi";
import CustomDropdown from "../fields/CustomDropdown";
import { useTranslation } from "react-i18next";

interface Props {
  toggleView: () => void;
  isGridView: boolean;
}

const ProductsSortOptions: React.FC<Props> = ({ toggleView, isGridView }) => {
  const { t } = useTranslation();

  const sort_by = ["Nike", "Adidas", "Puma", "Reebok", "Under Armour"];
  const show_products = ["New", "Discount", "Sale", "Exclusive", "Limited Edition"];

  const [selectedSortBy, setSelectedSortBy] = useState<string | null>(null);
  const [selectedShowProducts, setSelectedShowProducts] = useState<string | null>(null);

  console.log(selectedSortBy, selectedShowProducts)

  const handleSortBySelect = (option: string | null) => {
    setSelectedSortBy(option);
  };

  const handleShowProductsSelect = (option: string | null) => {
    setSelectedShowProducts(option);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row items-start md:items-center justify-between pb-3 border-b">
      {/* Left Section */}
      <div className="w-full flex flex-col sm:flex-row items-start md:items-center gap-3 lg:gap-4 mb-3 lg:mb-0">
        {/* Toggle Buttons */}
        <div className="flex items-center justify-between w-full sm:w-auto">
          <div className="flex items-center h-10 border rounded">
            <button
              onClick={toggleView}
              className={`h-full flex items-center justify-center px-2.5 sm:px-4 ${isGridView ? "bg-primary text-white" : "bg-white text-gray-600"} transition duration-300 ease-in-out`}
              aria-label={t("productsSortOptions.gridView")}
            >
              <MdOutlineDashboard />
            </button>
            <button
              onClick={toggleView}
              className={`h-full flex items-center justify-center px-2.5 sm:px-4 ${!isGridView ? "bg-primary text-white" : "bg-white text-gray-600"} transition duration-300 ease-in-out`}
              aria-label={t("productsSortOptions.listView")}
            >
              <TfiLayoutListThumb />
            </button>
          </div>
          <span className="block sm:hidden text-xs text-gray-600 mt-2">
            {t("productsSortOptions.showing", { start: 1, end: 9, total: 36 })}
          </span>
        </div>

        {/* Sort By Dropdown */}
        <CustomDropdown
          options={sort_by}
          onSelect={handleSortBySelect}
          placeholder={t("productsSortOptions.sortByBrand")}
          className="w-full sm:w-auto"
        />

        {/* Show Products Dropdown */}
        <CustomDropdown
          options={show_products}
          onSelect={handleShowProductsSelect}
          placeholder={t("productsSortOptions.showProducts")}
          className="w-full sm:w-auto"
        />
      </div>

      {/* Right Section (Showing Info) */}
      <span className="hidden sm:block text-sm text-nowrap text-gray-600">
        {t("productsSortOptions.showing", { start: 1, end: 9, total: 36 })}
      </span>
    </div>
  );
};

export default ProductsSortOptions;

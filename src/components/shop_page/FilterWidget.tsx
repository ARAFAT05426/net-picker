import niche_categories from "../../statics/niche_categories";
import CustomDropdown from "../fields/CustomDropdown";
import WidgetSection from "../common/WidgetSection";
import PriceRangeSlider from "./PriceRangeSlider";
import { GoPlus } from "react-icons/go";
import { useTranslation } from "react-i18next";
import { FC, useState } from "react";
import { IoClose } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";

interface FilterWidgetProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
}

const FilterWidget: FC<FilterWidgetProps> = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [rangeValues, setRangeValues] = useState({ min: 10, max: 100 });
  console.log(rangeValues)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const { t } = useTranslation();

  const handleRangeChange = (values: { min: number; max: number }) => {
    setRangeValues(values);
  };

  const handleResetFilters = () => {
    setRangeValues({ min: 0, max: 200 }); // Reset to default range
    setSelectedCategory(null); // Reset category
    setSearchQuery(""); // Reset search query
  };

  const brands = ["Nike", "Adidas", "Puma", "Reebok", "Under Armour"];
  const popularTags = ["New", "Discount", "Sale", "Exclusive", "Limited Edition"];

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-4/5 bg-white z-50 md:z-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 md:relative md:translate-x-0 md:w-full md:max-w-xs`}
      >
        <div className="">
          {/* Close Button for Mobile */}
          <button
            className="flex md:hidden items-center justify-end gap-x-0.5 text-secondary font-medium py-3.5 ml-auto mr-3.5"
            onClick={() => setIsSidebarOpen(false)}
          >
            <IoClose size={17.5} />
            Close
          </button>
          <hr className="block md:hidden py-1.5" />
        </div>

        {/* Filter Content */}
        <div className="p-5 md:p-0 space-y-3.5 overflow-hidden md:opacity-100 md:max-h-full transition-all duration-500 ease-in-out">
          <WidgetSection title="Search products" className="block md:hidden">
            <div className="h-9 md:h-11 w-full max-w-full md:max-w-md flex items-center rounded-sm border border-collapse relative">
              <input
                className="h-9 md:h-11 w-full pl-3.5 py-2 bg-transparent text-sm outline-none"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search For"
              />
              <button className="h-9 md:h-11 px-5 py-2.5 bg-primary text-white">
                <BsSearch strokeWidth={1.25} />
              </button>
            </div>
          </WidgetSection>

          {/* Price Range */}
          <WidgetSection title={t("filter.shop_by_price")}>
            <PriceRangeSlider
              min={0}
              max={200}
              onChange={handleRangeChange}
              currencyText="$"
              width="100%"
            />
          </WidgetSection>

          {/* Categories */}
          <WidgetSection title={t("filter.category")}>
            <CustomDropdown
              options={niche_categories.map((category) => t(category.name))}
              onSelect={handleCategorySelect}
              placeholder={selectedCategory || t("filter.select_category")}
            />
          </WidgetSection>

          {/* Brands */}
          <WidgetSection title={t("filter.brand")}>
            <div className="text-sm space-y-1">
              {brands.map((brand, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between py-0.5 hover:text-primary transition-all ${i !== brands.length - 1 ? "border-b" : ""
                    }`}
                >
                  <span className="tracking-wide">{brand}</span>
                  <GoPlus className="text-xs group-hover:rotate-180 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </WidgetSection>

          {/* Popular Tags */}
          <WidgetSection title={t("filter.popular_tags")}>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {popularTags.map((tag, i) => (
                <button
                  key={i}
                  className="px-3 py-1 text-sm border border-gray-300 rounded-sm hover:text-primary transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </WidgetSection>

          {/* Reset All Filters */}
          <button
            className="mt-4 w-full py-2 text-sm bg-primary text-white rounded-sm transition-colors"
            onClick={handleResetFilters}
          >
            Reset All Filters
          </button>
        </div>
      </div>

      {/* Overlay for Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default FilterWidget;

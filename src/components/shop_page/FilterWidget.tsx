import { useState } from "react";
import { GoPlus, GoDash } from "react-icons/go"; // GoDash for the toggle icon
import PriceRangeSlider from "./PriceRangeSlider";
import CustomDropdown from "../fields/CustomDropdown";
import niche_categories from "../../statics/niche_categories";
import { useTranslation } from "react-i18next";

interface WidgetSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const WidgetSection: React.FC<WidgetSectionProps> = ({ title = "", className = "", children }) => (
  <div className={`${className} group relative w-full`}>
    <h2 className="w-fit relative uppercase text-lg sm:text-xl tracking-wider font-semibold pb-0.5 mb-2.5">
      {title}
      <span className="absolute bottom-0 left-0 h-0.5 w-2/5 bg-primary group-hover:w-3/4 transition-all duration-300" />
    </h2>
    {children}
  </div>
);

const FilterWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle state
  const [rangeValues, setRangeValues] = useState({ min: 10, max: 100 });
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { t } = useTranslation();

  console.log(rangeValues);

  const handleRangeChange = (values: { min: number; max: number }) => {
    setRangeValues(values);
  };

  const brands = ["Nike", "Adidas", "Puma", "Reebok", "Under Armour"];
  const popularTags = ["New", "Discount", "Sale", "Exclusive", "Limited Edition"];

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
  };

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className="w-full max-w-full md:max-w-md lg:max-w-xs pr-0 md:pr-3.5 border-r-0 md:border-r mb-10">
      {/* Toggle Button for Small Screens */}
      <button
        onClick={toggleOpen}
        className="md:hidden flex items-center justify-between w-full px-3.5 py-1.5 mb-3.5 bg-gray-200 text-lg font-semibold transition-all duration-300"
      >
        {t("filter.filter_options")}
        {isOpen ? <GoDash className="text-primary" /> : <GoPlus className="text-primary" />}
      </button>

      {/* Filter Content */}
      <div
        className={`${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } space-y-4 overflow-hidden md:opacity-100 md:max-h-full transition-all duration-500 ease-in-out`}
      >
        {/* Category Section with Custom Dropdown */}
        <WidgetSection title={t("filter.shop_by_price")}>
          <PriceRangeSlider
            min={0}
            max={200}
            onChange={handleRangeChange}
            currencyText="$"
            width="100%"
          />
        </WidgetSection>

        <WidgetSection title={t("filter.category")}>
          <CustomDropdown
            className=""
            options={niche_categories.map((category) => t(category.name))}
            onSelect={handleCategorySelect}
            placeholder={selectedCategory || t("filter.select_category")}
          />
        </WidgetSection>

        {/* Brand Section */}
        <WidgetSection title={t("filter.brand")}>
          <div className="text-sm space-y-1 transition-all duration-300">
            {brands.map((brand, i) => (
              <div
                key={i}
                className={`group/brand flex items-center justify-between py-0.5 hover:text-primary transition-all duration-300 ${i !== brands?.length - 1 ? "border-b" : ""}`}
              >
                <span className="tracking-wide">{brand}</span>
                <GoPlus className="text-xs group-hover/brand:rotate-180 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </WidgetSection>

        {/* Popular Tags Section */}
        <WidgetSection title={t("filter.popular_tags")}>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {popularTags.map((tag, i) => (
              <button
                key={i}
                className="group/tag px-3 py-1 text-sm tracking-wide border border-gray-300 rounded-sm hover:text-primary transition-colors duration-300"
              >
                {tag}
              </button>
            ))}
          </div>
        </WidgetSection>
      </div>
    </div>
  );
};

export default FilterWidget;

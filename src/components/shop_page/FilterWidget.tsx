import { GoPlus } from "react-icons/go";
import niche_categories from "../../statics/niche_categories";
import { useState } from "react";
import PriceRangeSlider from "./PriceRangeSlider";
import CustomDropdown from "../fields/CustomDropdown";

interface WidgetSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const WidgetSection: React.FC<WidgetSectionProps> = ({ title = "", className = "", children }) => (
  <div className={`${className} group relative w-full`}>
    <h2 className="w-fit relative uppercase text-xl tracking-widest font-semibold space-y-2.5">
      {title}
      <span className="absolute bottom-0 left-0 h-0.5 w-2/5 bg-primary" />
    </h2>
    {children}
  </div>
);

const FilterWidget: React.FC = () => {
  const [rangeValues, setRangeValues] = useState({ min: 10, max: 100 });
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // State for selected category

  const handleRangeChange = (values: { min: number; max: number }) => {
    setRangeValues(values);
  };

  // Example static brand data (replace this with your own data source)
  const brands = ["Nike", "Adidas", "Puma", "Reebok", "Under Armour"];

  // Example static popular tags data (replace this with your own data source)
  const popularTags = ["New", "Discount", "Sale", "Exclusive", "Limited Edition"];

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="max-w-64 space-y-3.5 mb-10">
      {/* Category Section with Custom Dropdown */}
      <WidgetSection title="Category">
        <CustomDropdown
          className="mt-3.5"
          options={niche_categories.map((category) => category.name)} // Use category names as options
          onSelect={handleCategorySelect} // Update selected category on selection
          placeholder={selectedCategory || "Select a category"} // Display selected category or placeholder
        />
      </WidgetSection>

      {/* Brand Section */}
      <WidgetSection title="Brand">
        <div className="text-sm mt-1.5 space-y-0.5 divide-y transition-all duration-300">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="group/brand w-full flex items-center justify-between py-1.5 hover:text-primary transition-all"
            >
              <span className="tracking-wider transition-all">{brand}</span>
              <GoPlus className="text-xs group-hover/brand:rotate-180 transition-all duration-300" />
            </div>
          ))}
        </div>
      </WidgetSection>

      {/* Shop By Price Section */}
      <WidgetSection title="Shop By Price" className="pb-2.5">
        <PriceRangeSlider
          min={0}
          max={200}
          onChange={handleRangeChange}
          currencyText="$"
          width="100%"
        />
      </WidgetSection>

      {/* Popular Tags Section */}
      <WidgetSection title="Popular Tags">
        <div className="mt-3.5 flex items-center flex-wrap gap-1.5 text-sm space-y-0.5 transition-all duration-300">
          {popularTags.map((tag, i) => (
            <button
              key={i}
              className="group/tag px-3.5 py-0.5 border hover:text-primary transition-all"
            >
              <span className="tracking-wider transition-all">{tag}</span>
            </button>
          ))}
        </div>
      </WidgetSection>
    </div>
  );
};

export default FilterWidget;

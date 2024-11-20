import { FaChevronDown } from "react-icons/fa";
import { IoList } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import niche_categories from "../../statics/niche_categories";

const CategoryBox = () => {
    const { t } = useTranslation(); 

    return (
        <div className="relative group">
            {/* Dropdown Toggle */}
            <button
                className="min-w-full bg-zinc-800 py-3 md:py-2.5 px-3.5 flex items-center gap-x-2.5 text-sm md:text-base text-nowrap uppercase"
                aria-label={t("all_departments")}
            >
                <IoList size={27.5} />
                {t("all_departments")}
                <FaChevronDown className="ml-3.5 group-hover:rotate-180 transition-transform duration-300" />
            </button>

            {/* Dropdown Menu */}
            <div
                className="absolute w-full bg-secondary flex flex-col rounded-sm scale-y-0 opacity-0 
                    group-hover:opacity-100 group-hover:scale-y-100 origin-top transition-transform duration-300"
                role="menu"
            >
                {niche_categories?.map((niche_category, i) => (
                    <button
                        key={i}
                        className="w-full text-sm tracking-wider text-left px-5 py-2 hover:bg-zinc-800 
                            hover:text-primary transition-colors duration-300"
                        aria-label={t(niche_category.name)}
                    >
                        {t(niche_category.name)}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryBox;

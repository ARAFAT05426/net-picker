import { FaChevronDown } from "react-icons/fa";
import { IoList } from "react-icons/io5";
import { useTranslation } from "react-i18next"; // Import useTranslation
import niche_categories from "../../statics/niche_categories";

const CategoryBox = () => {
    const { t } = useTranslation(); // Initialize the translation function

    return (
        <div className="relative group">
            <button className="min-w-full bg-zinc-800 py-3 md:py-2.5 px-3.5 flex items-center gap-x-2.5 text-sm md:text-base text-nowrap uppercase">
                <IoList size={27.5} />
                {t('all_departments')} {/* Translate 'All Departments' */}
                <FaChevronDown className="ml-3.5 group-hover:rotate-180 transition-all duration-300" />
            </button>
            <div className="absolute w-full bg-secondary flex flex-col rounded-sm scale-y-0 opacity-0 group-hover:opacity-100 group-hover:scale-y-100 origin-top transition-all duration-300">
                {niche_categories?.map((niche_categorie, i) => (
                    <button
                        key={i}
                        className="w-full text-sm tracking-wider text-left px-5 py-2 hover:bg-zinc-800 hover:text-primary transition-all duration-300"
                    >
                        {t(niche_categorie.name)} {/* Translate category name */}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryBox;

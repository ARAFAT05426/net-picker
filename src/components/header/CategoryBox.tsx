import { FaChevronDown } from "react-icons/fa";
import niche_categories from "../../statics/niche_categories";
import { IoList } from "react-icons/io5";

const CategoryBox = () => {
    return (<div className="relative group">
        <div className="min-w-full py-3 md:py-2.5 pr-5 flex items-center gap-x-2.5 text-sm md:text-base text-nowrap uppercase">
            <IoList size={27.5} />
            All Departments
            <FaChevronDown className="ml-2.5 group-hover:rotate-180 transition-all duration-300" />
        </div>
        <div className="absolute w-full bg-secondary flex flex-col rounded-sm scale-y-0 opacity-0 group-hover:opacity-100 group-hover:scale-y-100 origin-top transition-all duration-300">
            {
                niche_categories?.map((niche_categorie, i) => <button key={i} className="w-full text-sm text-left px-5 py-2 hover:bg-black/75 hover:text-primary transition-all duration-300">{niche_categorie.name}</button>)
            }
        </div>
    </div>);
}
export default CategoryBox;
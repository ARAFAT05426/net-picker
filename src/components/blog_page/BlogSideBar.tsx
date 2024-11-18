import WidgetSection from "../common/WidgetSection";
import { CiSearch } from "react-icons/ci";
const BlogSideBar = () => {
    const categories = [
        { name: "Technology", count: 8 },
        { name: "Health", count: 5 },
        { name: "Business", count: 12 },
        { name: "Lifestyle", count: 7 },
    ];

    const popularTags = ["React", "JavaScript", "Web Development", "Node.js", "CSS", "Frontend"];

    return (
        <div className="space-y-5">
            {/* Search Section */}
            <WidgetSection title="Search">
                <div className="h-11 w-full flex rounded-sm overflow-hidden">
                    <input
                        className="w-full px-4 py-2 border outline-none text-sm"
                        type="text"
                        placeholder="Search..."
                        name="search"
                    />
                    <button className="px-3.5 text-lg bg-primary text-white border-none">
                        <CiSearch />
                    </button>
                </div>
            </WidgetSection>

            {/* Categories Section */}
            <WidgetSection title="Categories">
                <ul className="space-y-2">
                    {categories.map((category, index) => (
                        <li
                            key={index}
                            className="flex justify-between items-center text-sm text-gray-700 hover:text-primary cursor-pointer"
                        >
                            <span>{category.name}</span>
                            <span className="text-gray-500">{category.count}</span>
                        </li>
                    ))}
                </ul>
            </WidgetSection>

            {/* Popular Tags Section */}
            <WidgetSection title="Popular Tags">
                <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-xs bg-gray-200 rounded-sm hover:bg-primary hover:text-white cursor-pointer"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </WidgetSection>
        </div>
    );
};

export default BlogSideBar;

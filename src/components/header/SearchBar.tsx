import { BsSearch } from "react-icons/bs";
import { useState, useEffect } from "react";
import { FaArrowsSpin } from "react-icons/fa6";
import { useSearchParams } from "react-router-dom";

const SearchBar: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const initialSearch = searchParams.get("search") || "";
        setSearchTerm(initialSearch);
    }, [searchParams]);

    const handleSearch = () => {
        if (searchTerm) {
            setSearchParams({ search: searchTerm });
        } else {
            searchParams.delete("search");
            setSearchParams(searchParams);
        }
    };

    const handleClearSearch = () => {
        setSearchTerm("");
        searchParams.delete("search");
        setSearchParams(searchParams);
    };

    return (
        <div className="h-9 md:h-11 w-full max-w-full md:max-w-md flex items-center rounded-sm border border-collapse relative">
            {searchTerm && (
                <button
                    onClick={handleClearSearch}
                    className="h-9 md:h-11 px-3.5 py-2.5 bg-primary text-white"
                >
                    <FaArrowsSpin size={18} />
                </button>
            )}
            <input
                className="h-9 md:h-11 w-full pl-3.5 py-2 bg-transparent text-sm outline-none"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="What do you need?"
            />
            <button
                onClick={handleSearch}
                className="h-9 md:h-11 px-5 py-2.5 bg-primary text-white"
            >
                <BsSearch strokeWidth={1.25} />
            </button>
        </div>
    );
};

export default SearchBar;

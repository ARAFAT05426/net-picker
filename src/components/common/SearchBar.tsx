import { BsSearch } from "react-icons/bs";
import { FaArrowsSpin } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios_common from "../../utils/axios_common";
import BarLoader from "./BarLoader";

const fetchSearchSuggestions = async (query: string) => {
    if (!query) return [];
    const { data } = await axios_common.get("/products/search-suggestions", {
        params: { q: query },
    });
    return data;
};

interface SearchBarProps {
    className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState("");

    // Load initial search term from query params
    useEffect(() => {
        const initialSearch = searchParams.get("search") || "";
        setSearchTerm(initialSearch);
    }, [searchParams]);

    // Fetch suggestions based on the search term
    const { data: suggestions, isLoading } = useQuery({
        queryKey: ["searchSuggestions", searchTerm],
        queryFn: () => fetchSearchSuggestions(searchTerm)
    });

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
        <div className={`${className} relative w-full max-w-full md:max-w-md`}>
            <div className="h-9 md:h-11 w-full flex items-center rounded-sm border border-collapse relative">
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

            {/* Suggestion Dropdown */}
            {searchTerm && (
                <div className="absolute inset-x-0 top-full bg-white mt-1 z-10 rounded-sm">
                    {isLoading ? (
                        <div className="min-h-24 flex items-center justify-center"><BarLoader /></div>
                    ) : suggestions?.length ? (
                        suggestions.map((suggestion: any) => (
                            <div
                                key={suggestion.id}
                                className="p-2 text-sm cursor-pointer hover:bg-gray-100"
                                onClick={() => setSearchTerm(suggestion.name)}
                            >
                                {suggestion.name}
                            </div>
                        ))
                    ) : (
                        <div className="p-2 text-center text-sm opacity-75 border">No suggestions found</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchBar;

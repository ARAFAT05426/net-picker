// import type { FC } from 'react';
import { BsSearch } from "react-icons/bs";
// interface SearchBarProps {}

const SearchBar = () => {
    return (<div className="h-9 md:h-11 w-full max-w-full md:max-w-sm flex items-center rounded-sm border border-collapse">
        <input className="h-9 md:h-11 w-full pl-2.5 py-2 bg-transparent text-sm outline-none" type="text" name="search" placeholder="What do u need?" />
        <button className="h-9 md:h-11 px-5 py-2.5 bg-primary text-white"><BsSearch strokeWidth={1.25} /></button>
    </div>);
}
export default SearchBar;
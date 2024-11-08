import navigation_links from "../../statics/navigation_links";
import { NavLink } from "react-router-dom";
import ToggleBtn from "../btns/ToggleBtn";
import CategoryBox from "./CategoryBox";
import { useState } from "react";

const NavHeader = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className="bg-secondary text-white border-b border-b-accent">
            <div className="relative container mx-auto flex items-center justify-between">
                {/* Left-aligned category box */}
                <CategoryBox />

                {/* Center-aligned navigation links (shown on medium and larger screens) */}
                <div className="hidden md:flex items-center justify-center flex-grow">
                    {navigation_links?.map((navigation_link, i) => (
                        <NavLink
                            key={navigation_link?.title}
                            to={navigation_link?.href}
                            end
                            className={({ isActive }) =>
                                `w-full py-3.5 flex items-center justify-center uppercase font-semibold 
                                ${isActive ? "bg-primary" : "bg-transparent"} 
                                ${i !== navigation_links.length - 1 ? "border-r border-r-accent" : ""} 
                                hover:bg-primary transition-all duration-300`
                            }
                        >
                            {navigation_link?.title}
                        </NavLink>
                    ))}
                </div>

                {/* Toggle button for mobile menu */}
                <ToggleBtn isActive={isOpen} toggleActive={() => setOpen(!isOpen)} />

                {/* Mobile navigation menu (shown only when toggle is active on small screens) */}
                <div className={`absolute inset-x-0 top-12 bg-secondary md:hidden flex flex-col items-center ${isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"} z-10 origin-top transition-all duration-300`}>
                    {navigation_links?.map((navigation_link) => (
                        <NavLink
                            key={navigation_link?.title}
                            to={navigation_link?.href}
                            end
                            onClick={() => setOpen(false)} // Close menu when a link is clicked
                            className={({ isActive }) =>
                                `w-full py-3 flex items-center justify-center uppercase font-semibold 
                                ${isActive ? "bg-primary" : "bg-transparent"} 
                                hover:bg-primary transition-all duration-300`
                            }
                        >
                            {navigation_link?.title}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default NavHeader;

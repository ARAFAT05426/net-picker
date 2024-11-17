import { FC } from "react";
import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";

interface SidebarItemProps {
    icon: IconType;
    text: string;
    expanded: boolean;
    path: string;
}

const SidebarItem: FC<SidebarItemProps> = ({ icon: Icon, text, expanded, path }) => {
    return (
        <li className="relative">
            <NavLink
                end
                to={path}
                className={({ isActive }) =>
                    `relative flex items-center py-3 ${expanded ? "px-3.5" : "px-2.5"} my-1 rounded cursor-pointer transition-all group ${isActive
                        ? "bg-gradient-to-tr from-primary/50 to-primary/25 text-black font-bold"
                        : "hover:bg-primary/10 text-black"
                    }`
                }
            >
                <Icon size={22.5} />
                <span
                    className={`overflow-hidden tracking-[0.25em] transition-all duration-300 ${expanded ? "w-56 ml-2.5 text-sm" : "text-[0px] w-0"
                        }`}
                >
                    {text}
                </span>
            </NavLink>
        </li>
    );
};

export default SidebarItem;

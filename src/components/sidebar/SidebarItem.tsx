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
                to={path}
                className={({ isActive }) =>
                    `relative flex items-center py-3 ${expanded ? "px-3.5": "px-2.5"} my-1 rounded cursor-pointer transition-all group ${isActive
                        ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 font-semibold"
                        : "hover:bg-indigo-50 text-gray-600"
                    }`
                }
            >
                <Icon size={22.5} />
                <span
                    className={`overflow-hidden text-sm tracking-widest transition-all duration-300 ${expanded ? "w-56 ml-2.5" : "w-0"
                        }`}
                >
                    {text}
                </span>
            </NavLink>
        </li>
    );
};

export default SidebarItem;

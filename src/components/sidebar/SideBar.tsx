import { LuChevronFirst, LuChevronLast } from "react-icons/lu";
import { useState, ReactNode, FC } from "react";
import { FiMoreVertical } from "react-icons/fi";

interface SidebarProps {
    children: (expanded: boolean) => ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
    const [expanded, setExpanded] = useState<boolean>(true);

    return (
        <aside
            className={`fixed top-0 left-0 transition-all duration-500 ${expanded ? "w-72" : "w-16"
                } h-full bg-white border-r shadow-sm md:w-72 sm:w-16`}
        >
            <nav className="flex flex-col h-full">
                <div className="p-4 flex justify-between items-center">
                    {/* Sidebar Toggle Button */}
                    <button
                        onClick={() => setExpanded((curr) => !curr)}
                        className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 lg:hidden"
                    >
                        {expanded ? <LuChevronFirst /> : <LuChevronLast />}
                    </button>
                </div>

                <ul className="flex-1 px-3.5 space-y-2.5 overflow-hidden">{children(expanded)}</ul>

                <div className="border-t flex p-3 items-center">
                    <img src="" alt="Profile" className="w-10 h-10 rounded-md" />
                    <div
                        className={`flex items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"
                            }`}
                    >
                        <div className="leading-2">
                            <h4 className="font-semibold">constGenius</h4>
                            <span className="text-xs text-gray-600">constgenius@gmail.com</span>
                        </div>
                        <FiMoreVertical size={20} />
                    </div>
                </div>
            </nav>
        </aside>
    );
};

export default Sidebar;

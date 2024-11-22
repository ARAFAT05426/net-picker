import { FC } from "react";
import { BsShop } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import * as React from "react";

interface PageTitleProps {
    title?: string;
    children?: React.ReactNode;
}

const PageTitle: FC<PageTitleProps> = ({ children, title }) => {
    return (
        <div className="container py-2.5">
            <div className="flex items-center justify-between py-3.5">
                {/* Breadcrumb Section */}
                <div className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                    <div className="flex items-center space-x-2">
                        <BsShop size={20} className="-mt-1.5 opacity-75" />
                        <Link
                            to="/"
                            className="hover:underline text-gray-700 transition-all duration-200"
                            aria-label="Go to homepage"
                        >
                            Home
                        </Link>
                    </div>
                    <div className="flex items-center opacity-75">
                        <MdKeyboardArrowRight size={18} className="opacity-75" />
                        <span className="ml-1 text-gray-600 font-normal">{title}</span>
                    </div>
                </div>

                {/* Custom content (children) */}
                {children && <div className="flex items-center">{children}</div>}
            </div>

            {/* Separator Line */}
            <hr className="border-t border-gray-200" />
        </div>
    );
};

export default PageTitle;

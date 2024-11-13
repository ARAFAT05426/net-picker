import { FC } from "react";
import { BsShop } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

interface PageTitleProps {
    title?: string;
}

const PageTitle: FC<PageTitleProps> = ({ title }) => {
    return (
        <div className="container py-3.5">
            <div className="flex items-center space-x-0.5 font-semibold uppercase text-sm py-3.5">
                <div className="flex items-center space-x-1.5">
                    <BsShop className="-mt-1" size={20} />
                    <Link to="/" className="tracking-widest hover:underline transition-all duration-200">
                        Home
                    </Link>
                </div>
                <div className="flex items-center opacity-65">
                    <MdKeyboardArrowRight className="" size={17.5} />
                    <span className="ml-0.5 tracking-widest font-normal">{title}</span>
                </div>
            </div>
            <hr className="" />
        </div>
    );
};

export default PageTitle;

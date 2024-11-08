import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { LiaFlagUsaSolid } from "react-icons/lia";
import social_links from "../../statics/social_links";

interface TopHeaderProps {
    isScrolled: number
}

const TopHeader = ({ isScrolled }: TopHeaderProps) => {
    return (
        <div className={`border-b border-b-accent/25 ${isScrolled > 50 ? "h-0" : "h-10"} overflow-hidden transition-all duration-300`}>
            <div className="container flex items-center justify-between text-sm md:text-sm">
                <span className="hidden md:block">
                    Welcome <b className="underline">guest</b> to Net Picker
                </span>

                <div className="flex items-center gap-x-2.5 ml-auto">
                    <div className="hidden md:flex items-center gap-x-1.5 py-2.5 pr-1.5 border-r">
                        {social_links?.map((social_link, i) => (
                            <Link key={i} to={social_link?.path}>
                                <social_link.icon size={15} />
                            </Link>
                        ))}
                    </div>
                    <div className="pr-1.5 border-r">
                        <select className="outline-none py-2.5 pr-1.5" name="lang" id="">
                            <option value="eng">
                                <LiaFlagUsaSolid /> English
                            </option>
                            <option value="fr">France</option>
                        </select>
                    </div>

                    <Link className="pl-1.5 flex items-center gap-x-1.5" to={'/sign_up'}>
                        <FaUserAlt />
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
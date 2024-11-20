import { IconType } from "react-icons";
import { FaHome, FaShoppingBag, FaBoxOpen, FaBlog, FaPhoneAlt } from "react-icons/fa";

interface NavigationLinksProps {
    title: string;
    href: string;
    icon: IconType;
}

const navigation_links: NavigationLinksProps[] = [
    {
        title: "nav.home",
        href: "/",
        icon: FaHome,
    },
    {
        title: "nav.shop",
        href: "/shop",
        icon: FaShoppingBag,
    },
    {
        title: "nav.collection",
        href: "/about-us",
        icon: FaBoxOpen,
    },
    {
        title: "nav.blog",
        href: "/blogs",
        icon: FaBlog,
    },
    {
        title: "nav.contact",
        href: "/contact",
        icon: FaPhoneAlt,
    }
];

export default navigation_links;

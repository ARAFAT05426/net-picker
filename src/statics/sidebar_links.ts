import { MdOutlineDashboard, MdOutlineLocalOffer } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import { TbReportAnalytics } from "react-icons/tb";
import { FaUsersLine } from "react-icons/fa6";
import { GrArticle } from "react-icons/gr";
import { IconType } from 'react-icons';
import { FaUsersCog } from 'react-icons/fa';
interface sidebar_linksProps {
    label: string;
    icon: IconType;
    path: string;
}

const sidebar_links: sidebar_linksProps[] = [
    {
        label: "Dashboard", icon: MdOutlineDashboard, path: "/dashboard"
    },
    {
        label: "Blogs", icon: GrArticle, path: "/admin/content/blog"
    },
    {
        label: "Promotions", icon: MdOutlineLocalOffer, path: "/admin/content/promotions"
    },
    {
        label: "Users", icon: FaUsersLine, path: "/admin/users"
    },
    {
        label: "Roles", icon: FaUsersCog, path: "/admin/users/roles-permissions"
    },
    {
        label: "Reports", icon: TbReportAnalytics, path: "/admin/users/roles-permissions"
    },
    {
        label: "Settings", icon: FiSettings, path: "/admin/users/roles-permissions"
    }
];

export default sidebar_links;

import { MdOutlineDashboard, MdOutlineLocalOffer } from 'react-icons/md';
import { TbReportAnalytics } from "react-icons/tb";
import { FaUsersLine } from "react-icons/fa6";
import { FaUsersCog } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { TfiWrite } from 'react-icons/tfi';
import { IconType } from 'react-icons';
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
        label: "Create Blogs", icon: TfiWrite, path: "/dashboard/create-blog"
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

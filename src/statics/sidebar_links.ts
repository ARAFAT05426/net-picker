import { MdOutlineDashboard } from 'react-icons/md';
import { LiaClipboardListSolid } from "react-icons/lia";
import { TfiWrite } from 'react-icons/tfi';
import { IconType } from 'react-icons';
import { BsTags } from 'react-icons/bs';
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
        label: "Mannage Blogs", icon: LiaClipboardListSolid, path: "/dashboard/mannage-blog"
    },
    {
        label: "Promotions", icon: BsTags, path: "/dashboard/promotions"
    }
];

export default sidebar_links;

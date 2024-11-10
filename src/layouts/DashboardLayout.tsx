import { Outlet } from "react-router-dom";
import SidebarItem from "../components/sidebar/SidebarItem";
import sidebar_links from "../statics/sidebar_links";
import Sidebar from "../components/sidebar/SideBar";

const DashboardLayout = () => {
    return (
        <div className="flex">
            <Sidebar>
                {(expanded) => (
                    <>
                        {sidebar_links?.map((link, index) => (
                            <SidebarItem
                                key={index}
                                icon={link.icon}
                                text={link.label}
                                expanded={expanded}
                                path={link.path}
                            />
                        ))}
                    </>
                )}
            </Sidebar>
            <div className="flex-1 ml-16 md:ml-64 transition-all duration-500">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;

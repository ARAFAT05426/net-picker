import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/SideBar";
import sidebar_links from "../statics/sidebar_links";
import SidebarItem from "../components/sidebar/SidebarItem";

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
            <div className="w-screen flex-1 mx-2.5 ml-16 md:ml-[19rem] mt-3.5 transition-all duration-500">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;

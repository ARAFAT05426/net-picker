import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import DashboardLayout from "../layouts/DashboardLayout";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />
    },
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "login",
        element: <LogIn />
    }
])

export default routes;
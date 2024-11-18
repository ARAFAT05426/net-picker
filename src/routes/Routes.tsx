import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

// Layouts
import AppLayout from "../layouts/AppLayout";
import ResetPassword from "../pages/ResetPassword";
import DashboardLayout from "../layouts/DashboardLayout";
import Shop from "../pages/Shop";
import CreateBlog from "../pages/CreateBlog";
import ManageBlogs from "../pages/ManageBlogs";
import UpdateBlog from "../pages/UpdateBlog";
import Collection from "../pages/Collection";
import BlogDetails from "../pages/BlogDetails";
import Blogs from "../pages/Blogs";
import BarLoader from "../components/common/BarLoader";

// Pages with Lazy Loading
const Home = lazy(() => import("../pages/Home"));
const LogIn = lazy(() => import("../pages/LogIn"));
const SignUp = lazy(() => import("../pages/SignUp"));
const Contact = lazy(() => import("../pages/Contact"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));

// Fallback loading component
const Loading = () => <div className="min-h-[75vh] flex items-center justify-center"><BarLoader /></div>;

const routes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: (
                    <Suspense fallback={<Loading />}>
                        <Home />
                    </Suspense>
                ),
            },
            {
                path: "/shop",
                element: (
                    <Suspense fallback={<Loading />}>
                        <Shop />
                    </Suspense>
                ),
            },
            {
                path: "/collection",
                element: (
                    <Suspense fallback={<Loading />}>
                        <Collection />
                    </Suspense>
                ),
            },
            {
                path: "/blogs",
                element: (
                    <Suspense fallback={<Loading />}>
                        <Blogs />
                    </Suspense>
                ),
            },
            {
                path: "/blog/:id",
                element: (
                    <Suspense fallback={<Loading />}>
                        <BlogDetails />
                    </Suspense>
                ),
            },
            {
                path: "/contact",
                element: (
                    <Suspense fallback={<Loading />}>
                        <Contact />
                    </Suspense>
                ),
            },
        ],
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: 'create-blog',
                element: (<Suspense fallback={<Loading />}>
                    <CreateBlog />
                </Suspense>)
            },
            {
                path: 'mannage-blog',
                element: (<Suspense fallback={<Loading />}>
                    <ManageBlogs />
                </Suspense>)
            },
            {
                path: 'update-blog/:id',
                element: (<Suspense fallback={<Loading />}>
                    <UpdateBlog />
                </Suspense>)
            },
        ]
    },
    {
        path: "signup",
        element: (
            <Suspense fallback={<Loading />}>
                <SignUp />
            </Suspense>
        ),
    },
    {
        path: "login",
        element: (
            <Suspense fallback={<Loading />}>
                <LogIn />
            </Suspense>
        ),
    },
    {
        path: "forgot-password",
        element: (
            <Suspense fallback={<Loading />}>
                <ForgotPassword />
            </Suspense>
        ),
    },
    {
        path: "password-reset/:token",
        element: (
            <Suspense fallback={<Loading />}>
                <ResetPassword />
            </Suspense>
        ),
    }
]);

export default routes;

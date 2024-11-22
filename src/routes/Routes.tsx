import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

// Layouts
import DashboardLayout from "../layouts/DashboardLayout";
import BarLoader from "../components/common/BarLoader";
import ResetPassword from "../pages/ResetPassword";
import ManageBlogs from "../pages/ManageBlogs";
import BlogDetails from "../pages/BlogDetails";
import CreateBlog from "../pages/CreateBlog";
import UpdateBlog from "../pages/UpdateBlog";
import AppLayout from "../layouts/AppLayout";
import AboutUs from "../pages/AboutUs";
import Blogs from "../pages/Blogs";
import Shop from "../pages/Shop";
import Terms_Conditions from "../pages/Terms_Conditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import ProductDetails from "../pages/ProductDetails";
import AdminPanel from "../pages/AdminPanel";

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
                path: "/shop/:id",
                element: (
                    <Suspense fallback={<Loading />}>
                        <ProductDetails />
                    </Suspense>
                ),
            },
            {
                path: "/about-us",
                element: (
                    <Suspense fallback={<Loading />}>
                        <AboutUs />
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
            {
                path: "/privacy-policy",
                element: (
                    <Suspense fallback={<Loading />}>
                        <PrivacyPolicy />
                    </Suspense>
                ),
            },
            {
                path: "/terms&conditions",
                element: (
                    <Suspense fallback={<Loading />}>
                        <Terms_Conditions />
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
                index: true,
                element: <Suspense>
                    <AdminPanel />
                </Suspense>
            },
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

import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

// Layouts
import AppLayout from "../layouts/AppLayout";
import ResetPassword from "../pages/ResetPassword";
import DashboardLayout from "../layouts/DashboardLayout";

// Pages with Lazy Loading
const Home = lazy(() => import("../pages/Home"));
const Blog = lazy(() => import("../pages/Blog"));
const LogIn = lazy(() => import("../pages/LogIn"));
const SignUp = lazy(() => import("../pages/SignUp"));
const Contact = lazy(() => import("../pages/Contact"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));

// Fallback loading component
const Loading = () => <div>Loading...</div>;

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
                path: "/blog",
                element: (
                    <Suspense fallback={<Loading />}>
                        <Blog />
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

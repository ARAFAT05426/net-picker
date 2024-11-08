import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Home from "../pages/Home";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
])

export default routes;
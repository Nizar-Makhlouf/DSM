import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import Welcome from "./pages/public/Welcome";
import Login from "./pages/public/Login";
import Contact from "./pages/public/Contact";
import PrivateLayout from "./layouts/PrivateLayout";
import Home from "./pages/private/Home";

export const route = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout />,
        children: [
            {
                index: true,
                element: <Welcome />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ],
    },
    {
        path: "/private",
        element: <PrivateLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
]);

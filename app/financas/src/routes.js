import { useRoutes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

export default function Router(){

    const routes = useRoutes([
        {
            path: '/',
            element: <Home />,
            children: [
                { element: <Navigate to="/" />},
            ]
        },
        {
            path: '/login',
            element: <Login />,
            children: [
                { element: <Navigate to="/login" />, index: true},
            ]
        }
    ]);

    return routes;
}
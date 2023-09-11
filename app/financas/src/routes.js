import { useRoutes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Lancamentos from "./pages/lancamentos";
import Extrato from "./pages/extrato";
import Detalhes from "./pages/detalhes";
import Categorias from "./pages/categorias";
import QRCode from "./pages/qrcode";

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
        },
        {
            path: '/lancamentos',
            element: <Lancamentos />,
            children: [
                { element: <Navigate to="/lancamentos" />, index: true},
            ]
        },
        {
            path: '/extrato',
            element: <Extrato />,
            children: [
                { element: <Navigate to="/extrato" />, index: true},
            ]
        },
        {
            path: '/detalhes',
            element: <Detalhes />,
            children: [
                { element: <Navigate to="/detalhes" />, index: true},
            ]
        },
        {
            path: '/categorias',
            element: <Categorias />,
            children: [
                { element: <Navigate to="/categorias" />, index: true},
            ]
        },
        {
            path: '/qrcode',
            element: <QRCode />,
            children: [
                { element: <Navigate to="/qrcode" />, index: true},
            ]
        },
    ]);

    return routes;
}
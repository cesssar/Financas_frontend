import { useRoutes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Lancamentos from "./pages/lancamentos";
import Extrato from "./pages/extrato";
import Detalhes from "./pages/detalhes";
import Categorias from "./pages/categorias";
import QRCode from "./pages/qrcode";
import Contas from "./pages/contas";
import ContaDetalhes from "./pages/contadetalhes";
import Cartoes from "./pages/cartoes";
import CartaoDetalhes from "./pages/cartaodetalhes";

export default function Router(){

    const routes = useRoutes([
        {
            path: '/home',
            element: <Home />,
            children: [
                { element: <Navigate to="/home" />},
            ]
        },
        {
            path: '/',
            element: <Login />,
            children: [
                { element: <Navigate to="/" />, index: true},
            ]
        },
        {
            path: '/lancamentos',
            element: <Lancamentos />,
            children: [
                { element: <Navigate to="/lancamentos" /> },
            ]
        },
        {
            path: '/extrato',
            element: <Extrato />,
            children: [
                { element: <Navigate to="/extrato" /> },
            ]
        },
        {
            path: '/detalhes',
            element: <Detalhes />,
            children: [
                { element: <Navigate to="/detalhes" /> },
            ]
        },
        {
            path: '/categorias',
            element: <Categorias />,
            children: [
                { element: <Navigate to="/categorias" /> },
            ]
        },
        {
            path: '/qrcode',
            element: <QRCode />,
            children: [
                { element: <Navigate to="/qrcode" /> },
            ]
        },
        {
            path: '/contas',
            element: <Contas />,
            children: [
                { element: <Navigate to="/contas" /> },
            ]
        },
        {
            path: '/contadetalhes',
            element: <ContaDetalhes />,
            children: [
                { element: <Navigate to="/contadetalhes" /> },
            ]
        },
        {
            path: '/cartoes',
            element: <Cartoes />,
            children: [
                { element: <Navigate to="/cartoes" /> },
            ]
        },
        {
            path: '/cartaodetalhes',
            element: <CartaoDetalhes />,
            children: [
                { element: <Navigate to="/cartaodetalhes" /> },
            ]
        },
    ]);

    return routes;
}
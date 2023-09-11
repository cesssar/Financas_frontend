import React, { useEffect } from "react";

import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import CardCategorias from "../components/cardcategorias";
import CardAddCategoria from "../components/cardaddcategoria";

export default function Categorias(){

    useEffect(() => {
        const token = localStorage.getItem('token');
        const expires = localStorage.getItem('expires');
        const now = Date();
        if(!token || expires < now || !expires){
            if (!token || !expires) {
                localStorage.setItem('messageLogin', 'Faça o login para continuar');
            }else if(expires < now){
                localStorage.setItem('messageLogin', 'Sua sessão expirou');
            }
            window.location.href = '/login';
        } 
    },[]);

    return(
        <div className="container-scroller">
            <Navbar />
            <div className="container-fluid page-body-wrapper pt-0 proBanner-padding-top">
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper">
                        <CardCategorias />
                        <CardAddCategoria />
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
}
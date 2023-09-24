import React, { useEffect } from "react";

import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";
import CardCartoes from "./cardcartoes";
import CardAddCartao from './cardaddcartao';
import Theme from "../../theme";
import ValidaLogin from "../validalogin";

export default function Cartoes(){
   

    useEffect(() => {
        Theme();
        ValidaLogin();
    },[]);

    return(
        <div className="container-scroller">
            <Navbar />
            <div className="container-fluid page-body-wrapper pt-0 proBanner-padding-top">
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper">
                        <CardCartoes />
                        <CardAddCartao />
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
}
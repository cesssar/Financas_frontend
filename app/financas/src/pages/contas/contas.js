import React, { useEffect } from "react";

import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";
import CardContas from "./cardcontas";
import CardAddConta from './cardaddconta';
import Theme from "../../theme";
import ValidaLogin from "../validalogin";

export default function Contas(){
    
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
                        <CardContas />
                        <CardAddConta />
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
}
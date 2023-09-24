import React, { useEffect } from "react";

import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";
import CardLancamento from "./cardlancamento";
import Theme from "../../theme";
import ValidaLogin from "../validalogin";

// services
import RequestGet from "../../services/requestget";

export default function Lancamentos(){

    useEffect(() => {
        Theme();
        ValidaLogin();
    },[]);

    const teste = <RequestGet endpoint = '/cadastros/cartaocredito' />;
    console.log(teste);

    return(
        <div className="container-scroller">
            <Navbar />
            <div className="container-fluid page-body-wrapper pt-0 proBanner-padding-top">
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper">                     
                        <CardLancamento />
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
}
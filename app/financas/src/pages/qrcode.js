import React, { useEffect } from 'react';
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import CardQRCode from "./lancamentos/cardqrcode";
import Theme from "../theme";
import ValidaLogin from "./validalogin";

export default function QRCode(){

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
                        <CardQRCode />
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
}
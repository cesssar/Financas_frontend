import React from "react";

import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import CardQRCode from "../components/cardqrcode";

export default function QRCode(){
    
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
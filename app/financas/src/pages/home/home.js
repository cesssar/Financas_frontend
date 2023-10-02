import React, { useEffect, useState } from "react";

import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";
import Card from "../../components/card";
import Theme from "../../theme";
import ValidaLogin from "../validalogin";
import CardGrafico from "./cardgrafico";
import CardGraficoPie from "./cardgraficopie";
import CardBotoes from "../../components/cardbotoes";

// services
import RequestGet from "../../services/requestget";

export default function Home(){
    const [saldo, setSaldo] = useState(0);
    const [fatura, setFatura] = useState(0);
    const [limitecredito, setLimitecredito] = useState(0); 
    const [limitealimentacao, setLimitealimentacao] = useState(0);

    useEffect(() => {
        Theme();
        ValidaLogin();
        setSaldo(<RequestGet endpoint='/saldo/contas' />);
        setFatura(<RequestGet endpoint='/fatura/cartaocredito' />);
        setLimitecredito(<RequestGet endpoint = '/limite/cartaocredito?tipo=1' />);
        setLimitealimentacao(<RequestGet endpoint = '/limite/cartaocredito?tipo=2' />);
    },[]);

    
    return(
        <div className="container-scroller">
            <Navbar />
            <div className="container-fluid page-body-wrapper pt-0 proBanner-padding-top">
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper">

                        <div className="row">
                            <CardBotoes />
                        </div>
                        <div className="row">
                            &nbsp;
                        </div>


                        <div className="row">
                            <Card 
                                title="Contas"
                                content={saldo}
                                icon="ti-money icon-md text-muted mb-0 mb-md-3 mb-xl-0"
                            />
                            <Card 
                                title="Cartões de Crédito"
                                content={fatura}
                                icon="ti-credit-card icon-md text-muted mb-0 mb-md-3 mb-xl-0"
                            />
                            <Card 
                                title="Limite Crédito"
                                content={limitecredito}
                                icon="ti-credit-card icon-md text-muted mb-0 mb-md-3 mb-xl-0"
                            />
                            <Card 
                                title="Limite Alimentação"
                                content={limitealimentacao}
                                icon="ti-id-badge icon-md text-muted mb-0 mb-md-3 mb-xl-0"
                            />
                            <CardGrafico />
                            <CardGraficoPie />
                            
                        </div>
                        
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
}
import React, { useEffect } from "react";

import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import Row from "../components/row";
import Card from "../components/card";

// services
import SaldoContas from "../services/saldocontas";
import FaturaCartao from "../services/faturacartao";
import LimiteCredito from "../services/limitecredito";

export default function Home(){

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

    const saldo = SaldoContas();
    const fatura = FaturaCartao();
    const limitecredito = <LimiteCredito tipo = 'c' />;
    const limitealimentacao = <LimiteCredito tipo = 'a' />;

    return(
        <div className="container-scroller">
            <Navbar />
            <div className="container-fluid page-body-wrapper pt-0 proBanner-padding-top">
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper">
                        <Row title="Resumo" />
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
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
}
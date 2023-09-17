import React, { useEffect, useState } from "react";

import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import Card from "../components/card";

// services
import RequestGet from "../services/requestget";

export default function Home(){
    const [saldo, setSaldo] = useState(0);
    const [fatura, setFatura] = useState(0);
    const [limitecredito, setLimitecredito] = useState(0); 
    const [limitealimentacao, setLimitealimentacao] = useState(0);

    async function valores(){
        setSaldo(<RequestGet endpoint='/saldo/contas' />);
        setFatura(<RequestGet endpoint='/fatura/cartaocredito' />);
        setLimitecredito(<RequestGet endpoint = '/limite/cartaocredito?tipo=c' />);
        setLimitealimentacao(<RequestGet endpoint = '/limite/cartaocredito?tipo=a' />);
    }

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
            // window.location.href = '/login';
        } 
        valores();
    },[]);

    
    
    return(
        <div className="container-scroller">
            <Navbar />
            <div className="container-fluid page-body-wrapper pt-0 proBanner-padding-top">
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper">

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
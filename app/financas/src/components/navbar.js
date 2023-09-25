import React from "react";

export default function Navbar() {

    const handleTema = () => {
        const tema = localStorage.getItem('tema');
        var sheet = window.document.styleSheets[0];
        if(tema !== 'html {filter: invert(80%) hue-rotate(180deg);}'){
            localStorage.setItem('tema', 'html {filter: invert(80%) hue-rotate(180deg);}');
            sheet.insertRule('html {filter: invert(80%) hue-rotate(180deg);}', sheet.cssRules.length);
        }else{
            localStorage.setItem('tema', 'html {filter: invert(0%) hue-rotate(0deg);}');
            sheet.insertRule('html {filter: invert(0%) hue-rotate(0deg);}', sheet.cssRules.length);
        }
    }

    return(
        <nav className="navbar col-lg-12 col-12 p-0 d-flex flex-row fixed-top">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
            <a className="navbar-brand brand-logo me-5" href="/home"><h2>Finanças</h2></a>
            <a className="navbar-brand brand-logo-mini" href="/home"><h3>$</h3></a>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
            <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item nav-profile dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" id="profileDropdown">
                <img src="images/porquinho.png" alt="profile" />
                </a>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                <a className="dropdown-item" href="/home">
                    <i className="ti-home text-primary" />
                    Home
                </a>
                <a className="dropdown-item" href="/lancamentos">
                    <i className="ti-pencil-alt text-primary" />
                    Lançamento
                </a>
                <a className="dropdown-item" href="/qrcode">
                    <i className="ti-camera text-primary" />
                    QRCode
                </a>
                <a className="dropdown-item" href="/extrato">
                    <i className="ti-ticket text-primary" />
                    Extrato
                </a>
                <a className="dropdown-item" href="/categorias">
                    <i className="ti-shopping-cart text-primary" />
                    Categorias
                </a>
                <a className="dropdown-item" href="/contas">
                    <i className="ti-wallet text-primary" />
                    Contas
                </a>
                <a className="dropdown-item" href="/cartoes">
                    <i className="ti-credit-card text-primary" />
                    Cartões
                </a>
                <a className="dropdown-item" href="#" onClick={handleTema}>
                    <i className="ti-paint-bucket text-primary" />
                    Alterar tema
                </a>
                <a className="dropdown-item" href="/">
                    <i className="ti-power-off text-primary" />
                    Sair
                </a>
                </div>
            </li>
            </ul>

        </div>
        </nav>
    );
}
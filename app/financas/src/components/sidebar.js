import React from "react";
import MenuSidebar from "./menusidebar";

export default function Sidebar() {
    return(
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
            <MenuSidebar 
                title="Home"
                link="/home"
                icon="ti-home menu-icon"
            />
            <MenuSidebar 
                title="Lançamento"
                link="/lancamentos"
                icon="ti-pencil-alt menu-icon"
            />
            <MenuSidebar 
                title="QRcode"
                link="/qrcode"
                icon="ti-camera menu-icon"
            />
            <MenuSidebar 
                title="Extrato"
                link="/extrato"
                icon="ti-ticket menu-icon"
            />
            <MenuSidebar 
                title="Categorias"
                link="/categorias"
                icon="ti-shopping-cart menu-icon"
            />
            <MenuSidebar 
                title="Contas"
                link="/contas"
                icon="ti-wallet menu-icon"
            />
            <MenuSidebar 
                title="Cartões"
                link="/cartoes"
                icon="ti-credit-card menu-icon"
            />
            <MenuSidebar 
                title="Sair"
                link="/"
                icon="ti-power-off menu-icon"
            />
        </ul>
        </nav>
    );
}
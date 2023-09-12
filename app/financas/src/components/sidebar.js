import React from "react";
import MenuSidebar from "./menusidebar";

export default function Sidebar() {
    return(
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
            <MenuSidebar 
                title="Home"
                link="/"
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
                title="Sair"
                link="/login"
                icon="ti-power-off menu-icon"
            />
        </ul>
        </nav>
    );
}
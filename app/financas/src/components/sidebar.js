import React from "react";
import MenuSidebar from "./menusidebar";

export default function Sidebar() {
    return(
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
            <MenuSidebar 
                title="Resumo"
                link="/"
                icon="ti-notepad menu-icon"
            />
            <MenuSidebar 
                title="Lançamento"
                link="/login"
                icon="ti-pencil-alt menu-icon"
            />
        </ul>
        </nav>
    );
}
import React from "react";

export default function Navbar() {
    const usuario = localStorage.getItem('username');

    return(
        <nav className="navbar col-lg-12 col-12 p-0 d-flex flex-row fixed-top">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
            <a className="navbar-brand brand-logo me-5" href="/"><h2>Finanças</h2></a>
            <a className="navbar-brand brand-logo-mini" href="/"><h3>$</h3></a>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
            <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item nav-profile dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" id="profileDropdown">
                <img src="images/porquinho.png" alt="profile" />
                </a>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                <a className="dropdown-item" href="/">
                    <i className="ti-settings text-primary" />
                    Home
                </a>
                <a className="dropdown-item" href="/login">
                    <i className="ti-power-off text-primary" />
                    Logout
                </a>
                </div>
            </li>
            </ul>

        </div>
        </nav>
    );
}
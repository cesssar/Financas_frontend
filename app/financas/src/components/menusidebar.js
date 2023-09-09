import React from "react";

export default function MenuSidebar({title, link, icon}) {
    return(
        <li className="nav-item">
            <a className="nav-link" href={link}>
                <i className={icon} />
                <span className="menu-title">{title}</span>
            </a>
        </li>
    );
}
import React from "react";

export default function Card({title, content, icon}){
    return(
        <div className="col-md-3 grid-margin stretch-card">
        <div className="card">
            <div className="card-body">
            <p className="card-title text-muted text-xl-left">{title}</p>
                <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                    <h6 className="text-muted">R$</h6><h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">{content}</h3>
                    <i className={icon} />
                </div>  
            </div>
        </div>
        </div>
    );
}
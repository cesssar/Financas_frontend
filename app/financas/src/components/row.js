import React from "react";

export default function Row({title}) {
    return(
        <div className="row">
        <div className="col-md-12 grid-margin">
            <div className="d-flex justify-content-between align-items-center">
            <div>
                <h4 className="font-weight-bold mb-0">{title}</h4>
            </div>
            </div>
        </div>
        </div>
    );
}
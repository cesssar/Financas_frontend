import React, { useState, useEffect, Component } from 'react';
import QrReader from 'modern-react-qr-reader'
import axios from 'axios';

export default class QrCode extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: 'Aguardando leitura...'
        }

        this.handleError = this.handleError.bind(this);
        this.handleScan = this.handleScan.bind(this);
    }

    handleScan = data => {
        if (data) {
        this.state.result = data;
            this.setState({result: data});
        }
    }
    
    handleError = err => {
        this.state.result = err.message;
    }
    render() {
        return(
            <div className="col-12 grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                <h4 className="card-title">Lançamento por QRCode</h4>
                <form className="forms-sample">
                    <div className="form-group">
                    <QrReader
                        delay={300}
                        facingMode={"environment"}
                        onError={this.handleError}
                        onScan={this.handleScan}
                        style={{ width: '100%' }}
                    />
                    </div>
                    <blockquote className="blockquote">
                        <p className=".text-secondary">{this.state.result}</p>
                    </blockquote>
                    <button type="button" className="btn btn-md btn-primary me-2">Enviar</button>
                </form>
                </div>
            </div>
            </div>
        );
    }
}
import React, { Component } from 'react';
import QrReader from 'modern-react-qr-reader'
import axios from 'axios';
import dayjs from 'dayjs';

import SelectCategoria from "../../components/selectcategoria";
import SelectConta from "../../components/selectconta";
import SelectCartao from "../../components/selectcartao";
import { DatePicker } from 'rsuite';
import './datepicker.css';

const ranges = [
    {
      label: 'Now',
      value: new Date()
    }
  ];

export default class QrCode extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: '',
            dataLancamento: new Date(),
            categoria: 0,
            conta: 0,
            cartao: 0
        }

        this.handleError = this.handleError.bind(this);
        this.handleScan = this.handleScan.bind(this);
    }

    handleCategoria = (e) => {
        this.setState({categoria: e.target.value});
    }

    handleConta = (e) => {
        this.setState({conta: e.target.value});
        this.setState({cartao: 0});
    }

    handleCartao = (e) => {
        this.setState({cartao: e.target.value});
        this.setState({conta: 0});
    }

    handleData = (e) => {
        this.setState({dataLancamento: e});
    }
    

    handleScan = data => {
        if (data) {
            this.setState({result: ''});
            this.setState({result: data});
        }
    }
    
    handleError = err => {
        this.setState({result: err.message});
    }

    handleLimpar = () => {
        window.location.reload();
    }

    handleEnviar = () => {
        var buttonEnviar = document.getElementById('enviar');
        var buttonLimpar = document.getElementById('limpar');
        buttonEnviar.disabled = true;
        buttonLimpar.disabled = true;

        if(this.state.result === '' || this.state.result === 'No video input devices found'){
            alert('Favor realizar a leitura de um QRCode.');
            return;
        }
        if(this.state.categoria === 0 || (this.state.conta === 0 && this.state.cartao === 0)){
            alert('Favor selecionar uma cateria e uma conta ou cartão.');
            return;
        }
        const baseUrl = process.env.REACT_APP_URL_API;
        const endpoint = '/cadastros/qrcode/';
        const data = JSON.stringify({
            link: this.state.result,
            data_lancamento: dayjs(this.state.dataLancamento).format('YYYY-MM-DD'),
            categoria: this.state.categoria,
            conta: this.state.conta,
            cartao: this.state.cartao
        })
        axios.post(baseUrl + endpoint, data,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`, 'accept': 'application/json'
            }
        })
        .then(response => {
            alert(response.data);
            if(response.data === 'Dados importados com sucesso'){
                window.location.href = '/extrato';
            }
        })
        .catch(function (error) {
            alert(error.message);
        });
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
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Aguardando leitura..." value={this.state.result} />
                    </div>
                    <div className="form-group">
                        <DatePicker
                            format="dd/MM/yyyy"
                            showMeridian
                            ranges={ranges}
                            style={{ width: 260 }}
                            onChange={(e) => this.handleData(e)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <SelectCategoria 
                            onChange={(e) => this.handleCategoria(e)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <SelectConta 
                            onChange={(e) => this.handleConta(e)}
                        />
                    </div>
                    <div className="form-group">
                        <SelectCartao onChange={(e) => this.handleCartao(e)} />
                    </div>
                    <button type="button" id="enviar" className="btn btn-md btn-primary me-2" onClick={this.handleEnviar}>Enviar</button>
                    <button type="button" id="limpar" className="btn btn-md btn-danger" onClick={this.handleLimpar}>Limpar</button>
                </form>
                </div>
            </div>
            </div>
        );
    }
}
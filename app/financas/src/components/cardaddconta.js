import React, { useState } from 'react';
import CurrencyInput from 'react-currency-masked-input'
import axios from 'axios';

export default function CardAddConta(){
    const [novaconta, setNovaConta] = useState([]);
    const [saldo, setSaldo] = useState(0);

    const handleCadastrar = () => {
        const baseUrl = process.env.REACT_APP_URL_API;
        const endpoint = '/cadastros/conta/';
        const data = JSON.stringify({
            banco: novaconta,
            saldo: saldo
        });

        axios.post(baseUrl + endpoint, data,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`, 'accept': 'application/json'
            }
        })
        .then(response => {
            alert('Conta cadastrada');
            window.location.href = '/contas';
        })
        .catch(function (error) {
            alert('Ocorreu um erro ao tentar cadastrar.');
        });
    }


    return(
        <div className="col-12 grid-margin stretch-card">
        <div className="card">
            <div className="card-body">
            <h4 className="card-title">Adicionar nova conta</h4>
            <form className="forms-sample">
                <div className="form-group">
                    <input type="text" className="form-control" id="categoria" placeholder="nova conta" onChange={e => setNovaConta(e.target.value)} />
                </div>
                <div className="form-group">
                    <CurrencyInput placeholder="saldo" aria-label="saldo" id="saldo" name="saldo" className="form-control form-control-sm" onChange={(e) => setSaldo(e.target.value)} required />
                </div>
                <button type="button" className="btn btn-md btn-primary me-2" onClick={handleCadastrar}>Cadastrar</button>
            </form>
            </div>
        </div>
        </div>
    );
}
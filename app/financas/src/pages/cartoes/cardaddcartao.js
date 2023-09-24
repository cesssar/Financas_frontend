import React, { useState } from 'react';
import CurrencyInput from 'react-currency-masked-input'
import axios from 'axios';

export default function CardAddCartao(){
    const [novoCartao, setNovoCartao] = useState('');
    const [limite, setLimite] = useState(0);
    const [faturaAtual, setFaturaAtual] = useState(0);
    const [diaCorte, setDiaCorte] = useState(0);
    const [tipo, setTipo] = useState('c');

    const handleCadastrar = () => {
        const baseUrl = process.env.REACT_APP_URL_API;
        const endpoint = '/cadastros/cartaocredito';
        const data = JSON.stringify({
            banco: novoCartao,
            limite: (limite*10),
            fatura_atual: (faturaAtual*10),
            dia_corte: diaCorte,
            tipo: tipo
        });

        axios.post(baseUrl + endpoint, data,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`, 'accept': 'application/json'
            }
        })
        .then(response => {
            alert('Cartão cadastrado');
            window.location.href = '/cartoes';
        })
        .catch(function (error) {
            alert('Ocorreu um erro ao tentar cadastrar.');
        });
    }


    return(
        <div className="col-12 grid-margin stretch-card">
        <div className="card">
            <div className="card-body">
            <h4 className="card-title">Adicionar novo cartão</h4>
            <form className="forms-sample">
                <div className="form-group">
                    <input type="text" className="form-control" id="novocartao" placeholder="novo cartão" onChange={e => setNovoCartao(e.target.value)} />
                </div>
                <div className="form-group">
                    <CurrencyInput placeholder="limite" aria-label="limite" id="limite" name="limite" className="form-control form-control-sm" onChange={(e) => setLimite(e.target.value)} required />
                </div>
                <div className="form-group">
                    <CurrencyInput placeholder="fatura_atual" aria-label="fatura_atual" id="fatura_atual" name="fatura_atual" className="form-control form-control-sm" onChange={(e) => setFaturaAtual(e.target.value)} required />
                </div>
                <div className="form-group">
                    <input type="number" max="31" className="form-control" id="diacorte" placeholder="diacorte" onChange={e => setDiaCorte(e.target.value)} />
                </div>
                <div className="form-group">
                    <select className="form-control form-control-sm" id="tipo" name='tipo' onChange={e => setTipo(e.target.value)} required>     
                        <option value="">selecione o tipo...</option>
                        <option value="1">crédito</option>  
                        <option value="2">alimentação</option>  
                    </select>
                </div>
                <button type="button" className="btn btn-md btn-primary me-2" onClick={handleCadastrar}>Cadastrar</button>
            </form>
            </div>
        </div>
        </div>
    );
}
import React, { useState, useEffect } from "react";
import CurrencyInput from 'react-currency-masked-input'
import axios from 'axios';


import SelectCategoria from "./selectcategoria";
import SelectConta from "./selectconta";
import SelectCartao from "./selectcartao";

export default function CardLancamento(){
    const [categoria, setCategoria] = useState(0);  
    const [conta, setConta] = useState(0);
    const [cartao, setCartao] = useState(0);
    const [valor, setValor] = useState(0);
    const [parcelas, setParcelas] = useState(1);
    const [obs, setObs] = useState('');

    let mensagem = localStorage.getItem('mensagemLancamento');
    const classmensagem = localStorage.getItem('classmensagem') ? localStorage.getItem('classmensagem') : 'text-success';

    const numeroparcelas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23 ,24];

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const baseUrl = process.env.REACT_APP_URL_API;
        const endpoint = '/cadastros/lancamento';
        const data = JSON.stringify({
            data: "2023-09-09",
            id_conta: conta,
            id_credito: cartao,
            id_categoria: categoria,
            numero_parcelas: parcelas,
            valor: (valor*10),
            observacao: obs,
            id_usuario: 1
        });
        try{
            const response = await axios.post(baseUrl + endpoint, data,{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`, 'accept': 'application/json'
                }
            });
            
            localStorage.setItem('mensagemLancamento','Lançamento realizado com sucesso!');
            localStorage.setItem('classmensagem','text-success');
        }catch(error){
            localStorage.setItem('mensagemLancamento','Verifique os dados e saldo/limites.');
            localStorage.setItem('classmensagem','text-danger');
        };
        window.location.href = '/lancamentos';
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            localStorage.removeItem('mensagemLancamento');
            mensagem = '';
        }, 3000);
        return () => clearTimeout(timer);
    },[]);

    return(
        
        <div className="col-md-12 grid-margin stretch-card">
        <div className="card position-relative">
            <div className="card-body">
            <p className="card-title">Lançamento manual</p>
            <form className="forms-sample" onSubmit={handleSubmit}>
            <div className="form-group">
                <SelectCategoria onChange={(e) => setCategoria(e.target.value)} required />
            </div>
            <div className="form-group">
                <SelectConta onChange={(e) => setConta(e.target.value)}/>
            </div>
            <div className="form-group">
                <SelectCartao onChange={(e) => setCartao(e.target.value)}/>
            </div>
            <div className="form-group">
                <CurrencyInput placeholder="Valor" aria-label="Valor" id="valor" name="valor" className="form-control form-control-sm" onChange={(e) => setValor(e.target.value)} required />
            </div>
            <div className="form-group">
                <select className="form-control form-control-sm" id="parcleas" name='parcelas' onChange={(e) => setParcelas(e.target.value)}>
                    {
                        numeroparcelas.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))
                    }
                </select>
            </div>
            <div className="form-group">
                <input type="text" className="form-control form-control-sm" placeholder="Observação" aria-label="Observação" id="obs" name="obs" onChange={(e) => setObs(e.target.value)}/>
            </div>
            <div className="form-group">
                <p class={classmensagem}>{mensagem}</p>
            </div>
            <button type="submit" className="btn btn-primary me-2">Salvar</button>
            
            </form>
            </div>
        </div>
        </div>
    );
}
import React, { useState, useEffect } from 'react';
import CurrencyInput from 'react-currency-masked-input'
import axios from 'axios';
import ValidaLogin from '../validalogin';

export default function CardCartaoDetalhes(){
    const [dados, setDados] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [valor, setValor] = useState(0);

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const baseUrl = process.env.REACT_APP_URL_API;
    const endpoint = '/cadastros/cartaocredito/' + id;
    const config = {
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}`, 'accept': 'application/json'}
    };

    const handleVoltar = () => {
        window.location.href = '/cartoes';
    }

    const handleSend = async(valor_enviar) =>{
        const baseUrl = process.env.REACT_APP_URL_API;
        const endpoint = '/cadastros/cartaocredito/pagarfatura/' + id + '/' + valor_enviar;
        const data = JSON.stringify({
            valor: valor
        })
        try{
            await axios.put(baseUrl + endpoint,data,{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`, 'accept': 'application/json'
                }
            });
            
            alert('Fatura paga!');
            window.location.href = '/cartaodetalhes?id=' + id;
        }catch(error){
            alert('Verifique o valor informado!');
        };
    }

    const handleCreditar = async(e) =>{
        e.preventDefault();
        await handleSend((valor * 10))
    };

    useEffect(() => {
        ValidaLogin();
        axios.get(baseUrl + endpoint, config)
          .then(response => {
            setDados(response.data);
            setIsLoading(false);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            setIsLoading(false);
          });
    }, []);

    return(
        <>
        <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
            <div className="card-body">
            <h4 className="card-title">Cartão #{id}</h4>
            <div className="table-responsive">
                <table className="table table-striped">
                    {isLoading ? (
                        <p>Carregando...</p>
                    ) : (
                        <>
                        {dados.map(item => (
                            <tbody>
                            <tr><td>Cartão:</td><td>{item.banco}</td></tr>
                            <tr><td>Limite atual:</td><td>R$ {item.limite}</td></tr>
                            <tr><td>Fatura atual:</td><td>R$ {item.fatura_atual}</td></tr>
                            <tr><td>Tipo:</td><td>{item.tipo}</td></tr>
                            <tr><td>Dia corte:</td><td>{item.dia_corte}</td></tr>
                            </tbody>
                        ))}
                        </>
                    )}
                </table>
            </div>           
            </div>
        </div>
        </div>

        <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
            <div className="card-body">
            <h4 className="card-title">Pagar fatura</h4>
            <form className="forms-sample">
            <div className="form-group">
                <CurrencyInput placeholder="valor pagamento" aria-label="Valor" id="valor" name="valor" className="form-control form-control-sm" onChange={(e) => setValor(e.target.value)} required />
            </div>
            <button type="button" className="btn btn-primary me-2" onClick={handleCreditar}>Pagar</button>
            </form>
            </div>
        </div>
        </div>
        <div className='template-demo'>
            <button type="button" className="btn btn-primary btn-md" onClick={handleVoltar}>Voltar</button>
        </div>
        </>
    );
}
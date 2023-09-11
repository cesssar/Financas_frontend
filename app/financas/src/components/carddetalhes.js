import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CardDetalhes(){
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const baseUrl = process.env.REACT_APP_URL_API;
    const endpoint = '/cadastros/lancamento/' + id;
    const config = {
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}`, 'accept': 'application/json'}
    };

    const handleVoltar = () => {
        window.history.back();
    }

    const handleDeletar = () => {
        const baseUrl = process.env.REACT_APP_URL_API;
        const endpoint = '/cadastros/lancamento/' + id;
    
        const config = {
            headers: {Authorization: `Bearer ${localStorage.getItem("token")}`, 'accept': 'application/json'}
        };
        
        axios.delete(baseUrl + endpoint, config)
        .then(response => {
            alert('Deletado');
            window.location.href = '/extrato';
        })
        .catch(function (error) {
            alert('Erro ao deletar');
        });
    }

    useEffect(() => {
        axios.get(baseUrl + endpoint, config)
          .then(response => {
            setData(response.data);
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
            <h4 className="card-title">Detalhes lançamento #{id}</h4>
            <div className="table-responsive">
                <table className="table table-striped">
                    {isLoading ? (
                        <p>Carregando...</p>
                    ) : (
                        <>
                        {data.map(item => (
                            <tbody>
                            <tr><td>Data:</td><td>{item.data}</td></tr>
                            <tr><td>Conta/Cartão:</td><td>{item.banco}{item.cartao_credito}</td></tr>
                            <tr><td>Categoria:</td><td>{item.categoria}</td></tr>
                            <tr><td>Parcelas:</td><td>{item.numero_parcelas}</td></tr>
                            <tr><td>Valor:</td><td>R$ {item.valor}</td></tr>
                            <tr><td>Observação:</td><td>{item.observacao}</td></tr>
                            </tbody>
                        ))}
                        </>
                    )}
                </table>
            </div>           
            </div>
        </div>
        </div>
        <div className='template-demo'>
            <button type="button" className="btn btn-primary btn-md" onClick={handleVoltar}>Voltar</button>
            <button type="button" className="btn btn-danger btn-md" onClick={handleDeletar}>Detelar</button>
        </div>
        </>
    );
}
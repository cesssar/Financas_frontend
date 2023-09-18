import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CardContas(){
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const baseUrl = process.env.REACT_APP_URL_API;
    const endpoint = '/cadastros/conta/';
    const config = {
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}`, 'accept': 'application/json'}
    };

    const handleDeletar = (id) => {
        const baseUrl = process.env.REACT_APP_URL_API;
        const endpoint = '/cadastros/conta/' + id;
    
        const config = {
            headers: {Authorization: `Bearer ${localStorage.getItem("token")}`, 'accept': 'application/json'}
        };
        
        axios.delete(baseUrl + endpoint, config)
        .then(response => {
            alert('Deletado');
            window.location.href = '/contas';
        })
        .catch(function (error) {
            alert('Não foi possível deletar. Verifique se há lançamentos relacionados ou saldo na conta.');
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
        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Contas</h4>
                    <div className="table-responsive">
                        <table className="table table-striped">
                        <tbody>
                            
                            {isLoading ? (
                                <p>Carregando...</p>
                            ) : (
                                <>
                                {data.map(item => (
                                    <tr>
                                    <td><a href={`/contadetalhes?id=${item.id}`}>{item.banco}</a></td>
                                    <td>R$ {item.saldo}</td>
                                    <td><a href="#" onClick={() => handleDeletar(item.id)}><i className="ti-trash"></i></a></td>
                                    </tr>
                                ))}
                                </>
                            )}
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
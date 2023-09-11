import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CardCategorias(){
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const baseUrl = process.env.REACT_APP_URL_API;
    const endpoint = '/cadastros/categoria/';
    const config = {
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}`, 'accept': 'application/json'}
    };

    const handleDeletar = (id) => {
        const baseUrl = process.env.REACT_APP_URL_API;
        const endpoint = '/cadastros/categoria/' + id;
    
        const config = {
            headers: {Authorization: `Bearer ${localStorage.getItem("token")}`, 'accept': 'application/json'}
        };
        
        axios.delete(baseUrl + endpoint, config)
        .then(response => {
            alert('Deletado');
            window.location.href = '/categorias';
        })
        .catch(function (error) {
            alert('Não foi possível deletar. Verifique se há lançamentos relacionados.');
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
                    <h4 className="card-title">Categorias</h4>
                    <div className="table-responsive">
                        <table className="table table-striped">
                        <tbody>
                            
                            {isLoading ? (
                                <p>Carregando...</p>
                            ) : (
                                <>
                                {data.map(item => (
                                    <tr>
                                    <td>{item.categoria}</td>
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
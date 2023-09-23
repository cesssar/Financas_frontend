import React, { useState } from 'react';
import axios from 'axios';

export default function CardAddCategoria(){
    const [novacategoria, setNovacategoria] = useState([]);

    const handleCadastrar = () => {
        const baseUrl = process.env.REACT_APP_URL_API;
        const endpoint = '/backend/cadastros/categoria/';
        const data = JSON.stringify({
            categoria: novacategoria
        });

        axios.post(baseUrl + endpoint, data,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`, 'accept': 'application/json'
            }
        })
        .then(response => {
            alert('Categoria cadastrada');
            window.location.href = '/categorias';
        })
        .catch(function (error) {
            alert('Ocorreu um erro ao tentar cadastrar.');
        });
    }


    return(
        <div className="col-12 grid-margin stretch-card">
        <div className="card">
            <div className="card-body">
            <h4 className="card-title">Adicionar nova categoria</h4>
            <form className="forms-sample">
                <div className="form-group">
                <input type="text" className="form-control" id="categoria" placeholder="Categoria" onChange={e => setNovacategoria(e.target.value)} />
                </div>
                <button type="button" className="btn btn-md btn-primary me-2" onClick={handleCadastrar}>Cadastrar</button>
            </form>
            </div>
        </div>
        </div>
    );
}
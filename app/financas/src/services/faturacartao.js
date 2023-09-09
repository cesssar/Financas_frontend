import axios from 'axios';
import { useState } from 'react';

export default function FaturaCartao(){
    const [fatura, setFatura] = useState();
    const baseUrl = process.env.REACT_APP_URL_API;
    const endpoint = '/fatura/cartaocredito';
    const config = {
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}`, 'accept': 'application/json'}
    };
    axios.get(baseUrl + endpoint, config)
    .then(response => {
        setFatura(response.data);
    });
    return (
        fatura
    )
}
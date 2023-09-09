import axios from 'axios';
import { useState } from 'react';

export default function SaldoContas(){
    const [saldo, setSaldo] = useState();
    const baseUrl = process.env.REACT_APP_URL_API;
    const endpoint = '/saldo/contas';
    const config = {
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}`, 'accept': 'application/json'}
    };
    axios.get(baseUrl + endpoint, config)
    .then(response => {
        setSaldo(response.data);
    });
    return (
        saldo
    )
}
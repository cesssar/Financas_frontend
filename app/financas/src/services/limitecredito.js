import axios from 'axios';
import { useState } from 'react';

export default function LimiteCredito({tipo}){
    const [limite, setLimite] = useState();

    const baseUrl = process.env.REACT_APP_URL_API;
    const endpoint = '/limite/cartaocredito?tipo=' + tipo;
    const config = {
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}`, 'accept': 'application/json'}
    };
    axios.get(baseUrl + endpoint, config)
    .then(response => {
        setLimite(response.data);
    });
    return (
        limite
    )
}
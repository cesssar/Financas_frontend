import axios from 'axios';
import { useState } from 'react';

export default function RequestGet({endpoint}){
    const [resultado, setResultado] = useState();
    const baseUrl = process.env.REACT_APP_URL_API;

    const config = {
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}`, 'accept': 'application/json'}
    };
    axios.get(baseUrl + endpoint, config)
    .then(response => {
        setResultado(response.data);
    });
    return (
        resultado
    )
}
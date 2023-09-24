import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function SelectCategoria({onChange}) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const baseUrl = process.env.REACT_APP_URL_API;
  const endpoint = '/cadastros/categoria';
  const config = {
    headers: {Authorization: `Bearer ${localStorage.getItem("token")}`, 'accept': 'application/json'}
    };

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

  return (
    <div>
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <select className="form-control form-control-sm" id="categoria" name='categoria' onChange={onChange} required>
          <option value="">Selecione uma categoria...</option>  
          {data.map(item => (
            <option value={item.id}>{item.categoria}</option>
          ))}
        </select>
      )}
    </div>
  );
}


import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function SelectConta({onChange}) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const baseUrl = process.env.REACT_APP_URL_API;
  const endpoint = '/cadastros/conta';
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
        <p>Loading...</p>
      ) : (
        <select className="form-control form-control-sm" id="conta" name='conta' onChange={onChange}>     
            <option value="">Selecione uma conta...</option>  
            {data.map(item => (
            <option value={item.id}>{item.banco}</option>
            ))}
        </select>
      )}
    </div>
  );
}


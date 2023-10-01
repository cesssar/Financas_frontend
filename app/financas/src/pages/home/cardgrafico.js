import React, { useEffect, useState } from "react";
import axios from "axios";
import dayjs from 'dayjs';
import { Chart } from "react-google-charts";

export default function CardGrafico() {
    const [data, setData] = useState([]);
    const baseUrl = process.env.REACT_APP_URL_API;
    const endpoint = '/lancamento/ultimos';
    const config = {
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}`, 'accept': 'application/json'}
    };

    const options = {
        legend: 'none'
    };

    const montaDados = (dados) => {
        let array_dados = [["Data", "Valor"],];
        dados.map((item) => 
        array_dados.push([dayjs(item.data).format('DD-MM-YYYY'), item.valor],)
        );
        setData(array_dados);
    };

    useEffect(() => {
        axios.get(baseUrl + endpoint, config)
          .then(response => {
            montaDados(response.data.sort().reverse());
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
    }, []);
    
    return(
        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Gastos últimos dias</h4>
                    <div className="row">
                        <div className="card">
                        <Chart
                            chartType="ColumnChart"
                            data={data}
                            width={"100%"}
                            height={"300px"}
                            options={options}
                            />   
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
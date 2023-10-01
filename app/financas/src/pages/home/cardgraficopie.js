import React, { useState, useEffect } from "react";
import axios from "axios";
import { Chart } from "react-google-charts";


export default function CardGraficoPie() {
    const [data, setData] = useState([]);
    const baseUrl = process.env.REACT_APP_URL_API;
    const endpoint = '/lancamento/categoria';
    const config = {
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}`, 'accept': 'application/json'}
    }; 

    const options = {
        pieSliceText: "label",
        slices: {
            4: { offset: 0.2 },
            12: { offset: 0.3 },
            14: { offset: 0.4 },
            15: { offset: 0.5 },
        },
        legend: 'none'
    };

    const montaDados = (data) => {
        let array_dados = [["Categoria","Valor"],];
        data.map((item) => {
            array_dados.push([item.categoria, item.valor],);
        })
        setData(array_dados);
    }

    useEffect(function () {
        axios.get(baseUrl + endpoint, config)
        .then(response => {
            montaDados(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);

    return(
        <>
        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Gastos por categoria</h4>
                    <div className="row">
                        <div className="card">
                            <Chart
                            chartType="PieChart"
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
        
        </>
       
    );
}
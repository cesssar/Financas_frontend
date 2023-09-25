import React, { useEffect } from "react";
import axios from "axios";
import * as echarts from 'echarts';

export default function CardGraficoPie() {
    const baseUrl = process.env.REACT_APP_URL_API;
    const endpoint = '/lancamento/categoria';
    const config = {
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}`, 'accept': 'application/json'}
    };

    let array_dados = [];

    const montaGraficoPie = (dados) => {
        dados.map((item) => 
            array_dados.push(
                {value: item.valor, name: item.categoria},
            )
        );
        graficoPie(array_dados);
    };

    const graficoPie = (dados) => {
        var dom = document.getElementById('chart-container-pie');
        var myChart = echarts.init(dom, null, {
        renderer: 'canvas',
        useDirtyRect: false
        });

        var option;

        option = {
        tooltip: {
            trigger: 'item'
        },
        series: [
            {
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: dados
            }
        ]
        };

        if (option && typeof option === 'object') {
        myChart.setOption(option);
        }

        window.addEventListener('resize', myChart.resize);
    };

    useEffect(() => {
        axios.get(baseUrl + endpoint, config)
          .then(response => {
            montaGraficoPie(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
    }, []);
    
    return(
        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Gastos por categoria</h4>
                    <div className="row">
                        <div className="card">
                            <div id="chart-container-pie" />    
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
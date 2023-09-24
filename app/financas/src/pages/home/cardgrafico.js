import React, { useEffect } from "react";
import axios from "axios";
import * as echarts from 'echarts';
import dayjs from 'dayjs';

export default function CardGrafico() {
    const baseUrl = process.env.REACT_APP_URL_API;
    const endpoint = '/lancamento/ultimos';
    const config = {
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}`, 'accept': 'application/json'}
    };

    let array_datas = [];
    let array_valores = [];

    const montaGrafico = (dados) => {
        dados.map((item) => 
            array_datas.push(dayjs(item.data).format('DD-MM-YYYY'))
        );
        dados.map((item) => array_valores.push(item.valor));
        grafico(array_datas, array_valores);
    };

    const grafico = (datas, valores) => {
        var dom = document.getElementById('chart-container');
        var myChart = echarts.init(dom, null, {
            renderer: 'canvas',
            useDirtyRect: false
        });

        var option;

        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'shadow'
                },
                formatter: function (params) {
                  var tar = params[0];
                  return tar.name + '<br/>' + tar.value.toFixed(2);
                }
              },
        xAxis: {
            type: 'category',
            data: datas
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: valores,
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
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
            montaGrafico(response.data);
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
                            <div id="chart-container" />    
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
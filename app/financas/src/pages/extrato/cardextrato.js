import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from 'react-paginate';
import './paginacao.css';

export default function CardExtrato() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const hoje = new Date();
    const mes = localStorage.getItem('mes') ? localStorage.getItem('mes') : hoje.getMonth() + 1;
    const ano = localStorage.getItem('ano') ? localStorage.getItem('ano') : hoje.getFullYear();
    const mesano = localStorage.getItem('mesano') ? localStorage.getItem('mesano') : hoje.getMonth() + 1 + '/' + hoje.getFullYear();

    const meses = ['1/2023', '2/2023', '3/2023', '4/2023', '5/2023', '6/2023', '7/2023', '8/2023', '9/2023', '10/2023', '11/2023', '12/2023', '1/2024', '2/2024', '3/2024', '4/2024', '5/2024', '6/2024', '7/2024', '8/2024', '9/2024', '10/2024', '11/2024', '12/2024'];
    
    const baseUrl = process.env.REACT_APP_URL_API;
    const endpoint = '/cadastros/lancamento/' + mes + '/' + ano ;
    const config = {
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}`, 'accept': 'application/json'}
    };

    // Paginação
    const itemsPerPage = 5;
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const subset = data.slice(startIndex, endIndex);

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    useEffect(() => {
        axios.get(baseUrl + endpoint, config)
          .then(response => {
            setData(response.data);
            setTotalPages(Math.ceil(response.data.length / itemsPerPage));
            setIsLoading(false);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            setIsLoading(false);
          }
        );
        
    }, []);

    
    const handleChange = (e) => {
        const data = e.target.value;
        const mesano = data.split('/');
        const mes = mesano[0];
        const ano = mesano[1];
        localStorage.setItem('mes', mes);
        localStorage.setItem('ano', ano);
        localStorage.setItem('mesano',data);
        window.location.href = '/extrato';
    }

    return(
        
        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Extrato</h4>
                    <div className="row">
                        <div className="col-md-1">
                            <select className="form-control form-control-sm" id="mes" onChange={handleChange} value={mesano}>
                                {
                                    meses.map(item => (
                                        <option value={item}>{item}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Conta</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {isLoading ? (
                                <p>Carregando...</p>
                            ) : (
                                <>
                                {subset.map((item) => (
                                    <>
                                    <tr>
                                    <td><p className="text-small">{item.data}</p></td>
                                    <td><p className="text-small">{item.banco}{item.cartao_credito}</p></td>
                                    <td><p className="text-small"><a href={`/detalhes?id=${item.id}`}>R$ {item.valor}</a></p></td>
                                    </tr>
                                </>
                                ))}
                                
                                </>
                            )}
                            <>
                                <tr>
                                    <td style={{"letter-spacing":".5rem"}} colSpan={3}>
                                    <ReactPaginate
                                        previousLabel={<i className='ti-arrow-circle-left'></i>}
                                        nextLabel={<i className='ti-arrow-circle-right'></i>}
                                        pageCount={totalPages}
                                        onPageChange={handlePageChange}
                                        containerClassName={"pagination"}
                                        previousLinkClassName={"pagination__link"}
                                        nextClassName={"item next "}
                                        disabledClassName={'disabled-page'}
                                        activeClassName={'item active '}
                                        forcePage={currentPage}
                                        marginPagesDisplayed={1}
                                        breakClassName={'item break-me '}
                                        breakLabel={'...'}                                            
                                    />
                                    </td>
                                </tr>
                        </>
                        </tbody>
                        </table>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
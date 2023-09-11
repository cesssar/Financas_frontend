import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const expires = () => {
    const currentDate = new Date();
    currentDate.setMinutes(currentDate.getMinutes() + 10);
    return currentDate;
};

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const message = localStorage.getItem('messageLogin');

    const handleClick = async() => {
        const baseUrl = process.env.REACT_APP_URL_API;
        const endpoint = '/login';
        const currentDate = expires();
        const credentials = JSON.stringify({
            login: username,
            senha: password,
        });
        localStorage.setItem('username', username);
        try{
            const response = await axios.post(baseUrl + endpoint, credentials,{
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            localStorage.setItem('token', response.data.access_token);
            localStorage.setItem('expires', currentDate);
            navigate('/', { replace: true });
        }
        catch(error){
            localStorage.setItem('messageLogin', 'Credenciais inválidas');
            navigate('/login', { replace: true });
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setUsername('cesssar');
            setPassword('ozzy');
            localStorage.clear();
        }, 3000);
        return () => clearTimeout(timer);
    },[]);

    return(
        <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
            <div className="content-wrapper d-flex align-items-center auth px-0">
            <div className="row w-100 mx-0">
                <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                    <div className="brand-logo">
                    <img src="images/porquinho.png" alt="logo" className="align-center"/>
                    </div>
                    <div className="mt-3">
                        <p className="text-danger">{message}</p>
                    </div>
                    <form className="pt-3">
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            id="username"
                            placeholder="usuario" 
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            className="form-control form-control-lg" 
                            type="password" 
                            id="password" 
                            placeholder="senha"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mt-3">
                    <button type="button" className="btn btn-primary me-2" onClick={handleClick}>Entrar</button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
            {/* content-wrapper ends */}
        </div>
        {/* page-body-wrapper ends */}
        </div>
    );
}
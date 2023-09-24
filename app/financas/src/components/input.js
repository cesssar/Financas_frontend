import React from 'react';

export default function Input({type, id, placeholder}){
    return(
        <input 
            type={type} 
            className="form-control form-control-lg" 
            id={id}
            placeholder={placeholder}
        />
    );
}
import React from "react";
import  PropTypes  from "prop-types";

import "./Input.css"

const Input = ({type, placeholder, value, onChange}) =>{
    return(
        <input 
            className="custom-input"
            value={value}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
        />    
    )
}

Input.prototype = {
    value : PropTypes.string.isRequired,
    placeholder : PropTypes.string,
    onChange : PropTypes.func.isRequired,
    type : PropTypes.string.isRequired
}

Input.defaultProps = {
    placeholder : "Deger giriniz.",
    type : "email"
}

export default Input;
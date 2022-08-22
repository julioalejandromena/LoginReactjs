//import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ProveedorEstadoUsuario} from "./ProveedorUsuario"
import {reducer, estadoInicial} from "./reducer/reducer"

ReactDOM.render(
    <ProveedorEstadoUsuario estadoInicial={estadoInicial} reducer={reducer}>
        <App />   
    </ProveedorEstadoUsuario>
, document.getElementById('root'));



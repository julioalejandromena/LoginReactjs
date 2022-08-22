import { createContext, useContext, useReducer } from "react";

export const ContextDelEstado = createContext();

export const ProveedorEstadoUsuario = ({reducer, estadoInicial, children}) =>(
    <ContextDelEstado.Provider value={useReducer(reducer, estadoInicial)}>
        {children}
    </ContextDelEstado.Provider>
);

export const ValorDeEstadoUsuario = () => useContext(ContextDelEstado);
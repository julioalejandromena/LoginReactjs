import { variables } from "./variables";

export const estadoInicial = {
    usuario : []
}

export const reducer = (state, action) =>{
    console.log(action);
    switch (action.type) {
        case variables.ANIADIRUSUARIO:
            return {
                ...state,
                usuario : [...state.usuario, action.datos]

            }
            default : return state;
    }
}
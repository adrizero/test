//Constantes que indican la accion a ejecutar
export const ADD_RESULTS = 'ADD_RESULTS';
export const ADD_SEARCHPARAMS = 'ADD_SEARCHPARAMS';
export const ORDER_RESULTS = 'ORDER_RESULTS';
export const SAVE_ID = 'SAVE_ID';

//Acciones
export const saveId = (id) => {
    //Solicita guardar un id
    return {
        type: SAVE_ID,
        payload: id
    }
}

export const orderResults = () => {
    //Solicita ordenar los resultados traidos de la api
    return {
        type: ORDER_RESULTS,
    }
}

export const addSearchParams = () => {
    //Solicita agregar los parametros de busqueda en la api
    return {
        type: ADD_SEARCHPARAMS,
}}

export const addResults = (data) => {
    //Solicita agregar al estado los objetos traido de la api
    return {
        type: ADD_RESULTS,
        payload: data,
}}

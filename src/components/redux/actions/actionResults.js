export const ADD_RESULTS = 'ADD_RESULTS';
export const ADD_SEARCHPARAMS = 'ADD_SEARCHPARAMS';
export const ORDER_RESULTS = 'ORDER_RESULTS';

export const orderResults = () => {
    return {
        type: ORDER_RESULTS,
    }
}

export const addSearchParams = () => {
    return {
        type: ADD_SEARCHPARAMS,
}}

export const addResults = (data) => {
    return {
        type: ADD_RESULTS,
        payload: data,
}}

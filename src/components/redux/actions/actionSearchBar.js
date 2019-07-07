//Constantes que indican que accion se va a ejecutar
export const SET_STREET = 'SET_STREET';
export const SET_HOUSENUMBER = 'SET_HOUSENUMBER';
export const SET_POSTALCODE = 'SET_POSTALCODE';
export const SET_CITY = 'SET_CITY';
export const SET_LAT = 'SET_LAT';
export const SET_LNG = 'SET_LNG';
export const SET_DISTANCE = 'SET_DISTANCE';
export const SET_TYPE = 'SET_TYPE';
export const SET_SEARCH = 'SET_SEARCH'
export const CLEAR_CHECKED = 'CLEAR_CHECKED';
export const ERROR_MESSAGE = 'ERROR_MESSAGE';
export const SELECTED_ORDER = 'SELECTED_ORDER';

//Acciones
export const setSelectedOrder = (order) =>{
    //Solicita modificar el estado que indica que columna se ordenara al mostrar los objetos traidos de la api
    return {
        type: SELECTED_ORDER,
        payload: order,
    }
}

export const setErrorMessage = (msg) => {
    //Solicita modificar el estado que guarda un mensaje de error
    return {
        type: ERROR_MESSAGE,
        payload: msg,
    }
}
export const clearChecked = () => {
    //Solicita limpiar los parametros de busqueda seleccionados, cambia el estado a false
    return {
        type: CLEAR_CHECKED
    }
}

export const setSearch = (search) =>{
    //Solicita modificar el estado de campo de busqueda
    return{
        type: SET_SEARCH,
        payload: search,
    }
}

export const setStreet = () => {
    //Solicita modificar el estado del parametro calle
    return {
        type: SET_STREET,
}}

export const setHouseNumber = () => {
    //Solicita modificar el estado del parametro Numero de casa
    return {
        type: SET_HOUSENUMBER,
}}

export const setPostalCode = () => {
    //Solicita modificar el estado del parametro codigo postal
    return {
        type: SET_POSTALCODE,
}}

export const setCity = () => {
    //Solicita modificar el estado del parametro ciudad
    return {
        type: SET_CITY,
}}
export const setLat = () => {
    //Solicita modificar el estado del parametro latitud
    return {
        type: SET_LAT,
}}
export const setLng = () => {
    //Solicita modificar el estado del parametro longitud
    return {
        type: SET_LNG,
}}
export const setDistance = () => {
    //Solicita modificar el estado del parametro distancia
    return {
        type: SET_DISTANCE,
}}
export const setType = () => {
    //Solicita modificar el estado del parametro tipo
    return {
        type: SET_TYPE,
}}
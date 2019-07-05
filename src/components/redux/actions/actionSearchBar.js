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

export const clearChecked = () => {
    return {
        type: CLEAR_CHECKED
    }
}

export const setSearch = (search) =>{
    return{
        type: SET_SEARCH,
        payload: search,
    }
}

export const setStreet = () => {
    return {
        type: SET_STREET,
}}

export const setHouseNumber = () => {
    return {
        type: SET_HOUSENUMBER,
}}

export const setPostalCode = () => {
    return {
        type: SET_POSTALCODE,
}}

export const setCity = () => {
    return {
        type: SET_CITY,
}}
export const setLat = () => {
    return {
        type: SET_LAT,
}}
export const setLng = () => {
    return {
        type: SET_LNG,
}}
export const setDistance = () => {
    return {
        type: SET_DISTANCE,
}}
export const setType = () => {
    return {
        type: SET_TYPE,
}}
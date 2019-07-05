// importamos las peticiones
import { apiGetData } from '../../lib/api';

// importamos las constantes que nos indican que accion ejecutamos
import { 
    ADD_SEARCHPARAMS,
    ADD_RESULTS,
} from '../actions/actionResults';

import {
    SET_STREET,
    SET_HOUSENUMBER,
    SET_POSTALCODE,
    SET_CITY,
    SET_LAT,
    SET_LNG,
    SET_DISTANCE,
    SET_TYPE,
    SET_SEARCH,
    CLEAR_CHECKED,
} from '../actions/actionSearchBar'


//inicializamos el estado por default del componente que contendra los resultados
const initialState = {
    results: [],  
    paramsSearch: '',
    search: '',
    userSearch: {
        street: false,
        houseNumber: false,
        postalCode: false,
        city: false,
        lat: false,
        lng: false,
        distance: false,
        type:false,
    }
    
}


export const fetchGetResult = (q, fields)=> {
    console.log('fetchGetResult');
    return(dispatch) =>{
        apiGetData(q,fields)
        .then(response =>{
            if(response.ok){
                return response.json();
            }else{
                console.log(response);
            }
        })
        .then(responseJson => {
            console.log(responseJson);
            //dispatch(getResults(response))
        })
        .catch(res=>{console.log(res)})
    }
}

const result = (state = initialState, action) => {
    switch(action.type){
        case ADD_SEARCHPARAMS:
            const keys = Object.keys(state.userSearch);        
            return {
                ...state,
                paramsSearch: keys.filter(i=>state.userSearch[i] !== false).join()
            }

        case ADD_RESULTS:
            return {
                ...state,
                 results: action.payload};
        
        case SET_SEARCH:
            console.log('estas en reducer')
            return {
                ...state,
                search: action.payload,
                
            }

        case SET_STREET:
            return {
                ...state,
                userSearch: {
                    ...state.userSearch,
                    street: !state.userSearch.street,
                }
            }

            case SET_HOUSENUMBER:
                return{
                    ...state,
                    userSearch:{
                        ...state.userSearch,
                        houseNumber: !state.userSearch.houseNumber,
                    }
                }
            
            case SET_POSTALCODE:
                return {
                    ...state,
                    userSearch: {
                        ...state.userSearch,
                        postalCode: !state.userSearch.postalCode,
                    }
                }
            
            case SET_CITY:
                return {
                    ...state,
                    userSearch:{
                        ...state.userSearch,
                        city: !state.userSearch.city,
                    }
                }
            
            case SET_LAT:
                return {
                    ...state,
                    userSearch: {
                        ...state.userSearch,
                        lat: !state.userSearch.lat,
                    }
                }
            
            case SET_LNG:
                return {
                    ...state,
                    userSearch: {
                        ...state.userSearch,
                        lng: !state.userSearch.lng,
                    }
                }
            
            case SET_DISTANCE:
                return {
                    ...state,
                    userSearch: {
                        ...state.userSearch,
                        distance: !state.userSearch.distance,
                    }
                }
            
            case SET_TYPE:
                return {
                    ...state,
                    userSearch: {
                        ...state.userSearch,
                        type: !state.userSearch.type,
                    }
                }
            case CLEAR_CHECKED:
                return {
                    ...state,
                    userSearch: {
                        street: false,
                        houseNumber: false,
                        postalCode: false,
                        city: false,
                        lat: false,
                        lng: false,
                        distance: false,
                        type:false,
                    } 
                }
        
        default:
            return {...state};
    }
}

export default result
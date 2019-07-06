// importamos las peticiones
import { apiGetData } from '../../lib/api';

// importamos las constantes que nos indican que accion ejecutamos
import { 
    ADD_SEARCHPARAMS,
    ADD_RESULTS,
    ORDER_RESULTS,
} from '../actions/actionResults';

import {
    setErrorMessage,
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
    ERROR_MESSAGE,
    SELECTED_ORDER,
} from '../actions/actionSearchBar'

import {
    addResults,
} from '../actions/actionResults';

//inicializamos el estado por default del componente que contendra los resultados
const initialState = {
    results: [],
    errorMessage: '',  
    paramsSearch: '',
    search: '',
    selectedOrder: 'city',
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
    return(dispatch) =>{
        apiGetData(q,fields)
        .then(response =>{
            if(response.ok){
                return response.json();
            }else{
                dispatch(setErrorMessage('Connection error'))
            }
        })
        .then(responseJson => {
            if(responseJson.length === 0){
                dispatch(setErrorMessage('No results fouds'))
            }
            dispatch(addResults(responseJson))
            
            
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
                 results: action.payload
                };

        case ORDER_RESULTS:

            switch(state.selectedOrder) {          
                case 'city':
                    return{
                        ...state,
                        results: state.results.sort((a, b) => (a.address.city < b.address.city ? -1 : 1))
                    }
                case 'postalcode':
                        return{
                            ...state,
                            results: state.results.sort((a, b) => (a.address.postalcode < b.address.postalcode ? -1 : 1))
                        }
                case 'street':
                        return{
                            ...state,
                            results: state.results.sort((a, b) => (a.address.street < b.address.street ? -1 : 1))
                            }
                default:
                        return {
                            ...state
                        }
            }
              
        case SET_SEARCH:
            return {
                ...state,
                search: action.payload,
                
            }
        case SELECTED_ORDER:
            return {
                ...state,
                selectedOrder: action.payload
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
            case ERROR_MESSAGE:
                return {
                    ...state,
                    errorMessage: action.payload,
                }
        default:
            return {...state};
    }
}

export default result
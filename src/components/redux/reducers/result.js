// importamos las peticiones
import { apiGetData } from '../../lib/api';

// importamos las constantes que nos indican que accion ejecutamos
import { 
    ADD_SEARCHPARAMS,
    ADD_RESULTS,
    ORDER_RESULTS,
} from '../actions/actionResults';

//Constantes y acciones
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
    SAVE_ID,
    addResults,
} from '../actions/actionResults';

//inicializamos el estado por default del componente que contendra los resultados
const initialState = {
    results: [],            //Objetos traido de la api
    searchId: '',           //Id del objeto el cual se mostrara el mapa
    errorMessage: '',       //Mensaje de error
    paramsSearch: '',       //Parametros de busquedas seleccionados
    search: '',             //Palabra a buscar
    selectedOrder: 'city',  //Columna a ordenar
    userSearch: {           //Parametros seleccionados por el usuario
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
    //Verifica la obtencion de datos traido de la api
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
        //Devuelve un nuevo objeto con estados actualizados
        case ADD_SEARCHPARAMS:
            //Actualiza los parametros seleccionados por el usuario
            const keys = Object.keys(state.userSearch);        
            return {
                ...state,
                paramsSearch: keys.filter(i=>state.userSearch[i] !== false).join()
            }

        case ADD_RESULTS:
            //Actualiza el resultado (Objetos traido de la api)
            return {
                ...state,
                 results: action.payload
                };
        
        case SAVE_ID:
            //Actualiza el id de objeto a mostrar en el mapa
            return{
                ...state,
                searchId: action.payload
            }
        
        case ORDER_RESULTS:
            //Actualiza el orden del resultado (objetos Atms)
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
            //Actualiza la palabra a buscar
            return {
                ...state,
                search: action.payload,
                
            }
        case SELECTED_ORDER:
            //Actualiza que columna se va a ordenar
            return {
                ...state,
                selectedOrder: action.payload
            }

        case SET_STREET:
            //Actualiza el parametro de busqueda calle
            return {
                ...state,
                userSearch: {
                    ...state.userSearch,
                    street: !state.userSearch.street,
                }
            }

            case SET_HOUSENUMBER:
                //Actualiza el parametro de busqueda numero de casa
                return{
                    ...state,
                    userSearch:{
                        ...state.userSearch,
                        houseNumber: !state.userSearch.houseNumber,
                    }
                }
            
            case SET_POSTALCODE:
                //Actualiza el parametro de busqueda codigo postal
                return {
                    ...state,
                    userSearch: {
                        ...state.userSearch,
                        postalCode: !state.userSearch.postalCode,
                    }
                }
            
            case SET_CITY:
                //Actualiza el parametro de busqueda ciudad
                return {
                    ...state,
                    userSearch:{
                        ...state.userSearch,
                        city: !state.userSearch.city,
                    }
                }
            
            case SET_LAT:
                //Actualiza el parametro de busqueda latitud
                return {
                    ...state,
                    userSearch: {
                        ...state.userSearch,
                        lat: !state.userSearch.lat,
                    }
                }
            
            case SET_LNG:
                //Actualiza el parametro de busqueda longitud
                return {
                    ...state,
                    userSearch: {
                        ...state.userSearch,
                        lng: !state.userSearch.lng,
                    }
                }
            
            case SET_DISTANCE:
                //Actualiza el parametro de busqueda distancia
                return {
                    ...state,
                    userSearch: {
                        ...state.userSearch,
                        distance: !state.userSearch.distance,
                    }
                }
            
            case SET_TYPE:
                //Actualiza el parametro de busqueda tipo
                return {
                    ...state,
                    userSearch: {
                        ...state.userSearch,
                        type: !state.userSearch.type,
                    }
                }
            case CLEAR_CHECKED:
                //Actualiza el todos los parametros de busqueda
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
                //Actualiza el mensaje de error
                return {
                    ...state,
                    errorMessage: action.payload,
                }
        default:
            return {...state};
    }
}

export default result
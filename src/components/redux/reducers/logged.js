//Peticiones a la api
import {apiPostData} from '../../lib/api';

//Acciones para modificar los estados
import {
    getAuthentication,
    setMessage,
    setLogout,
    setLogin} from '../actions/actionLogin';

//Constantes que nos indican que acciones se van a ejecutar
import {

    LOGIN,
    LOGOUT,
    SETPWD,
    SETUSER,
    SETMSG,
    GET_AUTHENTICATION
} from '../actions/actionLogin';


//Estado inicial
const stateInitial = {
    username: '',
    password: '',
    logged: false,
    message: '',
    token: '',
}

export const fetchGetAuthentication = (userData)=> {
    //Comprueba la autentificacion de usuario
    return(dispatch)=>{
    apiPostData('/login', userData)
    .then(response =>{
        if (response.ok){
            return response.text()
        } else {
            dispatch(setMessage('El Usuario o Contraseña ingresado, no son validos'));
            dispatch(setLogout());
        }
    } )
    .then(resText => {
        if (resText !== undefined){
            dispatch(getAuthentication(resText));
            dispatch(setLogin());
            console.log('quitar user y pass de la caja... reducer-logged')
        }
        
    })
    .catch(res => {
        console.log('error: ',res);
    })
    
}}


const logged = (state=  stateInitial, action) => {
    //Devuelve un nuevo objeto con estado actualizado
    switch(action.type){

        case SETPWD:
            //Actualiza la contraseña
            return {
                ...state,
                password: action.payload,
            }
        case SETUSER:
            //Actualiza el usuario
            return {
                ...state,
                username: action.payload,
            }
        case LOGIN:
            //Actualiza a estado logueado
            return {
                ...state,
                logged: action.payload,
            };
        case LOGOUT:
            //Actualiza a estado deslogueado
            return {
                ...state,
                logged: action.payload,
            };
        case SETMSG:
            //Actualiza un mensaje de error
            return {
                ...state,
                message: action.payload,
            }
        case GET_AUTHENTICATION:
            //Guarda el token de seguridad en el local storage
             localStorage.setItem("token", action.payload);
            return {
                ...state,
            }
        default: 
            return {...state};    
    }
}

export default logged
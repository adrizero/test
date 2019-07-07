// Constantes que indican la accion a ejecutar
export const GET_AUTHENTICATION = 'GET_AUTHENTICATION';
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SETMSG = "SETMSG";
export const SETPWD = "SETPWD";
export const SETUSER = "SETUSER"


//acciones de login
export const setUsername = (user) => {
    //Solicita modificar el usuario
    return {
        type: SETUSER,
        payload: user,
    }
}

export const setPassword = (pwd) => {
    //Solicita modificar la contraseña
    return {
        type: SETPWD,
        payload: pwd
    }
}

export const  setMessage = (message) => {
    //Solicita guardar un mesaje de error
    return {
        type: SETMSG,
        payload: message,
    }
}

export const  setLogout = () => {
    //Solicita  el cierre de sesion
    return {
        type: LOGOUT,
        payload: false,
    }
}

export  const  setLogin = () => {
    //Solicita  la apertura de la sesion
    return {
        type: LOGIN,
        payload: true,
    }
}

export const getAuthentication = (res) => {
    //Solicita validar los datos de usuario
    return {
        type: GET_AUTHENTICATION,
        payload:res
     
}}


export const GET_AUTHENTICATION = 'GET_AUTHENTICATION';
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SETMSG = "SETMSG";
export const SETPWD = "SETPWD";
export const SETUSER = "SETUSER"

export const setUsername = (user) => {
    return {
        type: SETUSER,
        payload: user,
    }
}

export const setPassword = (pwd) => {
    return {
        type: SETPWD,
        payload: pwd
    }
}

export const  setMessage = (message) => {
    return {
        type: SETMSG,
        payload: message,
    }
}

export const  setLogout = () => {
    return {
        type: LOGOUT,
        payload: false,
    }
}

export  const  setLogin = () => {
    return {
        type: LOGIN,
        payload: true,
    }
}

export const getAuthentication = (res) => {
    return {
        type: GET_AUTHENTICATION,
        payload:res
     
}}


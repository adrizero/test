const BASEURL = 'http://vps-1575977-x.dattaweb.com:8080/atscom';

export const apiGetData = (q, fields) => {
    //Obtien todos los elementos Atms mediante una busqueda pasada por parametros
    let params = (fields === '') ? 
    'street,housenumber,postalcode,city,lat,lng,distance,type'
    :
    fields
    const url = BASEURL + '/atm?q='+ q + '&fields=' + params;
    const request = {
        method: 'GET',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            'Authorization': localStorage.getItem("token"),  
        },
    }
    return fetch(url, request)    
};



export const apiPostData = (type, userData) => {
    //Autentificacion del login
    const url = BASEURL + type;
    const request = {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    };
    return fetch(url, request)
    
};

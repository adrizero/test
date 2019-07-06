const BASEURL = 'http://vps-1575977-x.dattaweb.com:8080/atscom';

export const apiGetData = (q, fields) => {

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

export const apiUpdateData = (type, userData, id) => {

    const url = BASEURL + type + id;

    const request = {
        method: 'PUT',
        body: JSON.stringify(userData),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    };

    return fetch(url, request)
        .then(response => response.json())
};

export const apiDeleteData = (type, id) => {

    const url = BASEURL + type + id;

    const request = { method: 'DELETE' };

    return fetch(url, request)
        .then(response => response.json())
};








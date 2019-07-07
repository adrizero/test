export const GET_LAT = 'GET_LAT';
export const GET_LNG = 'GET_LNG';

export const getLng = () => {
    return {
        type: GET_LNG,
    }
}

export const getLat = () => {
    return {
        type: GET_LAT,
    }
}

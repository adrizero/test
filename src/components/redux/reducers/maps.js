// Se implementara en la proxima actualizacion :)
import {
    GET_LAT,
    GET_LNG,
} from '../actions/actionMap';

const stateInitial = {
    lat: '',
    lng: '',
}
const map = (state = stateInitial, action)=>{
    switch (action.type) {
        case GET_LAT:
            return {
                ...state
            }
        case GET_LNG:
            return {
                ...state
            }
    
        default:
            return {
                ...state
            }
    }
}

export default map
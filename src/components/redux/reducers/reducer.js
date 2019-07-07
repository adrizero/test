import {combineReducers} from 'redux';

//importamos los reducers y los combinamos
import logged from './logged';
import result from './result';
import map from './maps'

const reducers = combineReducers({
    logged,
    result,
    map,
    }
)

export default reducers
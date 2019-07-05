import {combineReducers} from 'redux';

//importamos los reducers
import logged from './logged';
import result from './result';

const reducers = combineReducers({
    logged,
    result,
    }
)

export default reducers
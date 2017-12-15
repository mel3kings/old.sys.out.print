import { combineReducers } from 'redux';
import TechReducer from './reducer_technologies';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    techReducer: TechReducer,
    form: formReducer
});

export default rootReducer;

import { combineReducers } from 'redux';
import TechReducer from './reducer_technologies';
import ToolsReducer from './reducer_tools';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    techReducer: TechReducer,
    toolsReducer: ToolsReducer,
    form: formReducer
});

export default rootReducer;

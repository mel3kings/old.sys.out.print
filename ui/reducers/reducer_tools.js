import {MAPS} from "../actions/action_tools_page";
import _ from 'lodash';
import ReactGA from 'react-ga';

export default function (state = {}, action) {
    console.log("EXECUTING " + action.type);
    switch (action.type) {
        case MAPS:
            return {...state, "marker" : action.payload.marker};
        default:
            return state;
    }
}
import {RENDER_TECH_PAGE, RENDER_TECH_LIST_PAGE, RENDER_CONTENT_PAGE, RENDER_TECH_PAGE_DETAILS} from "../actions/action_render_page";
import _ from 'lodash';

export default function (state={}, action){
    switch(action.type){
        case RENDER_TECH_PAGE:
            return _.mapKeys(action.payload.data, "id");
        case RENDER_TECH_PAGE_DETAILS:
            console.log("Reducer found: " + action.payload.name.toLowerCase());
            return {...state, [action.payload.name.toLowerCase()] : action.payload};
        case RENDER_TECH_LIST_PAGE:
            return {...state, "list" : _.mapKeys(action.payload, "id")}; // access directly since we did manipulation on action
        case RENDER_CONTENT_PAGE:
            return action.payload;
        default:
            return state;
    }
}
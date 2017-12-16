import {RENDER_TECH_PAGE, RENDER_TECH_LIST_PAGE} from "../actions/render_page";
import _ from 'lodash';

export default function (state={}, action){
    console.log("reducer registered, checking action type: " + action.type);
    switch(action.type){
        case RENDER_TECH_PAGE:
            console.log("RENDERING TECH PAGE ");
            console.log(_.mapKeys(action.payload.data, "id"));
            return _.mapKeys(action.payload.data, "id");
        case RENDER_TECH_LIST_PAGE:
            return _.mapKeys(action.payload, "id"); // access directly since we did manipulatioon on action
        default:
            return state;
    }
}
import {RENDER_TECH_PAGE} from "../actions/render_page";

export default function (state={}, action){
    console.log("reducer registered, checking action type: " + action.type);
    switch(action.type){
        case RENDER_TECH_PAGE:
            console.log("RENDERING TECH PAGE");
            return {...state}
        default:
            return state;
    }
}
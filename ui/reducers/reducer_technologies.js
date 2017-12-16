import {RENDER_TECH_PAGE, RENDER_TECH_LIST_PAGE, RENDER_CONTENT_PAGE} from "../actions/action_render_page";
import _ from 'lodash';

export default function (state={}, action){
    console.log("reducer registered, checking action type: " + action.type);
    switch(action.type){
        case RENDER_TECH_PAGE:
            return _.mapKeys(action.payload.data, "id");
        case RENDER_TECH_LIST_PAGE:
            return _.mapKeys(action.payload, "id"); // access directly since we did manipulatioon on action
        case RENDER_CONTENT_PAGE:
            console.log("ASDASd");
            console.log(action.payload)
            //console.log("TEST AGAIN" +action.payload.data.id);
          //  console.log("TERSTING " +action.payload.get(0));
            return action.payload;
        default:
            return state;
    }
}
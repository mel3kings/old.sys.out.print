import axios from 'axios';
import _ from 'lodash';

export const RENDER_TECH_PAGE = 'render_tech';
export const RENDER_TECH_LIST_PAGE = 'render_tech_list';
export const RENDER_CONTENT_PAGE ='render_content';

export function renderTechPage(){
    const request = axios.get('../data/tech_data.json');
    return{
        type :RENDER_TECH_PAGE,
        payload: request
    };
}

export function renderTechListPage(type){
     const filteredRequest = axios.get('../data/tech_list_data.json').then(response=>{
         return _.filter(response.data,  { 'type': type});
        }).then( res =>{
            console.log("filtered response: " + res);
            return res;
     });
    return{
        type:RENDER_TECH_LIST_PAGE,
        payload: filteredRequest
    };
}

export function renderContentPage(type, id){
    const filteredRequest = axios.get('/data/java_content_data.json').then(response=>{
        return _.filter(response.data,  { 'id': id});
    }).then( res =>{
        return  _.get(res, 0);
    });
    return{
        type:RENDER_CONTENT_PAGE,
        payload: filteredRequest
    };
}

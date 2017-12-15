import axios from 'axios';
export const RENDER_TECH_PAGE = 'render_tech';

export function renderTechPage(){
    console.log('fetching');
    const request = axios.get('../data/tech_data.json');
    console.log(request);
    return{
        type :RENDER_TECH_PAGE,
        payload: request
    };
}
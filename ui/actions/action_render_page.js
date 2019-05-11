import axios from 'axios';
import _ from 'lodash';

export const RENDER_TECH_PAGE = 'render_tech';
export const RENDER_TECH_PAGE_DETAILS = 'render_tech_page_details';
export const RENDER_TECH_LIST_PAGE = 'render_tech_list';
export const RENDER_CONTENT_PAGE = 'render_content';
export const RENDER_HOME_PAGE = 'render_home_page';
export const ANALYTICS = 'google_analytics';

export function renderHomePage(){
    const request = axios.get('data/home_page.json');
    console.log('triggered ' + request);
    return {
        type: RENDER_HOME_PAGE,
        payload: request
    }
}

export function renderTechPage() {
    const request = axios.get('data/tech_data.json');
    return {
        type: RENDER_TECH_PAGE,
        payload: request
    };
}

export function renderTechPageDetails(name) {
    const filteredRequest = axios.get('data/tech_data.json').then(response => {
        return _.filter(response.data, (a) => {
            return a.name.toLowerCase() == name.toLowerCase()
        });
    }).then(res => {
        return _.get(res, 0);
    });
    return {
        type: RENDER_TECH_PAGE_DETAILS,
        payload: filteredRequest
    };
}

export function renderTechListPage(type) {
    const filteredRequest = axios.get('../data/tech_list_data.json').then(response => {
        return _.filter(response.data, {'type': type});
    }).then(res => {
        console.log("filtered response: " + res);
        return res;
    });
    return {
        type: RENDER_TECH_LIST_PAGE,
        payload: filteredRequest
    };
}

export function renderContentPage(type, id) {
    try {
        let filteredRequest = axios.get('/get/' + type + '/' + id).then(response => {
            console.log(response);
            return response.data;
        }).catch(err => {

        });
        return {
            type: RENDER_CONTENT_PAGE,
            payload: filteredRequest
        };
    } catch (e) {
        console.log(e.toString());
    }
}

export function performAnalytics(url){
    return {
        type:ANALYTICS,
        payload:url
    };
}


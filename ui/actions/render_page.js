
export const RENDER_TECH_PAGE = 'render_tech';

export function renderTechPage(){
    const request = {'test':'Test'};
    return{
        type :RENDER_TECH_PAGE,
        payload: request
    };
}
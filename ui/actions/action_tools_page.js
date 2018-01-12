import axios from "axios";

export const MAPS = 'google_maps';
export function addMarker() {
    const config = {
        'marker': true
    };
    return {
        type: MAPS,
        payload: config
    };
}

export function removeMarker() {
    const config = {
        'marker': false
    };
    return {
        type: MAPS,
        payload: config
    }
}
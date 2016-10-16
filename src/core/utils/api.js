import axios from 'axios';
import qs from 'qs';

// load mock data if enabled
import './mock';

const {
    DEBUG,
    API_URL_DEV,
    API_URL,
    GOOGLE_MAPS_KEY
} = require('../constants').default;

const API_BASE_URL = DEBUG ? API_URL_DEV : API_URL;

// defaults for axios
const api = axios.create({
    baseURL: API_BASE_URL
});
// api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// api.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
api.interceptors.request.use((config) => {
    // Do something before request is sent
    console.log('%c Making Request:', 'color: #4CAF50; font-weight: bold', config);
    return config;
}, (error) => {
    // Do something with request error
    console.log('%c Request Error:', 'color: #EC6060; font-weight: bold', error);
    return Promise.reject(error);
});
// api.interceptors.response.use((response) => {
//     console.log('%c Response Success:', 'color: #4CAF50; font-weight: bold', response);
//     return response;
// }, (error) => {
//     console.log('%c Response Error:', 'color: #EC6060; font-weight: bold', error);
//     return Promise.reject(error);
// });

export function fetchApi(opts) {
    const data = (opts.method === 'get' || opts.method === 'GET') ? null : qs.stringify(opts.body);
    return api({
        method: opts.method,
        url: opts.url,
        params: opts.params,
        data
    });
}
export function locationData(name) {
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${name}&key=${GOOGLE_MAPS_KEY}`);
}

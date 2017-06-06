/* global FormData:true */
/* global XMLHttpRequest:true */

import axios from 'axios';
import lockr from 'lockr';
import { isUndefined } from 'underscore';
import randomstring from 'randomstring';

// load mock data if enabled
import './mock';

const {
    AUTH_KEY,
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
    return api(opts);
}

export function fetchApiAuth(opts) {
    return new Promise((resolve, reject) => {
        const authKey = lockr.get(AUTH_KEY);

        if (isUndefined(authKey)) {
            reject({
                response: {
                    status: 401,
                    data: {
                        message: 'Not logged in'
                    }
                }
            });
        } else {
            const myOpts = opts;
            myOpts.headers = myOpts.headers || {};
            myOpts.headers.Authorization = authKey;
            resolve(fetchApi(opts));
        }
    });
}


export function sendFile(file, signedRequest, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('PUT', signedRequest);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // console.log('uploaded', url);
                    resolve(url);
                } else {
                    reject('Could not upload file.');
                }
            }
        };
        xhr.send(file);
    });
}

export const uploadFile = async (file, path = 'images') => {
    const authKey = lockr.get(AUTH_KEY);
    const body = new FormData();
    body.append('file', file);

    const signData = await api({
        method: 'POST',
        url: '/sign-s3',
        data: {
            fileName: `${path}/${randomstring.generate(4)}-${file.name.replace(/\s+/g, '')}`,
            fileType: file.type
        },
        headers: {
            Authorization: authKey
        }
    });

    await sendFile(file, signData.data.signedRequest, signData.data.url);
    return signData.data;
};

export function locationData(name) {
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${name}&key=${GOOGLE_MAPS_KEY}`);
}

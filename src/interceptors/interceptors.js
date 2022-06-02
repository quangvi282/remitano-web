import axios from 'axios';
import { createBrowserHistory } from 'history';
import { whitelist } from '../security/config';
import { API_BASE_URL } from '../constants/constants';

const history = createBrowserHistory();
let isRefreshingToken = false;
let subscribers = [];

axios.interceptors.request.use((config) => {
        // add access token to requests
        const basePath = getBasePath(config.url);
        if (!whitelist.includes(basePath) && localStorage.getItem('token') !== null) {
            config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
            config.headers['Access-Control-Allow-Origin'] = '*';
        }
        return config;
    }, function (error) {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use((response) => {
        return response;
    }, function (error) {
        let res = error.response;
        if (res) {
            let responseURL = res.request.responseURL;
            switch(res.status) {
                case 500:
                    // if(responseURL.indexOf('api/programs'))
                    //     showNotification('error', 'Error Message', res.data.errorMessage);
                    // else history.push('/500');
                    break;
                case 400:
                    return res;
                // case 404:
                //     history.push('/404');
                //     break;
                case 401:
                    // try to refresh token then try again one more time
                    // const originalRequest = error.config;
                    // if (!isRefreshingToken) {
                    //     isRefreshingToken = true;
                    //     return refreshToken().then((res) => {
                    //         error.config.headers.Authentication = `Bearer ${res.access_token}` // set new token
                    //         isRefreshingToken = false;
                    //         onAccessTokenFetched(res.access_token);
                    //         return axios.request(error.config); // retry request
                    //     }).catch(err => {
                    //         if (err.response.status === 401) {
                    //             logOut();
                    //             history.push('/login');
                    //             isRefreshingToken = false;
                    //         }
                    //     });
                    // } else {
                    //     subscribers.push(accessToken => {
                    //         originalRequest.headers.Authorization = 'Bearer ' + accessToken;
                    //         axios.request(originalRequest);
                    //     });
                    // }
                    // break;
                    localStorage.clear();
                    let responseMess = {data : {status: {code: res.status, message: res.statusText}}}
                    return responseMess;
                default:
            }
        }
        return Promise.reject(error);
    }
);

function onAccessTokenFetched(accessToken) {
    subscribers.forEach(callback => callback(accessToken));
    subscribers = [];
}

function getBasePath(url) {
    let urlPath = url.includes(API_BASE_URL) ? url.replace(API_BASE_URL, '') : 'oembed';
    if (urlPath.startsWith('/')) {
        urlPath = urlPath.slice(1);
    }
    const parts = urlPath.split('/');
    return parts.length > 0 ? parts[0] : '';
}
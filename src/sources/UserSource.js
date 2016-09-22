import _ from 'underscore';
import axios from 'axios';
import lockr from 'lockr';

import Constants from '../lib/Constants';
import Helpers from '../lib/Helpers';

let UserSource = {
    fetch() {
        let authKey = lockr.get(Constants.AUTH_KEY);

        return new Promise((resolve, reject) => {
            if (_.isUndefined(authKey)) {
                return reject('User not logged in.');
            }

            axios.get(Helpers.apiUrl('user/view', {'access-token': authKey}))
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    },

    login(username, password) {
        return new Promise((resolve, reject) => {
            axios.post(Helpers.apiUrl('auth/login'),
                {username, password})
                .then(function (response) {
                    if (response.data.success) {
                        //set auth key
                        lockr.set(Constants.AUTH_KEY, response.data.auth_key);
                        resolve(response);
                    } else {
                        reject(response.msg);
                    }
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    },

    register(doc) {
        return new Promise((resolve, reject) => {
            axios.post(Helpers.apiUrl('auth/sign-up'), doc)
                .then(function (response) {
                    if (response.data.success) {
                        lockr.set(Constants.AUTH_KEY, response.data.auth_key);
                        resolve(response);
                    } else {
                        reject(response.msg);
                    }
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }
};

export default UserSource;

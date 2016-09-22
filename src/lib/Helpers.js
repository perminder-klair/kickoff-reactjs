import _ from 'underscore';

import Config from './Config';

module.exports = {
    apiUrl(url, params=null) {
        if (!_.isNull(params) && !_.isEmpty(params)) {
            let formBody = _.map(params, (num, key) => {
                let encodedKey = encodeURIComponent(key);
                let encodedValue = encodeURIComponent(num);
                return encodedKey + "=" + encodedValue;
            });

            formBody = formBody.join("&");
            url += '?' + formBody;
        }

        let apiUrl = Config.backend.DEBUG ? Config.backend.API_URL_DEV : Config.backend.API_URL;

        //console.log(apiUrl + url);
        return apiUrl + url;
    }
};

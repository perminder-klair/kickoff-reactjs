/*global Offline:true*/

import alt from '../lib/Alt';

class AppActions {
    addLoading() {
        return 1;
    }

    removeLoading() {
        return -1;
    }

    clearLoading() {
        return 0;
    }

    checkNetwork() {
        return true;
    }

    appFailed(errorMessage) {
        return errorMessage;
    }

    setBreadcrumb(breadcrumb) {
        return breadcrumb;
    }
}

module.exports = alt.createActions(AppActions);

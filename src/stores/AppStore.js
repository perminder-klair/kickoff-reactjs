import alertify from 'alertify.js';

import alt from '../lib/Alt';
import AppActions from '../actions/AppActions';

class AppStore {
    constructor() {
        this.bindListeners({
            handleLoading: [AppActions.addLoading, AppActions.removeLoading, AppActions.clearLoading],
            handleNetwork: AppActions.checkNetwork,
            handleAppFailed: AppActions.appFailed,
            handleSetBreadcrumb: AppActions.setBreadcrumb
        });

        this.state = {
            errorMessage: null,
            loading: true,//on app load make it loading ON
            loadingCount: 0,
            networkOnline: true,
            breadcrumb: []//{title: 'Home', path: '/'}
        };
    }

    handleLoading(count) {
        if (count !== 0) {
            count = this.state.loadingCount + count;
        }

        if (count < 0) {
            count = 0;
        }

        //console.log('loading count', count);
        this.setState({
            loadingCount: count,
            loading: count !== 0
        });
    }

    handleNetwork(networkOnline) {
        this.setState({networkOnline});
    }

    handleAppFailed(errorMessage) {
        console.error('app failed', errorMessage);
        alertify.error(errorMessage);
        this.setState({errorMessage});
    }

    handleSetBreadcrumb(breadcrumb) {
        this.setState({breadcrumb});
    }
}

module.exports = alt.createStore(AppStore, 'AppStore');

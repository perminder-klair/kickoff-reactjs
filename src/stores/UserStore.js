import alertify from 'alertify.js';

import alt from '../lib/Alt';
import UserActions from '../actions/UserActions';

class UserStore {
    constructor() {
        this.bindListeners({
            handleLogout: UserActions.logout,
            handleUsersFailed: UserActions.usersFailed,
            handleFetchUser: UserActions.fetchUser,
            handleUpdateUser: UserActions.updateUser
        });

        this.state = {
            errorMessage: null,
            isLoggedIn: false,
            isVerified: true,
            profile: {},
            id: null,
            email: null,
            displayName: null
        };
    }

    handleUsersFailed(errorMessage) {
        console.error('user failed', errorMessage);
        alertify.error(errorMessage);
        this.setState({
            errorMessage
        });
    }

    handleFetchUser() {
        this.setState({
            errorMessage: null,
            isLoggedIn: false,
            isVerified: true,
            profile: {},
            id: null
        });
    }

    handleUpdateUser(json) {
        this.setState(json);
    }

    handleLogout(json) {
        this.setState(json);
    }
}

module.exports = alt.createStore(UserStore, 'UserStore');

import lockr from 'lockr';
import alt from '../lib/Alt';

import Constants from '../lib/Constants';
import UserSource from '../sources/UserSource';
import AppActions from './AppActions';

class UserActions {
    fetchUser() {
        return (dispatch) => {
            // we dispatch an event here so we can have "loading" state.
            dispatch();
            AppActions.addLoading();
            UserSource.fetch()
                .then((res) => {
                    AppActions.removeLoading();
                    this.updateUser(res);
                })
                .catch((errorMessage) => {
                    AppActions.removeLoading();
                    this.usersFailed(errorMessage);
                });
        }
    }

    updateUser(user) {
        return {
            isLoggedIn: true,
            profile: user.profile,
            id: user.id,
            email: user.email,
            displayName: user.displayName
        };
    }

    login({username, password}) {
        return (dispatch) => {
            AppActions.addLoading();
            UserSource.login(username, password)
                .then(() => {
                    AppActions.clearLoading();
                    this.fetchUser();
                    dispatch(true);
                })
                .catch((errorMessage) => {
                    AppActions.clearLoading();
                    this.usersFailed(errorMessage);
                    dispatch(false);
                });
        }
    }

    register(doc, type, callback) {
        return (dispatch) => {
            AppActions.addLoading();
            UserSource.register(doc, type)
                .then((res) => {
                    AppActions.removeLoading();
                    this.fetchUser();
                    callback({success: true});
                    dispatch(true);
                })
                .catch((errorMessage) => {
                    AppActions.removeLoading();
                    this.usersFailed(errorMessage);
                    callback({success: false, msg: errorMessage.msg});
                    dispatch(false);
                });
        }
    }

    usersFailed(errorMessage) {
        return errorMessage;
    }

    logout() {
        //remove from local storage
        lockr.rm(Constants.AUTH_KEY);

        alt.recycle();

        setTimeout(() => {
            AppActions.clearLoading();
        }, 200);

        return {
            isLoggedIn: false
        };
    }
}

module.exports = alt.createActions(UserActions);
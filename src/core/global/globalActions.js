import keyMirror from 'key-mirror';
import { createActions } from 'redux-actions';

export const constants = keyMirror({
    REHYDRATION_COMPLETED: null,
    SET_VERSION: null,
    SET_BREADCRUMB: null
});

export const {
    setVersion,
    setBreadcrumb,
    rehydrationCompleted
} = createActions(constants.SET_VERSION, constants.SET_BREADCRUMB, constants.REHYDRATION_COMPLETED);

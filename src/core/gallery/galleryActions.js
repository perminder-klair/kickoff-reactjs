import { createActions } from 'redux-actions';
import keyMirror from 'key-mirror';

export const constants = keyMirror({
    GALLERY_REQUEST: null,
    GALLERY_SUCCESS: null,
    GALLERY_FAILURE: null
});

export const {
    galleryRequest,
    gallerySuccess,
    galleryFailure
} = createActions(constants.GALLERY_REQUEST, constants.GALLERY_SUCCESS, constants.GALLERY_FAILURE);

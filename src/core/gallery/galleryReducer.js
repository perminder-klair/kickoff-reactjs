import { createReducer } from 'reduxsauce';

import {
    Types,
} from './galleryActions';

// the initial state of this reducer
const initialState = {
    error: null,
    isFetching: false,
    data: []
};

const request = (state = initialState) => ({ ...state, error: null, isFetching: true });
// eslint-disable-next-line
const failure = (state = initialState, { payload }) => ({ ...state, error: payload, isFetching: false });

const getGallery = (state = initialState, { payload }) => {
    return {
        ...state,
        isFetching: false,
        lastUpdated: Date.now(),
        data: payload.data.data
    };
};

// map our action types to our reducer functions
const HANDLERS = {
    [Types.GALLERY_SUCCESS]: getGallery,

    [Types.GALLERY_REQUEST]: request,
    [Types.GALLERY_FAILURE]: failure,
};

export default createReducer(initialState, HANDLERS);

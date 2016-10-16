import { Record } from 'immutable';

const {
    GALLERY_REQUEST,
    GALLERY_SUCCESS,
    GALLERY_FAILURE
} = require('./galleryActions').constants;

const InitialState = Record({
    error: null,
    isFetching: false,
    data: []
});

const initialState = new InitialState();

/**
 * ## galleryReducer function
 * @param {Object} state - initialState
 * @param {Object} action - type and payload
 */
export default function galleryReducer(state = initialState, { payload, type }) {
    if (!(state instanceof InitialState)) return initialState.mergeDeep(state);

    switch (type) {
    case GALLERY_REQUEST:
        return state.set('isFetching', true)
                .set('error', null);

    case GALLERY_SUCCESS:
        return state.set('isFetching', false)
            .set('data', payload.data.data);

    case GALLERY_FAILURE:
        return state.set('isFetching', false)
                .set('error', payload);

    default:
        return state;

    }
}

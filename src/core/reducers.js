import { combineReducers } from 'redux';

import gallery from './gallery/galleryReducer';
import global from './global/globalReducer';

/**
 * ## CombineReducers
 *
 * the rootReducer will call each and every reducer with the state and action
 * EVERY TIME there is a basic action
 */
const rootReducer = combineReducers({
    gallery,
    global
});

export default rootReducer;

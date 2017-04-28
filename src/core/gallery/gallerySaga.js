import { call, put, takeEvery } from 'redux-saga/effects';

import { fetchApi } from '../utils/api';

import {
    gallerySuccess,
    galleryFailure
} from './galleryActions';

const {
    STACKABLE_KEY,
    GALLERY_CONTAINER
} = require('../constants').default;

const {
    GALLERY_REQUEST
} = require('./galleryActions').constants;

function* fetchGallery() {
    try {
        const response = yield call(fetchApi, {
            method: 'get',
            url: `/containers/${GALLERY_CONTAINER}/items`,
            params: { token: STACKABLE_KEY }
        });

        yield put(gallerySuccess(response));
    } catch (e) {
        yield put(galleryFailure(e.response ? e.response.data.message : e));
    }
}

/**
 * Watch actions
 */
export default function* gallerySaga() {
    yield* [
        takeEvery(GALLERY_REQUEST, fetchGallery)
    ];
}

import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { fetchApi } from '../utils/api';

import {
    gallerySuccess,
    galleryFailure
} from './galleryActions';

const {
    STACKABLE_KEY
} = require('../constants').default;

const {
    GALLERY_REQUEST
} = require('./galleryActions').constants;

function* fetchGallery() {
    try {
        const response = yield call(fetchApi, {
            method: 'get',
            url: '/gallery',
            parms: { stack: STACKABLE_KEY }
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

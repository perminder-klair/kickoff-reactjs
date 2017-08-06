import { call, put, takeEvery } from 'redux-saga/effects';

import { fetchApi } from '../utils/api';

import { Types, Creators } from './galleryActions';

const { STACKABLE_KEY, GALLERY_CONTAINER } = require('../constants').default;

function* fetchGallery() {
	try {
		const response = yield call(fetchApi, {
			method: 'get',
			url: `/containers/${GALLERY_CONTAINER}/items`,
			params: { token: STACKABLE_KEY },
		});

		yield put(Creators.gallerySuccess(response));
	} catch (e) {
		yield put(
			Creators.galleryFailure(e.response ? e.response.data.message : e),
		);
	}
}

/**
 * Watch actions
 */
export default function* gallerySaga() {
	yield* [takeEvery(Types.GALLERY_REQUEST, fetchGallery)];
}

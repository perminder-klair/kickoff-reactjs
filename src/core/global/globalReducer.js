import { createReducer } from 'reduxsauce';

import { Types } from './globalActions';

// the initial state of this reducer
const initialState = {
	version: null,
	breadcrumb: [],
	rehydrationCompleted: false,
	isFetching: false,
	error: null,
};

const setVersion = (state = initialState, { payload }) => ({
	...state,
	version: payload,
});

const setBreadcrumb = (state = initialState, { payload }) => ({
	...state,
	breadcrumb: payload,
});

const rehydrationCompleted = (state = initialState, { payload }) => ({
	...state,
	rehydrationCompleted: payload,
});

// map our action types to our reducer functions
const HANDLERS = {
	[Types.SET_VERSION]: setVersion,
	[Types.SET_BREADCRUMB]: setBreadcrumb,
	[Types.REHYDRATION_COMPLETED]: rehydrationCompleted,
};

export default createReducer(initialState, HANDLERS);

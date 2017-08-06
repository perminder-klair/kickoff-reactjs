import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const { MOCK } = require('../constants').default;

// This sets the mock adapter on the default instance
if (MOCK) {
	// mock data
	const mock = new MockAdapter(axios);

	mock.onGet('/gallery').reply(200, [{ id: 1, title: 'My first gallery.' }]);
}

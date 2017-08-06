import alertify from 'alertify.js';

export function trackError(e, showAlert = true) { // eslint-disable-line
	if (showAlert) {
		alertify.error(e.response ? e.response.data.message : e);
	}
}

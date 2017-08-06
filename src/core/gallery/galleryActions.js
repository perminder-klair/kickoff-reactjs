import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
	galleryRequest: ['payload'],
	gallerySuccess: ['payload'],
	galleryFailure: ['payload'],
});

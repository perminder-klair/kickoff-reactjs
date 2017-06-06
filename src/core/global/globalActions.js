import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
    setVersion: ['payload'],
    setBreadcrumb: ['payload'],
    rehydrationCompleted: ['payload'],
});

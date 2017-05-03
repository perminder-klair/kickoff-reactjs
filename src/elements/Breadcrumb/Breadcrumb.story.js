import React from 'react';
import { storiesOf, action } from '@kadira/storybook'; // eslint-disable-line
import Breadcrumb from './index';

storiesOf('Breadcrumb', module)
    .add('default', () => (
        <Breadcrumb data={[{ title: 'Blog', path: '/blog' }, { title: 'My first post', path: '/blog/my-first-post' }]} />
    ));

import React from 'react';
import { storiesOf } from '@kadira/storybook'; // eslint-disable-line
import Header from './index';

storiesOf('Header', module)
    .add('default', () => (
        <Header className="ui header">This is header</Header>
    ));

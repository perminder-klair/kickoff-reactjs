import React from 'react';
import { storiesOf } from '@kadira/storybook'; // eslint-disable-line
import SubHeader from './index';

storiesOf('SubHeader', module)
    .add('default', () => (
        <SubHeader className="ui header">This is sub-header</SubHeader>
    ));

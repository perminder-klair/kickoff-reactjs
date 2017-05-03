import React from 'react';
import { storiesOf, action } from '@kadira/storybook'; // eslint-disable-line
import LocationInput from './index';

storiesOf('LocationInput', module)
    .add('default', () => (
        <div className="ui form"><LocationInput name="name" label="a label" /></div>
    ));

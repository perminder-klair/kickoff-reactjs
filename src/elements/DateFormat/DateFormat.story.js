import React from 'react';
import { storiesOf, action } from '@kadira/storybook'; // eslint-disable-line
import DateFormat from './index';

storiesOf('DateFormat', module).add('default', () =>
	<DateFormat value="2017-01-11 09:59:19" />,
);

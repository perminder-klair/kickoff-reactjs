import React from 'react';
import { storiesOf, action } from '@kadira/storybook'; // eslint-disable-line
import DateField from './index';

storiesOf('DateField', module).add('default', () =>
	<div className="ui form">
		<DateField name="name" label="a label" />
	</div>,
);

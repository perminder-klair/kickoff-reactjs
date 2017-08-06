import React from 'react';
import { storiesOf } from '@kadira/storybook'; // eslint-disable-line
import Field from './index';

storiesOf('Field', module).add('default', () =>
	<div className="ui form">
		<Field name="name" label="a label">
			Some Input Control
		</Field>
	</div>,
);

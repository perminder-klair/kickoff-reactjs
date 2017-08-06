import React from 'react';
import { storiesOf, action } from '@kadira/storybook'; // eslint-disable-line
import TextField from './index';

storiesOf('TextField', module)
	.add('default', () =>
		<div className="ui form">
			<TextField name="name" label="a label" />
		</div>,
	)
	.add('with a value', () =>
		<div className="ui form">
			<TextField
				name="name"
				label="a label"
				onChange={action('change')}
				value="some value"
			/>
		</div>,
	)
	.add('with a placeholder', () =>
		<div className="ui form">
			<TextField
				name="name"
				label="a label"
				placeholder="this is a placeholder"
			/>
		</div>,
	)
	.add('disabled', () =>
		<div className="ui form">
			<TextField name="name" label="a label" disabled />
		</div>,
	)
	.add('disabled with a value', () =>
		<div className="ui form">
			<TextField
				name="name"
				label="a label"
				value="some value"
				disabled
			/>
		</div>,
	)
	.add('disabled with a placeholder', () =>
		<div className="ui form">
			<TextField
				name="name"
				label="a label"
				placeholder="this is a placeholder"
				disabled
			/>
		</div>,
	);

import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import '../../../node_modules/react-dates/lib/css/_datepicker.css';

import FieldWrapper from '../Field';
import RenderDateInput from './RenderDateInput';

const DateField = ({ label, name, ...restProps }) =>
	<FieldWrapper name={name} label={label}>
		<Field
			component={RenderDateInput}
			name={name}
			placeholderText={label}
			{...restProps}
		/>
	</FieldWrapper>;

DateField.defaultProps = {
	label: '',
};

DateField.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
};

export default DateField;

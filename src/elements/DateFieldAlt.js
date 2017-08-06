import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import { Field } from 'redux-form';
import styled from 'styled-components';

import '../../node_modules/react-datepicker/dist/react-datepicker.css';
import FieldWrapper from './Field';

const DatePickerStyled = styled(DatePicker)`
    &&&& {
        border-color: ${props => props.theme.borderColor};
        -webkit-box-shadow: ${props => props.theme.boxShadow} !important;
        -moz-box-shadow: ${props => props.theme.boxShadow} !important;
        box-shadow: ${props => props.theme.boxShadow} !important;
        padding: 1.2em 1.5em;
    }
`;

class DateFieldAlt extends Component {
	renderInput = ({
		input: { onChange, onBlur, value, ...restInput },
		...restProps
	}) => {
		const handleChange = date => {
			const formatted = moment(date).format('YYYY-MM-DDTHH:mm:ss.SSSSZ');
			// const formatted = `${moment(date).format('YYYY-MM-DD')}T00:00:00.000Z`;
			onChange(formatted);
		};

		return (
			<DatePickerStyled
				onChange={handleChange}
				selected={
					value
						? moment(value, 'YYYY-MM-DDTHH:mm:ss.SSSSZ')
						: moment()
				}
				{...restInput}
				{...restProps}
			/>
		);
	};

	render() {
		const { format, isClearable, name, label } = this.props;

		return (
			<FieldWrapper name={name} label={label}>
				<Field
					component={this.renderInput}
					name={name}
					isClearable={isClearable}
					dateFormat={format}
					placeholderText={label}
				/>
			</FieldWrapper>
		);
	}
}

DateFieldAlt.defaultProps = {
	format: 'DD/MM/YYYY',
	isClearable: false,
	label: '',
};

DateFieldAlt.propTypes = {
	name: PropTypes.string.isRequired,
	format: PropTypes.string,
	label: PropTypes.string,
	isClearable: PropTypes.bool,
};

export default DateFieldAlt;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import styled from 'styled-components';

const Container = styled.div`
	.SingleDatePicker,
	.DateInput {
		width: 100%;
	}
	.SingleDatePickerInput {
		border-radius: .29rem;
	}
	.DateInput {
		border-color: ${props => props.theme.borderColor};
		-webkit-box-shadow: ${props => props.theme.boxShadow} !important;
		-moz-box-shadow: ${props => props.theme.boxShadow} !important;
		box-shadow: ${props => props.theme.boxShadow} !important;
		border-radius: .29rem;
		input {
			padding: 1.2em 1.5em;
		}
	}
	.DateInput__display-text--focused {
		background: none;
		border-color: none;
		border-radius: 0;
		color: inherit;
	}
	.DateInput__display-text--has-input {
		font-size: 14px;
	}
`;

class RenderDateInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			focused: false,
		};
	}

	render() {
        const { input, meta, placeholderText, ...restProps } = this.props; // eslint-disable-line
		const { onChange, value } = input;

		return (
			<Container>
				<SingleDatePicker
					date={
						value
							? moment(value, 'YYYY-MM-DDTHH:mm:ss.SSSSZ')
							: moment()
					} // momentPropTypes.momentObj or null
					onDateChange={onChange}
					focused={this.state.focused}
					onFocusChange={({ focused }) => this.setState({ focused })}
					{...restProps}
				/>
			</Container>
		);
	}
}

RenderDateInput.propTypes = {
	input: PropTypes.object.isRequired,
};

export default RenderDateInput;

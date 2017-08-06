import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import styled from 'styled-components';

import FieldWrapper from './Field';

const Container = styled.div`
	border-color: ${props => props.theme.borderColor};
	-webkit-box-shadow: ${props => props.theme.boxShadow} !important;
	-moz-box-shadow: ${props => props.theme.boxShadow} !important;
	box-shadow: ${props => props.theme.boxShadow} !important;
	border-radius: 4px;
	.ui.label {
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
`;

const FieldStyled = styled(Field)`
    &&&&&& {
        padding: 1.2em 1.5em;
    }
`;

const CurrencyField = ({
	currency,
	disabled,
	label,
	name,
	type,
	hideLabel,
	className,
	...restProps
}) =>
	<FieldWrapper
		name={name}
		label={label}
		hideLabel={hideLabel}
		className={className}
	>
		<Container className="ui right labeled input">
			<div className="ui label">
				{currency}
			</div>
			<FieldStyled
				component="input"
				type={type}
				name={name}
				placeholder={label}
				disabled={disabled}
				{...restProps}
			/>
			<div className="ui basic label">.00</div>
		</Container>
	</FieldWrapper>;

CurrencyField.defaultProps = {
	label: '',
	disabled: false,
	type: 'text',
	hideLabel: false,
	className: 'field',
	currency: '£',
};

CurrencyField.propTypes = {
	disabled: PropTypes.bool,
	type: PropTypes.string,
	label: PropTypes.string,
	name: PropTypes.string.isRequired,
	hideLabel: PropTypes.bool,
	className: PropTypes.string,
	currency: PropTypes.string,
};

export default CurrencyField;

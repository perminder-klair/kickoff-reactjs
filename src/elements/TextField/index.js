import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import styled from 'styled-components';

import FieldWrapper from '../Field';

const FieldStyled = styled(Field)`
    &&&&&& {
        border-color: ${props => props.theme.borderColor};
        -webkit-box-shadow: ${props => props.theme.boxShadow} !important;
        -moz-box-shadow: ${props => props.theme.boxShadow} !important;
        box-shadow: ${props => props.theme.boxShadow} !important;
        padding: 1.2em 1.5em;
    }
`;

const TextField = ({
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
		<FieldStyled
			component="input"
			type={type}
			name={name}
			placeholder={label}
			disabled={disabled}
			{...restProps}
		/>
	</FieldWrapper>;

TextField.defaultProps = {
	label: '',
	disabled: false,
	type: 'text',
	hideLabel: false,
	className: 'field',
};

TextField.propTypes = {
	disabled: PropTypes.bool,
	type: PropTypes.string,
	label: PropTypes.string,
	name: PropTypes.string.isRequired,
	hideLabel: PropTypes.bool,
	className: PropTypes.string,
};

export default TextField;

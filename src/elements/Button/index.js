import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router';

const StyledButton = styled.button`
	&&& {
		box-shadow: ${props => props.theme.boxShadow};
		&.primary {
			background-color: ${props => props.theme.primary};
			&:hover {
				background-color: ${props => darken(0.1, props.theme.primary)};
			}
		}
	}
`;

const StyledLink = styled(Link)`
    &&& {
        box-shadow: ${props => props.theme.boxShadow};
        &.primary {
            background-color: ${props => props.theme.primary};
            &:hover {
                background-color: ${props => darken(0.1, props.theme.primary)};
            }
        }
    }
`;

const Button = ({
	type,
	size,
	children,
	fluid,
	right,
	left,
	color,
	loading,
	extra,
	isLink,
	className,
	...restProps
}) => {
	const classFinal = classNames(
		className,
		{ fluid },
		'ui',
		{ 'right floated': right },
		{ 'left floated': left },
		{ loading },
		color,
		type,
		size,
		extra,
		'button',
	);

	if (isLink) {
		return (
			<StyledLink className={classFinal} {...restProps}>
				{children}
			</StyledLink>
		);
	}

	return (
		<StyledButton className={classFinal} type="submit" {...restProps}>
			{children}
		</StyledButton>
	);
};

Button.defaultProps = {
	className: '',
	type: '',
	size: '',
	fluid: false,
	right: false,
	left: false,
	loading: false,
	color: '',
	extra: '',
	isLink: false,
};

Button.propTypes = {
	className: PropTypes.string,
	type: PropTypes.string,
	size: PropTypes.string,
	fluid: PropTypes.bool,
	right: PropTypes.bool,
	left: PropTypes.bool,
	loading: PropTypes.bool,
	children: PropTypes.node.isRequired,
	color: PropTypes.string,
	extra: PropTypes.string,
	isLink: PropTypes.bool,
};

export default Button;

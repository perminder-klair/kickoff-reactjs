import React from 'react';
import PropTypes from 'prop-types';

import Label from '../Label';

const Field = ({ children, label, name, hideLabel, className }) =>
	<div className={className}>
		{!hideLabel
			? <Label htmlFor={name}>
					{label}
				</Label>
			: null}
		{children}
	</div>;

Field.defaultProps = {
	hideLabel: false,
	className: 'field',
};

Field.propTypes = {
	children: PropTypes.node.isRequired,
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	hideLabel: PropTypes.bool,
	className: PropTypes.string,
};

export default Field;

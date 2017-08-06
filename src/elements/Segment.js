import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
	&& {
		border-color: #ffffff;
		border-radius: 0;
		box-shadow: none;
		padding: 3em;
	}
`;

const Segment = ({ children, className }) =>
	<Wrapper className={`ui segment ${className}`}>
		{children}
	</Wrapper>;

Segment.defaultProps = {
	className: '',
};

Segment.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

export default Segment;

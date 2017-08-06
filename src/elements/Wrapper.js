import React from 'react';
import styled from 'styled-components';

const WrapperStyled = styled.div``;

export default ({ children, ...props }) => ( // eslint-disable-line
) =>
	<WrapperStyled className="ui container" {...props}>
		{children}
	</WrapperStyled>;

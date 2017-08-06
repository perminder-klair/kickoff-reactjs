import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import _ from 'underscore';
import styled from 'styled-components';

import Wrapper from '../Wrapper';

const WrapperStyled = styled(Wrapper)`
    margin-top: 8px;
    margin-bottom: 10px;
`;

const Breadcrumb = ({ data }) =>
	<WrapperStyled className="ui container">
		<div className="ui breadcrumb">
			<Link className="section" to="/">
				Home
			</Link>
			{data.map((item, index) =>
				<span key={index}>
					<i className="right chevron icon divider" />
					{!_.isUndefined(item.path)
						? <Link className="section" to={item.path}>
								{item.title}
							</Link>
						: <div className="section active">
								{item.title}
							</div>}
				</span>,
			)}
		</div>
	</WrapperStyled>;

Breadcrumb.propTypes = {
	data: PropTypes.array.isRequired,
};

export default Breadcrumb;

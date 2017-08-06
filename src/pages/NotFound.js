import React from 'react';
import Helmet from 'react-helmet';

import { Wrapper } from '../elements';

const NotFound = () =>
	<Wrapper>
		<Helmet title="Not found" />
		<div className="ui icon message">
			<i className="warning sign icon" />
			<div className="content">
				<div className="header">Page not found</div>
				<p>Page your are looking for does not exists.</p>
			</div>
		</div>
	</Wrapper>;

export default NotFound;

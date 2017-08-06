import React from 'react';
import Helmet from 'react-helmet';

import { Wrapper } from '../../elements';

export default function() {
	return (
		<Wrapper>
			<Helmet title="About us" />
			<h3 className="ui top attached header">About us</h3>
			<div className="ui attached segment">
				<p>This is about page, coming soon!</p>
			</div>
		</Wrapper>
	);
}

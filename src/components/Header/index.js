import React from 'react';

import DOM from './header.jsx';

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.view = DOM;
	}

	render() {
		return this.view();
	}
}

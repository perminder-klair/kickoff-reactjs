import { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DOM from './about.jsx';
import { Creators as globalActions } from '../../core/global/globalActions';

class About extends Component {
	constructor(props) {
		super(props);
		this.view = DOM;
	}

	componentDidMount() {
		const { actions } = this.props;

		// set breadcrumb
		actions.setBreadcrumb([{ title: 'About' }]);
	}

	render() {
		return this.view();
	}
}

About.propTypes = {
	actions: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
	return {
		...ownProps,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(
			{
				...globalActions,
			},
			dispatch,
		),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(About);

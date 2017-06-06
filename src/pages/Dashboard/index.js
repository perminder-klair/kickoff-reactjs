import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Creators as globalActions } from '../../core/global/globalActions';
import { Creators as galleryActions } from '../../core/gallery/galleryActions';

import Loading from '../../elements/Loading';

import DOM from './dashboard';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.view = DOM;
    }

    componentDidMount() {
        const { actions } = this.props;

        // set breadcrumb
        actions.setBreadcrumb([{ title: 'Dashboard' }]);

        // load gallery
        actions.galleryRequest();
    }

    render() {
        const { global, gallery } = this.props;

        if (global.isFetching) {
            return <Loading />;
        }

        return this.view({ gallery });
    }
}

Dashboard.propTypes = {
    actions: PropTypes.object.isRequired,
    global: PropTypes.object.isRequired,
    gallery: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        global: state.global,
        gallery: state.gallery
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...globalActions,
            ...galleryActions
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

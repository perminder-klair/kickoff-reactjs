import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as globalActions from '../../core/global/globalActions';

import DOM from './layout';
import Loading from '../../elements/Loading';

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.view = DOM;
    }

    render() {
        const { rehydrationCompleted } = this.props;

        // wait until rehydration is completed by redux from local storage
        if (!rehydrationCompleted) {
            return <Loading />;
        }

        return this.view();
    }
}

Layout.propTypes = {
    rehydrationCompleted: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        rehydrationCompleted: state.global.rehydrationCompleted,
        breadcrumb: state.global.breadcrumb
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...globalActions
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

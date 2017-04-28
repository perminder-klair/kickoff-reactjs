import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as globalActions from '../../core/global/globalActions';

import DOM from './app';
import Loading from '../Loading';

class App extends React.Component {
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

export default connect(mapStateToProps, mapDispatchToProps)(App);

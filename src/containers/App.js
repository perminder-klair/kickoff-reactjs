import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as globalActions from '../core/global/globalActions';

import AppComponent from '../components/AppComponent';

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

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);

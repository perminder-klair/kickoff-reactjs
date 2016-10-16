import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as globalActions from '../core/global/globalActions';

import AboutPage from '../pages/About';

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...globalActions
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);

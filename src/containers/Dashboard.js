import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as globalActions from '../core/global/globalActions';
import * as galleryActions from '../core/gallery/galleryActions';

import DashboardPage from '../pages/Dashboard';

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);

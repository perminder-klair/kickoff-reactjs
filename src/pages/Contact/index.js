import { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as globalActions from '../../core/global/globalActions';

import DOM from './contact';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.view = DOM;
    }

    componentDidMount() {
        const { actions } = this.props;

        // set breadcrumb
        actions.setBreadcrumb([{ title: 'Contact' }]);
    }

    render() {
        return this.view({ global });
    }
}

Contact.propTypes = {
    actions: PropTypes.object.isRequired
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Contact);

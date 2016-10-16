import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

class Dashboard extends Component {
    componentDidMount() {
        const { actions } = this.props;

        // set breadcrumb
        actions.setBreadcrumb([{ title: 'Dashboard' }]);

        // load gallery
        actions.galleryRequest();
    }

    render() {
        return (
            <div className="ui container dashboard">
                <Helmet title="Dashboard" />
                <h3 className="ui top attached header">
                    Dashboard
                </h3>
                <div className="ui attached segment">
                    <p>Welcome to react starting poing.</p>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    actions: PropTypes.object
};

export default Dashboard;

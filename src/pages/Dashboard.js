import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

import Loading from '../components/Loading';

class Dashboard extends Component {
    componentDidMount() {
        const { actions } = this.props;

        // set breadcrumb
        actions.setBreadcrumb([{ title: 'Dashboard' }]);

        // load gallery
        actions.galleryRequest();
    }

    render() {
        const { gallery } = this.props;
        // console.log('gallery', gallery);

        if (gallery.isFetching && gallery.data.length === 0) {
            return <Loading />;
        }

        return (
            <div className="ui container dashboard">
                <Helmet title="Dashboard" />
                <h3 className="ui top attached header">
                    Dashboard
                </h3>
                <div className="ui attached segment">
                    <p>Welcome to tikkie.</p>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    actions: PropTypes.object,
    gallery: PropTypes.object
};

export default Dashboard;

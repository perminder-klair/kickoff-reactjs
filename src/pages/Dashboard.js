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
                    <p>Welcome to react starting poing.</p>
                    <div className="ui divider" />

                    <div className="ui medium header">Gallery</div>
                    <div className="ui small images">
                        {gallery.data.length === 0 ?
                            <p>No gallery images found</p>
                            :
                                gallery.data.map(item =>
                                    <img src={item.data.image.url} alt={item.data.title} />
                        )}
                    </div>
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

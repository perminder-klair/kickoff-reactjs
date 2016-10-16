import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

class Contact extends Component {
    componentDidMount() {
        const { actions } = this.props;

        // set breadcrumb
        actions.setBreadcrumb([{ title: 'Contact' }]);
    }

    render() {
        return (
            <div className="ui container contact">
                <Helmet title="Contact us" />
                <h3 className="ui top attached header">
                    Contact us
                </h3>
                <div className="ui attached segment">
                    <p>This is contact page, coming soon!</p>
                </div>
            </div>
        );
    }
}

Contact.propTypes = {
    actions: PropTypes.object
};

export default Contact;

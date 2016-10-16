import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

class About extends Component {
    componentDidMount() {
        const { actions } = this.props;

        // set breadcrumb
        actions.setBreadcrumb([{ title: 'About' }]);
    }

    render() {
        return (
            <div className="ui container about">
                <Helmet title="About us" />
                <h3 className="ui top attached header">
                    About us
                </h3>
                <div className="ui attached segment">
                    <p>This is about page, coming soon!</p>
                </div>
            </div>
        );
    }
}

About.propTypes = {
    actions: PropTypes.object
};

export default About;

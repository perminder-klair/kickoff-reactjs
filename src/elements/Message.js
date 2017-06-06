import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ title }) => (
    <div className="ui message">
        <div className="header">
            {title}
        </div>
    </div>
);

Message.propTypes = {
    title: PropTypes.node.isRequired
};

export default Message;

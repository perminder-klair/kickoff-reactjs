import React, { PropTypes } from 'react';

const Field = ({ children, label, name }) => (
    <div className="field">
        <label htmlFor={name}>
            {label}
        </label>
        { children }
    </div>
);

Field.propTypes = {
    children: React.PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default Field;

import React, { PropTypes } from 'react';

const FileInputGroup = (props) => (
    <div className="field">
        <label>{props.label}</label>
        <input
            type="file"
            placeholder={props.label}
            {...props} />
    </div>
);

FileInputGroup.propTypes = {
    label: PropTypes.string.isRequired
};

export default FileInputGroup;

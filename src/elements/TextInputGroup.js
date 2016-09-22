import React, { PropTypes } from 'react';

const TextInputGroup = (props) => {
    return (
        <div className="field">
            <label>{props.label}</label>
            <input
                placeholder={props.label}
                {...props}/>
        </div>
    )
};

TextInputGroup.propTypes = {
    label: PropTypes.string.isRequired
};

export default TextInputGroup;
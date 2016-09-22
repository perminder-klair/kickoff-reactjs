import React, { PropTypes } from 'react';

const TextAreaGroup = (props) => {
    return (
        <div className="field">
            <label>{props.label}</label>
            <textarea
                placeholder={props.label}
                {...props}/>
        </div>
    )
};

TextAreaGroup.propTypes = {
    label: PropTypes.string.isRequired
};

export default TextAreaGroup;
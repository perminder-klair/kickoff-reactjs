import React, { PropTypes } from 'react';

import Field from '../Field';

const TextField = ({ disabled, label, name, placeholder, value, onChange,
}) => (
    <Field name={name} label={label}>
        <input
            disabled={disabled}
            onChange={onChange}
            id={name}
            name={name}
            placeholder={placeholder}
            type="text"
            value={value} />
    </Field>
);

TextField.defaultProps = {
    disabled: false
};

TextField.propTypes = {
    disabled: PropTypes.bool,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string, // eslint-disable-line
    onChange: PropTypes.func, // eslint-disable-line
    value: PropTypes.oneOfType([ // eslint-disable-line
        React.PropTypes.string,
        React.PropTypes.number,
    ]),
};

export default TextField;

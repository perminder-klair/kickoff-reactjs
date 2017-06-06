import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import FieldWrapper from '../Field';
import TextFieldInput from './TextFieldInput';

const MultiTextField = ({ label, name, type, hideLabel, className }) => (
    <FieldWrapper
        name={name}
        label={label}
        hideLabel={hideLabel}
        className={className}>
        <Field
            component={TextFieldInput}
            type={type}
            name={name} />
    </FieldWrapper>
);

MultiTextField.defaultProps = {
    label: '',
    type: 'text',
    hideLabel: false,
    className: 'field'
};

MultiTextField.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    hideLabel: PropTypes.bool,
    className: PropTypes.string
};

export default MultiTextField;

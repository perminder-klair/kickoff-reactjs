import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import styled from 'styled-components';

import Label from './Label';

const FieldStyled = styled(Field)``;

const CheckboxField = ({ disabled, label, name }) => (
    <div className="field">
        <div className="ui checkbox">
            <FieldStyled
                component="input"
                type="checkbox"
                name={name}
                disabled={disabled} />
            <Label htmlFor={name}>{label}</Label>
        </div>
    </div>
);

CheckboxField.defaultProps = {
    disabled: false,
};

CheckboxField.propTypes = {
    disabled: PropTypes.bool,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default CheckboxField;

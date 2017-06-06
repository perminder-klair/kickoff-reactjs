import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { map } from 'underscore';
import styled from 'styled-components';

import FieldWrapper from './Field';

const FieldStyled = styled(Field)`
    &&& {
        border-color: ${props => props.theme.borderColor};
        -webkit-box-shadow: ${props => props.theme.boxShadow} !important;
        -moz-box-shadow: ${props => props.theme.boxShadow} !important;
        box-shadow: ${props => props.theme.boxShadow} !important;
        height: 52px;
    }
`;

const SelectField = ({ disabled, label, name, options }) => (
    <FieldWrapper name={name} label={label}>
        <FieldStyled
            component="select"
            name={name}
            disabled={disabled}
            className="ui fluid dropdown">
            {map(options, (value, key) => (
                <option
                    key={key}
                    value={key}>{value}</option>
            ))}
        </FieldStyled>
    </FieldWrapper>
);

SelectField.defaultProps = {
    disabled: false,
    options: []
};

SelectField.propTypes = {
    disabled: PropTypes.bool,
    options: PropTypes.object,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default SelectField;

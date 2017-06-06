import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isArray } from 'underscore';

const Input = styled.input`
    &&&&&& {
        border-color: ${props => props.theme.borderColor};
        -webkit-box-shadow: ${props => props.theme.boxShadow} !important;
        -moz-box-shadow: ${props => props.theme.boxShadow} !important;
        box-shadow: ${props => props.theme.boxShadow} !important;
        padding: 1.2em 1.5em;
        margin-bottom: 1em;
    }
`;

class TextFieldInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: isArray(props.input.value) ? props.input.value : ['']
        };
    }

    componentDidUpdate() {
        const { input } = this.props;
        const { value } = this.state;

        if (isArray(input.value) && (input.value.length !== value.length)) {
            this.setState({ value: input.value });
        }
    }

    handleAdd = () => {
        const { value } = this.state;
        value.push('');
        this.setState({ value });
    };

    handleChange = (index, e) => {
        const { input: { onChange } } = this.props;
        const { value } = this.state;

        value[index] = e.target.value;
        this.setState({ value });
        onChange(value);
    };

    render() {
        const { type } = this.props;
        const { value } = this.state;

        return (
            <span>
                {value.map((item, index) => (
                    <Input
                        key={index}
                        type={type}
                        onChange={this.handleChange.bind(this, index)}
                        value={item} />
                ))}
                <a className="ui basic mini button" onClick={this.handleAdd}>
                    <p>
                        <i className="add circle icon" />
                        Add another
                    </p>
                </a>
            </span>
        );
    }
}

TextFieldInput.defaultProps = {
    type: 'text',
};

TextFieldInput.propTypes = {
    input: PropTypes.object.isRequired,
    type: PropTypes.string,
};

export default TextFieldInput;

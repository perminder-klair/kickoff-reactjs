import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import alertify from 'alertify.js';
import { Field } from 'redux-form';
import styled from 'styled-components';

import FieldWrapper from '../Field';
import { uploadFile } from '../../core/utils/api';

const DropzoneStyled = styled(Dropzone)`
    width: 600px;
    height: 50px;
    border-width: 1px;
    border-color: ${props => props.theme.borderColor};
    border-style: dashed;
    border-radius: '5px';
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
`;

class FileInputField extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            isUpload: false
        };
    }

    renderInput = ({ input: { onChange, value }, placeholder, onChangeParent }) => {
        const { isUpload } = this.state;
        const { path } = this.props;

        const onDrop = (acceptedFiles) => {
            acceptedFiles.forEach((file) => {
                uploadFile(file, path)
                    .then((response) => {
                        // console.log('upload success', response);
                        onChange(response);
                        onChangeParent(response);
                        this.setState({ isUpload: true });
                    })
                    .catch((error) => {
                        console.log('upload error', error);
                        alertify.error('Unable to upload your image');
                    });
            });
        };

        return (
            <div>
                {value.length > 2 ? <p>Uploaded file: <a href={value} target="_blank" rel="noopener noreferrer">{value.split('/').pop()}</a></p> : null}
                <DropzoneStyled onDrop={onDrop.bind(this)}>
                    {!isUpload ?
                        <div>{placeholder}</div>
                    :
                        <div>File uploaded sucessfully.</div>
                    }
                </DropzoneStyled>
            </div>
        );
    };

    render() {
        const { name, label, placeholder, onChange } = this.props;

        return (
            <FieldWrapper name={name} label={label}>
                <Field
                    component={this.renderInput}
                    placeholder={placeholder}
                    name={name}
                    label={label}
                    onChangeParent={onChange} />
            </FieldWrapper>
        );
    }
}

FileInputField.defaultProps = {
    label: '',
    placeholder: 'Try dropping some files here, or click to select files to upload.',
    onChange: () => console.log('on change'),
    path: '',
};

FileInputField.propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    onChange: PropTypes.func,
    path: PropTypes.string
};

export default FileInputField;

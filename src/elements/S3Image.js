import React from 'react';
import PropTypes from 'prop-types';
import { isObject } from 'underscore';

const S3Image = ({ image, size, alt, ...restProps }) => {
    if (!isObject(image)) {
        return null;
    }

    return (
        <img
            alt={alt}
            src={`${image.staticEndpoint}/${size}/${image.fileName}`}
            {...restProps} />
    );
};

S3Image.defaultProps = {
    size: '200x200',
    alt: 's3-file'
};

S3Image.propTypes = {
    image: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]).isRequired,
    alt: PropTypes.string,
    size: PropTypes.string,
};

export default S3Image;

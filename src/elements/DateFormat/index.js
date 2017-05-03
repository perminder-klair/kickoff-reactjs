import React, { PropTypes } from 'react';
import moment from 'moment';

const DateFormat = ({ value, format }) => (
    <span>
        {moment(value).format(format)}
    </span>
);

DateFormat.defaultProps = {
    format: 'DD/MM/YYYY'
};

DateFormat.propTypes = {
    value: PropTypes.string.isRequired,
    format: PropTypes.string
};

export default DateFormat;

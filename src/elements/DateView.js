import React, { PropTypes } from 'react';
import moment from 'moment';

const DateView = ({ value, format }) => (
    <span>
        {moment(value).format(format)}
    </span>
);

DateView.defaultProps = {
    format: 'DD/MM/YYYY'
};

DateView.propTypes = {
    value: PropTypes.string.isRequired,
    format: PropTypes.string
};

export default DateView;

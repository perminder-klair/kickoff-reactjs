import React, { PropTypes } from 'react';
import { numberFormat } from 'underscore.string';
import _ from 'underscore';

const CurrencyFormat = ({ value, currency }) => {
    let val = value;
    if (_.isNull(value)) {
        val = 0;
    }

    return (
        <span>
            {currency}{numberFormat(parseFloat(val), 2)}
        </span>
    );
};

CurrencyFormat.defaultProps = {
    value: 0,
    currency: '£'
};

CurrencyFormat.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    currency: PropTypes.string
};

export default CurrencyFormat;

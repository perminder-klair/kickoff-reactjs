import React, { PropTypes } from 'react';
import { numberFormat } from 'underscore.string';
import _ from 'underscore';

const CurrencyView = ({value, currency}) => {
    if(_.isNull(value)) {
        value = 0;
    }

    return (
        <span>
            {currency}{numberFormat(parseFloat(value), 2)}
        </span>
    );
};

CurrencyView.defaultProps = {
    value: 0,
    currency: '£'
};

CurrencyView.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    currency: PropTypes.string
};

export default CurrencyView;
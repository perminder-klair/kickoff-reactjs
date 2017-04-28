import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Button = (props) => {
    let { type, size, ...restProps } = props;

    return (
        <button className={classNames('ui button', type, size)} type="submit" {...restProps}>
            {props.children}
        </button>
    )
};

Button.defaultProps = {
    type: '',
    size: ''
};

Button.propTypes = {
    type: PropTypes.string,
    size: PropTypes.string
};

export default Button;

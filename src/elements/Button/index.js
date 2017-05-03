import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Button = ({ type, size, children, ...restProps }) => (
    <button
        className={classNames('ui button', type, size)}
        type="submit"
        {...restProps}>
        {children}
    </button>
);

Button.defaultProps = {
    type: '',
    size: ''
};

Button.propTypes = {
    type: PropTypes.string,
    size: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default Button;

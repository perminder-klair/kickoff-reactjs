import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    && {
        border-color: ${props => props.theme.borderColor};
        -webkit-box-shadow: ${props => props.theme.boxShadow} !important;
        -moz-box-shadow: ${props => props.theme.boxShadow} !important;
        box-shadow: ${props => props.theme.boxShadow} !important;
    }
`;

const Card = ({ children, className }) => (
    <Wrapper className={`ui card ${className}`}>
        {children}
    </Wrapper>
);

Card.defaultProps = {
    className: ''
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

export default Card;

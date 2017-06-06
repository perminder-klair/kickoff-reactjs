import styled from 'styled-components';

export default styled.label`
    &&&& {
        color: ${props => props.theme.labelColor};
        font-weight: 300;
    }
`;

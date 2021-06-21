import styled from 'styled-components'

export const MainText = styled.h1`
    font-size: 8rem;
    font-weight: 400;

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
        font-size: 6rem;
    }
`

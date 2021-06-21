import styled from 'styled-components'

export const Background = styled.div`
    width: 100%;
    background: ${(props) => props.bg};
    padding-top: 10rem;
    padding-bottom: 5rem;
    position: relative;
    overflow: hidden;

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
        padding-top: 8rem;
    }
`

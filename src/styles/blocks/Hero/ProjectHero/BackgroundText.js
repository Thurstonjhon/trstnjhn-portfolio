import styled from 'styled-components'

export const BackgroundText = styled.div`
    position: absolute;
    font-size: 25rem;
    color: black;
    top: 0;
    left: 0;
    white-space: nowrap;
    font-weight: 800;
    text-transform: uppercase;

    // -webkit-text-stroke-width: 5px;
    // -webkit-text-stroke-color: ${(props) => props.theme.colors.black};
    opacity: 0.2;

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
        font-size: 8rem;
        top: 6rem;
    }
`

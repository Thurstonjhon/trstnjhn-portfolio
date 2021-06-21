import styled from 'styled-components'

export const BackgroundText = styled.div`
    position: absolute;
    font-size: 25rem;
    color: transparent;
    top: 0;
    left: 0;
    white-space: nowrap;
    font-weight: 800;
    text-transform: uppercase;

    -webkit-text-stroke-width: 5px;
    -webkit-text-stroke-color: ${(props) =>
        props.color ? props.color : '#000000'};

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
        font-size: 8rem;
        top: 6rem;
    }
`

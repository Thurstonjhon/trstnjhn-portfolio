import styled from 'styled-components'

export const Content = styled.div`
    max-width: 1240px;
    padding: ${(props) => props.theme.spacing.lg};
    margin: 0 auto;

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
        padding-bottom: 0;
    }
`

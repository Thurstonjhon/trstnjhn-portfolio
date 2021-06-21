import styled from 'styled-components'

export const Menu = styled.nav`
    display: flex;
`

export const MenuItem = styled.div`
    margin-right: ${(props) => props.theme.spacing.lg};

    &:last-child {
        margin-right: 0;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
        display: none;
    }
`

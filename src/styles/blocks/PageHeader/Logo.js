import styled from 'styled-components'

export const Logo = styled.div`
    display: flex;
    align-items: center;
`

export const LogoText = styled.span`
    margin-left: ${(props) => props.theme.spacing.sm};

    span {
        color: ${(props) => props.theme.colors.black};
        display: block;
        font-weight: 700;

        &:last-child {
            font-weight: 400;
            margin-bottom: 0;
        }
    }
`

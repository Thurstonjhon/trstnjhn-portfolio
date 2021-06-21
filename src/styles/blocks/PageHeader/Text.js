import styled from 'styled-components'

export const Text = styled.span`
    color: ${(props) => props.theme.colors.black};
    font-size: ${(props) => props.size}rem;
    font-weight: 400;
`

import styled from 'styled-components'

export const Typography = styled.span`
    display: block;
    color: ${(props) => (props.color ? props.color : props.theme.colors.black)};
    font-weight: ${(props) => (props.weight ? props.weight : 400)};
    font-size: ${(props) => (props.size ? `${props.size}rem` : 1)};
    margin-bottom: ${(props) => (props.mb ? `${props.mb}rem` : '0.5rem')};

    a {
        color: ${(props) =>
            props.color ? props.color : props.theme.colors.black};
        text-decoration: none;
        cursor: none;
    }
`

export const H1 = styled.h1``
export const H2 = styled.h2`
    font-size: ${(props) => props.size}rem;
    color: ${(props) => (props.color ? props.color : props.theme.colors.black)};
    font-weight: ${(props) => (props.weight ? props.weight : 400)};
    line-height: 1.1;
    margin-bottom: ${(props) => (props.mb ? `${props.mb}rem` : '1rem')};
`
export const H3 = styled.h1``
export const H4 = styled.h1``

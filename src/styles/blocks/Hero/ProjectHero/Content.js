import styled from 'styled-components'

export const Content = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: ${(props) => props.theme.spacing.lg};

    ${(props) =>
        props.np &&
        `
        padding: 0;
    `}
`

export const Info = styled.div`
    margin-top: ${(props) => props.theme.spacing.xl};
    padding-top: ${(props) => props.theme.spacing.lg};
`

export const Overview = styled.div`
    margin-top: 5rem;
    margin-bottom: 5rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
`

export const Header = styled.div``

export const Development = styled.div`
    margin-top: 5rem;
    margin-bottom: 5rem;
    padding-top: 5rem;
    border-top: 1px solid black;
`
export const Challenges = styled.div`
    margin-top: 5rem;
    margin-bottom: 5rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
    border-top: 1px solid black;
`

export const RichContent = styled.div`
    font-size: 1.5rem;
    line-height: 1.8;
`

export const Screenshots = styled.div`
    margin-bottom: 5rem;
`

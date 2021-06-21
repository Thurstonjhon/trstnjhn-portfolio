import styled from 'styled-components'

export const Line = styled.div`
    width: 1px;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    margin-right: 15rem;

    &:last-child {
        margin-right: 0;
    }

    @media (max-width: 1210px) {
        margin-right: 12rem;
    }

    @media (max-width: 960px) {
        margin-right: 9rem;
    }

    @media (max-width: 720px) {
        margin-right: 6rem;
    }

    @media (max-width: 480px) {
        margin-right: 4rem;
    }

    @media (max-width: 380px) {
        margin-right: 3rem;
    }
`

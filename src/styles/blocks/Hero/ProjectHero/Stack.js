import styled from 'styled-components'

export const StackWrapper = styled.div`
    display: flex;
    flex-wrapper: nowrap;
`

export const Stack = styled.div`
    padding: ${(props) => props.theme.spacing.xs};
    border: 2px solid ${(props) => props.theme.black};
    width: max-content;
    border-radius: 10px;
    margin-right: ${(props) => props.theme.spacing.sm};
    margin-bottom: 2rem;
    color: ${(props) => (props.color ? props.color : props.theme.colors.black)};

    &:last-child {
        margin-right: 0;
    }
`

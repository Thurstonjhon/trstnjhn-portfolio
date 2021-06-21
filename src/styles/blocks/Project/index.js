import styled from 'styled-components'
import { Image } from './Image'

const Project = styled.div`
    width: 100%;
    max-width: 1240px;
    margin: 0 auto;
    padding: ${(props) => props.theme.spacing.xl};
    background: ${(props) => props.bg};
    text-align: center;
    border-radius: 10px;
    margin-bottom: 7rem;
    overflow: hidden;
    display: flex;
    align-items: cennter;
    justify-content: center;

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
        margin-bottom: 3rem;
    }
`

Project.Image = Image

export default Project

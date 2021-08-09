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
    display: flex;
    align-items: cennter;
    justify-content: center;
    position: relative;

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
        margin-bottom: 3rem;
    }
`

const ProjectStatus = styled.div`
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: space-between;
    left: 0;
    top: -1.7rem;
`

Project.Image = Image
Project.Status = ProjectStatus

export default Project

import styled from 'styled-components'
import { Content } from './Content'

const Hero = styled.section`
    padding-top: 15rem;

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
        padding-top: 8rem;
    }
`

Hero.Content = Content

export default Hero

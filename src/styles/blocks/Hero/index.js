import styled from 'styled-components'
import { Content } from './Content'
import { MainText } from './MainText'

const Hero = styled.section`
    padding-top: 15rem;

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
        padding-top: 8rem;
    }
`

Hero.Content = Content
Hero.MainText = MainText

export default Hero

import Hero from 'styles/blocks/Hero'
import { Text } from 'styles/blocks/PageHeader/Text'
import { H2 } from 'styles/elements/Typography'

const HeroSection = ({ ...rest }) => {
    return (
        <Hero {...rest}>
            <Hero.Content data-scroll data-scroll-speed="-2">
                <H2 size={1}>Selected</H2>
                <Hero.MainText size={10}>Works</Hero.MainText>
            </Hero.Content>
        </Hero>
    )
}

export default HeroSection

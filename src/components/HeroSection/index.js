import Hero from 'styles/blocks/Hero'
import { Text } from 'styles/blocks/PageHeader/Text'
import { H2 } from 'styles/elements/Typography'

const HeroSection = ({ ...rest }) => {
    return (
        <Hero {...rest}>
            <Hero.Content data-scroll data-scroll-speed="-2">
                <Text size={1.5}>Selected</Text>
                <H2 size={10}>
                    Works <Text size={1.3}>as of 26/06/2021</Text>
                </H2>
            </Hero.Content>
        </Hero>
    )
}

export default HeroSection

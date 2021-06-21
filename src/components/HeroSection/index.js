import { motion } from 'framer-motion'
import Hero from 'styles/blocks/Hero'
import { H2 } from 'styles/elements/Typography'

const HeroSection = ({ title, subtitle, ...rest }) => {
    return (
        <Hero {...rest}>
            <Hero.Content data-scroll data-scroll-speed="-2">
                <H2
                    size={1}
                    as={motion.span}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 40, opacity: 0 }}
                >
                    {subtitle}
                </H2>
                <Hero.MainText
                    size={10}
                    as={motion.h1}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 40, opacity: 0 }}
                >
                    {title}
                </Hero.MainText>
            </Hero.Content>
        </Hero>
    )
}

export default HeroSection

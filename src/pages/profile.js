import MetaWeb from 'components/common/MetaWeb'
import { Store } from 'context/store'
import { useContext, useEffect, useRef } from 'react'

import HeroSection from 'components/HeroSection'
import { motion } from 'framer-motion'
import { Content } from 'styles/blocks/Hero/ProjectHero/Content'
import { Typography } from 'styles/elements/Typography'

const Profile = () => {
    const scrollRef = useRef(null)
    const { state, dispatch } = useContext(Store)
    const { scroll } = state

    useEffect(() => {
        let _scroll = null

        if (scroll.ls !== null && scrollRef.current !== null) {
            _scroll = new scroll.ls({
                el: scrollRef.current,
                smooth: true
            })

            if (scroll.position !== 0) _scroll.scrollTo(scroll.position)

            setTimeout(() => {
                _scroll.update()
            }, 100)
        }

        return () => {
            _scroll !== null && _scroll.destroy()
        }
    }, [scroll.ls])

    return (
        <motion.div ref={scrollRef} data-scroll-container>
            <MetaWeb title="Profile" />
            <HeroSection
                subtitle="Hi I'm"
                title="Thurston"
                data-scroll-section
                as={motion.section}
                exit={{ opacity: 0 }}
            />

            <Content>
                <Typography
                    size={2}
                    as={motion.span}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 40, opacity: 0 }}
                >
                    Frontend Developer from Philippines. I am developing web
                    applications with reactjs for around 4 years now, I've work
                    on a variety of web application projects such as Electronic
                    raffle entry registration, user interface for hardware
                    flippy, admin tools. Currently I am trying to learn how to
                    develop and optimize presentation websites with immersive
                    user experience.
                </Typography>
            </Content>
        </motion.div>
    )
}

export default Profile

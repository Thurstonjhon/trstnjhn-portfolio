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
                <Typography size={2}>I'm a Frontend Developer</Typography>
            </Content>
        </motion.div>
    )
}

export default Profile

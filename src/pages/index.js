import MetaWeb from 'components/common/MetaWeb'
import { Store } from 'context/store'
import { useContext, useEffect, useRef } from 'react'

import HeroSection from 'components/HeroSection'
import WorksSection from 'components/WorksSection'
import { motion } from 'framer-motion'
import { SET_SCROLL_POSITION } from 'context/action/actionTypes'
import { getClient } from 'contentful-api'

const Home = ({ projects }) => {
    const scrollRef = useRef(null)
    const { state, dispatch } = useContext(Store)
    const { scroll } = state

    useEffect(() => {
        let _scroll = null
        let _scrollPosition = 0

        if (scroll.ls !== null && scrollRef.current !== null) {
            _scroll = new scroll.ls({
                el: scrollRef.current,
                smooth: true,
                smartphone: {
                    smooth: true
                },
                initPosition: {
                    x: 0,
                    y: scroll.position
                }
            })

            // if (scroll.position !== 0) _scroll.scrollTo(scroll.position)

            _scroll.on('scroll', (args) => {
                _scrollPosition = args.scroll.y
            })

            setTimeout(() => {
                _scroll.update()
            }, 500)
        }

        return () => {
            _scroll !== null && _scroll.destroy()
            dispatch({ type: SET_SCROLL_POSITION, payload: _scrollPosition })
        }
    }, [scroll.ls])

    return (
        <motion.div ref={scrollRef} data-scroll-container>
            <MetaWeb title="Home" />
            <HeroSection
                subtitle="Selected"
                title="Works"
                data-scroll-section
                as={motion.section}
                exit={{ opacity: 0 }}
            />
            <WorksSection projects={projects} data-scroll-section />
        </motion.div>
    )
}

export const getStaticProps = async () => {
    const client = getClient()

    const res = await client.getEntries({ content_type: 'projects' })

    return {
        props: {
            projects: res.items
        }
    }
}

export default Home

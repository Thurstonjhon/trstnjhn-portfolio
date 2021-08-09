import Project from 'styles/blocks/Project'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { Store } from 'context/store'
import { cursors } from 'utils/common.const'
import { SET_CURSOR } from 'context/action/actionTypes'

import { H2 } from 'styles/elements/Typography'

const Work = ({ img, bg, slug, ongoing, year }) => {
    const router = useRouter()
    const { dispatch } = useContext(Store)

    // const hoverEvt = {
    //     onMouseEnter: () =>
    //         dispatch({
    //             type: SET_CURSOR,
    //             payload: cursors.VIEW
    //         }),

    //     onMouseLeave: () =>
    //         dispatch({
    //             type: SET_CURSOR,
    //             payload: cursors.DEFAULT
    //         })
    // }

    return (
        <Project
            as={motion.div}
            onClick={() => {
                router
                    .push(
                        {
                            pathname: `/work/${slug}`
                        },
                        null,
                        { scroll: false }
                    )
                    .then(() => {
                        dispatch({ type: SET_CURSOR, payload: cursors.DEFAULT })
                    })
            }}
            bg={bg}
            layoutId={slug}
            transition={{ duration: 1, ease: [0.6, 0.01, -0.05, 0.96] }}
            // {...hoverEvt}
        >
            <Project.Status>
                <H2 size={1} weight={800} mb={2}>
                    {ongoing ? 'ONGOING' : 'OLD'}
                </H2>
                <H2 size={1} weight={800} mb={2}>
                    {year}
                </H2>
            </Project.Status>

            <Project.Image
                as={motion.img}
                layoutId={`${slug}-img`}
                src={img}
                alt="Manila Cocktail Festival"
                transition={{ duration: 1, ease: [0.6, 0.01, -0.05, 0.96] }}
            />
        </Project>
    )
}

export default Work

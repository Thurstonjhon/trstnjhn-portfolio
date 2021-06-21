import Project from 'styles/blocks/Project'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { Store } from 'context/store'
import { cursors } from 'utils/common.const'
import { SET_CURSOR } from 'context/action/actionTypes'

import Link from 'next/link'

const Work = ({ img, bg, slug }) => {
    const router = useRouter()
    const { dispatch } = useContext(Store)

    const hoverEvt = {
        onMouseEnter: () =>
            dispatch({
                type: SET_CURSOR,
                payload: cursors.VIEW
            }),

        onMouseLeave: () =>
            dispatch({
                type: SET_CURSOR,
                payload: cursors.DEFAULT
            })
    }

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

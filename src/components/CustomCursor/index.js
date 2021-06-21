import { useContext, useEffect, useRef } from 'react'
import Cursor from 'styles/blocks/Cursor'
import {
    AnimateSharedLayout,
    motion,
    useMotionValue,
    useSpring
} from 'framer-motion'
import { Store } from 'context/store'
import { cursors } from 'utils/common.const'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

const CustomCursor = () => {
    const cursorRef = useRef(null)
    const { state } = useContext(Store)
    const {
        cursor: { cursorStyle }
    } = state

    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - cursorRef?.current.clientWidth / 2)
            cursorY.set(e.clientY - cursorRef?.current.clientHeight / 2)
        }

        window.addEventListener('mousemove', moveCursor)
        return () => {
            window.removeEventListener('mousemove', moveCursor)
        }
    }, [])

    return (
        <Cursor
            ref={cursorRef}
            as={motion.div}
            style={{
                translateX: cursorX,
                translateY: cursorY
            }}
        >
            <AnimateSharedLayout>
                {cursorStyle === cursors.DEFAULT && (
                    <Cursor.Default as={motion.div} layoutId="cursor" />
                )}
                {cursorStyle === cursors.SWIPER_GRAB && (
                    <Cursor.SwiperGrab as={motion.div} layoutId="cursor">
                        SWIPE
                    </Cursor.SwiperGrab>
                )}
                {cursorStyle === cursors.HOVERED && (
                    <Cursor.Hovered as={motion.div} layoutId="cursor" />
                )}
                {cursorStyle === cursors.VIEW && (
                    <Cursor.View as={motion.div} layoutId="cursor">
                        <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </Cursor.View>
                )}
            </AnimateSharedLayout>
        </Cursor>
    )
}

export default CustomCursor

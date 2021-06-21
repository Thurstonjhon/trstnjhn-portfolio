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

const CustomCursor = () => {
    const cursorRef = useRef(null)
    const { state } = useContext(Store)
    const {
        cursor: { cursorStyle }
    } = state

    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)
    const springConfig = { damping: 25, stiffness: 200 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)

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
                translateX: cursorXSpring,
                translateY: cursorYSpring
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
                    <Cursor.Hovered as={motion.div} layoutId="cursor">
                        SWIPE
                    </Cursor.Hovered>
                )}
            </AnimateSharedLayout>
        </Cursor>
    )
}

export default CustomCursor

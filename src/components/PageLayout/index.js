import { useContext, useEffect, useRef } from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/global'
import theme from 'utils/theme'

import { Store } from 'context/store'
import { SET_LS } from 'context/action/actionTypes'
import PageHeader from './PageHeader'
import PageFooter from './PageFooter'
import CustomCursor from 'components/CustomCursor'
import GridBackground from 'components/GridBg'

import 'locomotive-scroll/dist/locomotive-scroll.css'

const PageLayout = ({ children }) => {
    const scrollRef = useRef(null)
    const { dispatch } = useContext(Store)

    useEffect(() => {
        if (scrollRef?.current) {
            // let _scroll = null
            import('locomotive-scroll').then((locomotiveScroll) => {
                // _scroll = new locomotiveScroll.default({
                //     el: scrollRef.current,
                //     smooth: true,
                //     smartphone: {
                //         smooth: false
                //     },
                //     tablet: {
                //         smooth: true
                //     }
                // })
                dispatch({ type: SET_LS, payload: locomotiveScroll.default })
            })
        }
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <GlobalStyle />
            <GridBackground />
            <CustomCursor />
            <PageHeader />
            <main
                id="main"
                ref={scrollRef}
                style={{ position: 'relative', zIndex: 2 }}
            >
                {/* <AnimateSharedLayout type="crossfade"> */}
                {children}
                {/* </AnimateSharedLayout> */}
            </main>
            <PageFooter />
        </ThemeProvider>
    )
}

export default PageLayout

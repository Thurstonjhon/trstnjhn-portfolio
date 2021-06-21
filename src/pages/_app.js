import PageLayout from 'components/PageLayout'
import { StoreProvider } from 'context/store'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
    return (
        <StoreProvider>
            <PageLayout>
                <AnimateSharedLayout type="crossfade">
                    <AnimatePresence exitBeforeEnter>
                        <Component {...pageProps} key={router.route} />
                    </AnimatePresence>
                </AnimateSharedLayout>
            </PageLayout>
        </StoreProvider>
    )
}

export default MyApp

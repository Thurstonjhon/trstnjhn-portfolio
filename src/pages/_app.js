import PageLayout from 'components/PageLayout'
import { StoreProvider } from 'context/store'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
    return (
        <StoreProvider>
            <PageLayout>
                <AnimatePresence exitBeforeEnter>
                    <AnimateSharedLayout type="crossfade">
                        <Component {...pageProps} key={router.route} />
                    </AnimateSharedLayout>
                </AnimatePresence>
            </PageLayout>
        </StoreProvider>
    )
}

export default MyApp

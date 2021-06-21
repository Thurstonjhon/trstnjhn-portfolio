import PageLayout from 'components/PageLayout'
import { StoreProvider } from 'context/store'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import 'swiper/swiper.min.css'

function MyApp({ Component, pageProps, router }) {
    return (
        <StoreProvider>
            <PageLayout>
                <AnimateSharedLayout>
                    <AnimatePresence exitBeforeEnter>
                        <Component {...pageProps} key={router.route} />
                    </AnimatePresence>
                </AnimateSharedLayout>
            </PageLayout>
        </StoreProvider>
    )
}

export default MyApp

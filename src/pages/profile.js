import { motion } from 'framer-motion'
import Link from 'next/link'

const Profile = () => {
    return (
        <motion.div
            style={{ paddingTop: '25rem' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
        >
            <Link href="/simple">
                <h1>SIMPLE</h1>
            </Link>
        </motion.div>
    )
}

export default Profile

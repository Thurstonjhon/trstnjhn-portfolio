import Project from 'styles/blocks/Project'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Work = ({ img, bg, slug }) => {
    const router = useRouter()

    return (
        <Project
            as={motion.div}
            onClick={() =>
                router.push(
                    {
                        pathname: `/work/${slug}`
                    },
                    null,
                    { scroll: true }
                )
            }
            bg={bg}
            layoutId={slug}
            transition={{ duration: 1, ease: [0.6, 0.01, -0.05, 0.96] }}
            // whileHover={{
            //     scale: 0.95
            // }}
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

import ProjectHero from 'styles/blocks/Hero/ProjectHero'
import { motion } from 'framer-motion'
import { H2, Typography } from 'styles/elements/Typography'
import GridBackground from 'components/GridBg'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import { useContext, useEffect, useRef } from 'react'
import { Store } from 'context/store'
import { cursors } from 'utils/common.const'
import { SET_CURSOR } from 'context/action/actionTypes'

// const swiperBreakpoints = {
//     640: {
//         slidesPerView: 2,
//         spaceBetween: 20
//     },
//     768: {
//         slidesPerView: 2,
//         spaceBetween: 40
//     },
//     1024: {
//         slidesPerView: 2,
//         spaceBetween: 50
//     },
//     1920: {
//         slidesPerView: 2,
//         spaceBetween: 50
//     }
// }

const ProjectHeroSection = (props) => {
    const { dispatch } = useContext(Store)

    const { project, onImageLoaded } = props
    const {
        fields: {
            title,
            slug,
            role,
            active,
            stack,
            color,
            background,
            overview,
            challenges,
            development,
            screenshots,
            thumbnail: {
                fields: {
                    file: { url }
                }
            }
        }
    } = project

    const handleMouseIn = () => {
        dispatch({ type: SET_CURSOR, payload: cursors.SWIPER_GRAB })
    }

    const handleMouseOut = () => {
        dispatch({ type: SET_CURSOR, payload: cursors.DEFAULT })
    }

    return (
        <ProjectHero data-scroll-section>
            <GridBackground
                data-scroll
                data-scroll-sticky
                data-scroll-target="main"
            />
            <ProjectHero.Background
                as={motion.div}
                layoutId={slug}
                bg={background}
                transition={{ duration: 1, ease: [0.6, 0.01, -0.05, 0.96] }}
            >
                <div data-scroll data-scroll-speed="-3">
                    <ProjectHero.Header>
                        <ProjectHero.Content>
                            <H2
                                as={motion.h1}
                                initial={{ y: 140, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 140, opacity: 0 }}
                                transition={{ delay: 1, duration: 0.5 }}
                                size={4}
                                weight={800}
                                color={color}
                                mb={2}
                            >
                                {title}
                            </H2>
                            <Typography
                                as={motion.span}
                                initial={{ y: 140, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 140, opacity: 0 }}
                                transition={{ delay: 1.1, duration: 0.3 }}
                            >
                                <ProjectHero.StackWrapper>
                                    {stack.map((item) => (
                                        <ProjectHero.Stack
                                            key={item}
                                            color={color}
                                        >
                                            {item}
                                        </ProjectHero.Stack>
                                    ))}
                                </ProjectHero.StackWrapper>
                            </Typography>
                            <Typography
                                as={motion.span}
                                initial={{ y: 140, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 140, opacity: 0 }}
                                transition={{ delay: 1.2, duration: 0.3 }}
                                color={color}
                                mb={1}
                            >
                                STATUS: {active ? 'ACTIVE' : 'SERVICE ENDED'}
                            </Typography>
                            <Typography
                                color={color}
                                as={motion.span}
                                initial={{ y: 140, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 140, opacity: 0 }}
                                transition={{ delay: 1.3, duration: 0.3 }}
                            >
                                ROLE: {role}
                            </Typography>
                        </ProjectHero.Content>
                    </ProjectHero.Header>
                </div>
            </ProjectHero.Background>
            <ProjectHero.Content data-scroll data-scroll-speed="2">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    data-scroll
                    data-scroll-speed="-3"
                >
                    <ProjectHero.BackgroundText
                        as={motion.div}
                        color={color}
                        data-scroll
                        data-scroll-direction="horizontal"
                        data-scroll-speed="6"
                    >
                        <span>{title}</span>
                    </ProjectHero.BackgroundText>
                </motion.div>
                <ProjectHero.Image
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    as={motion.img}
                    src={url}
                    // layoutId={`${slug}-img`}
                    alt="Manila Cocktail Festival"
                    onLoad={() => onImageLoaded()}
                    transition={{
                        duration: 1.3,
                        ease: [0.6, 0.01, -0.05, 0.96]
                    }}
                />
                <ProjectHero.Overview data-scroll data-scroll-speed="2">
                    <Typography weight={600}>01 Overview</Typography>
                    <ProjectHero.Info.RichContent>
                        {documentToReactComponents(overview)}
                    </ProjectHero.Info.RichContent>
                </ProjectHero.Overview>
            </ProjectHero.Content>
            <ProjectHero.Screenshots>
                <ProjectHero.Content>
                    <Typography weight={600}>02 Screenshots</Typography>
                </ProjectHero.Content>
                <div onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={20}
                        pagination={{
                            clickable: true
                        }}
                        centeredSlides={true}
                        // breakpoints={swiperBreakpoints}
                        className="mySwiper"
                    >
                        {screenshots.map((screenshot) => (
                            <SwiperSlide key={screenshot.sys.id}>
                                <img
                                    style={{ width: '100%' }}
                                    src={screenshot.fields.file.url}
                                    alt={screenshot.fields.title}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </ProjectHero.Screenshots>
            <ProjectHero.Content>
                <ProjectHero.Development data-scroll data-scroll-speed="2">
                    <Typography weight={600}>03 Development</Typography>
                    <ProjectHero.Info.RichContent>
                        {documentToReactComponents(development)}
                    </ProjectHero.Info.RichContent>
                </ProjectHero.Development>

                <ProjectHero.Challenges data-scroll data-scroll-speed="2">
                    <Typography weight={600}>04 Challenge</Typography>
                    <ProjectHero.Info.RichContent>
                        {documentToReactComponents(challenges)}
                    </ProjectHero.Info.RichContent>
                </ProjectHero.Challenges>
            </ProjectHero.Content>
        </ProjectHero>
    )
}

export default ProjectHeroSection

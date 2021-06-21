import MetaWeb from 'components/common/MetaWeb'
import ProjectHeroSection from 'components/HeroSection/ProjectHeroSection'
import { getClient } from 'contentful-api'
import { SET_PROJECT } from 'context/action/actionTypes'
import { Store } from 'context/store'
import { useContext, useEffect, useRef } from 'react'

let _scroll = null

const ProjectPage = ({ project }) => {
    const scrollRef = useRef(null)

    const { state, dispatch } = useContext(Store)
    const { scroll } = state

    useEffect(() => {
        dispatch({ type: SET_PROJECT, payload: project })
    }, [project])

    useEffect(() => {
        if (scroll.ls !== null && scrollRef.current !== null) {
            _scroll = new scroll.ls({
                el: scrollRef.current,
                smooth: true
            })

            setTimeout(() => {
                _scroll.update()
            }, 100)
        }
        return () => _scroll !== null && _scroll.destroy()
    }, [scroll.ls])

    return (
        <>
            <MetaWeb title={project.fields.title} />
            <div ref={scrollRef} data-scroll-container>
                <ProjectHeroSection
                    onImageLoaded={() => _scroll.update()}
                    project={project}
                />
            </div>
        </>
    )
}

export const getStaticProps = async ({ params: { slug } }) => {
    const client = getClient()

    const res = await client.getEntries({
        content_type: 'projects',
        'fields.slug': slug
    })

    return {
        props: {
            project: res.items[0]
        }
    }
}

export const getStaticPaths = async () => {
    const client = getClient()

    const res = await client.getEntries({ content_type: 'projects' })

    const paths = res.items.map((item) => {
        return {
            params: {
                slug: item.fields.slug
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export default ProjectPage

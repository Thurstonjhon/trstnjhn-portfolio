import { projects } from 'projects'
import Works from 'styles/blocks/Works'
import Work from './Project'

const WorksSection = ({ projects, ...rest }) => {
    return (
        <Works {...rest}>
            {projects.map((project) => (
                <Work
                    key={project.sys.id}
                    slug={project.fields.slug}
                    bg={project.fields.background}
                    img={project.fields.thumbnail.fields.file.url}
                />
            ))}
        </Works>
    )
}

export default WorksSection

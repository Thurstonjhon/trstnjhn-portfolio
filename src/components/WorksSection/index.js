import Works from 'styles/blocks/Works'
import { H2 } from 'styles/elements/Typography'
import Work from './Project'

const WorksSection = ({ projects, ...rest }) => {
    return (
        <Works {...rest}>
            {projects.map((project) => (
                <>
                    <Work
                        year={project.fields.year}
                        ongoing={project.fields.ongoing}
                        key={project.sys.id}
                        slug={project.fields.slug}
                        bg={project.fields.background}
                        img={project.fields.thumbnail.fields.file.url}
                    />
                </>
            ))}
        </Works>
    )
}

export default WorksSection

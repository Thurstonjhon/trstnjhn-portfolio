import Head from 'next/head'
import PropTypes from 'prop-types'

const MetaWeb = (props) => {
    const { title, description, keywords, author } = props

    return (
        <Head>
            <title>{title} | Thurston Portfolio</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={!author ? 'Bloodline' : author} />
        </Head>
    )
}

MetaWeb.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
    author: PropTypes.string
}

export default MetaWeb

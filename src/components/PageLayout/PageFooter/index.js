import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCopyright, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SET_CURSOR } from 'context/action/actionTypes'
import { Store } from 'context/store'
import { useContext } from 'react'
import Footer from 'styles/blocks/PageFooter'
import { Typography } from 'styles/elements/Typography'
import { cursors } from 'utils/common.const'

const PageFooter = () => {
    const { dispatch } = useContext(Store)

    const hoverEvt = {
        onMouseEnter: () =>
            dispatch({
                type: SET_CURSOR,
                payload: cursors.HOVERED
            }),

        onMouseLeave: () =>
            dispatch({
                type: SET_CURSOR,
                payload: cursors.DEFAULT
            })
    }

    return (
        <Footer>
            <Footer.Connect>
                <Typography size={1.2} {...hoverEvt}>
                    <a href="mailto: design.thurston@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} />
                        Let's connect
                    </a>
                </Typography>
            </Footer.Connect>
            <Footer.Copyright>
                <Typography size={1.2}>
                    <FontAwesomeIcon icon={faCopyright} /> 2021
                </Typography>
            </Footer.Copyright>
        </Footer>
    )
}

export default PageFooter

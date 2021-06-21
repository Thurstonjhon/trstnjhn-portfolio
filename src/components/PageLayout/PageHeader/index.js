import { useContext } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { SET_CURSOR } from 'context/action/actionTypes'
import { Store } from 'context/store'

import Header from 'styles/blocks/PageHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowCircleLeft,
    faExternalLinkSquareAlt,
    faLongArrowAltLeft
} from '@fortawesome/free-solid-svg-icons'
import { cursors } from 'utils/common.const'

const PageHeader = () => {
    const { state, dispatch } = useContext(Store)
    const { header } = state
    const router = useRouter()

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

    if (router.pathname.includes('work')) {
        return (
            <Header>
                <Header.Back onClick={() => router.back()} {...hoverEvt}>
                    <FontAwesomeIcon icon={faLongArrowAltLeft} /> Back
                </Header.Back>

                <Header.Visit
                    onClick={() => window.open(header.project.fields.link)}
                    {...hoverEvt}
                >
                    <FontAwesomeIcon icon={faExternalLinkSquareAlt} /> Visit
                </Header.Visit>
            </Header>
        )
    }

    return (
        <Header data-scroll data-scroll-sticky data-scroll-target="main">
            <Header.Logo>
                <Image
                    src="/assets/logo-v2.png"
                    width="40"
                    height="40"
                    alt="Thruston"
                />
                <Header.LogoText {...hoverEvt}>
                    <span>Thurston</span>
                    <span>Frontend Developer</span>
                </Header.LogoText>
            </Header.Logo>
            <Header.Menu>
                <Header.MenuItem>
                    <Header.Text
                        onClick={() => router.push('/profile')}
                        size={1.2}
                        {...hoverEvt}
                    >
                        Profile
                    </Header.Text>
                </Header.MenuItem>
                <Header.MenuItem>
                    <Header.Text
                        onClick={() => router.push('/lab')}
                        size={1.2}
                        {...hoverEvt}
                    >
                        Lab
                    </Header.Text>
                </Header.MenuItem>
                <Header.MenuItem>
                    <Header.Text
                        onClick={() => router.push('/connect')}
                        size={1.2}
                        {...hoverEvt}
                    >
                        Connect
                    </Header.Text>
                </Header.MenuItem>
            </Header.Menu>
        </Header>
    )
}

export default PageHeader

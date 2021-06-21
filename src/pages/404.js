import MetaWeb from 'components/common/MetaWeb'
import { Store } from 'context/store'
import { useContext, useEffect, useRef } from 'react'

import HeroSection from 'components/HeroSection'
import { NotFoundWrapper } from 'styles/blocks/NotFound'
import Image from 'next/image'
import { Typography } from 'styles/elements/Typography'
const NotFound = () => {
    return (
        <NotFoundWrapper>
            <div>
                <Image
                    src="/assets/static/cat.png"
                    width="400"
                    height="300"
                    alt="cat"
                />
                <Typography size={1.5} weight={600}>
                    Are you lost my friend?
                </Typography>
                <Typography>
                    Looks like this url is under construction or does not really
                    exist.
                </Typography>
            </div>
        </NotFoundWrapper>
    )
}

export default NotFound

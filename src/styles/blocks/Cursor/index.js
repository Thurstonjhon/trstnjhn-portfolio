import styled from 'styled-components'
import { Default } from './Default'
import { Hovered } from './Hovered'
import { SwiperGrab } from './SwiperGrab'

const Cursor = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    z-index: 9999;
    pointer-events: none;
    width: max-content;
    mix-blend-mode: difference;

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
        display: none;
    }
`

Cursor.Default = Default
Cursor.SwiperGrab = SwiperGrab
Cursor.Hovered = Hovered

export default Cursor

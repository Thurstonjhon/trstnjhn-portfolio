import styled from 'styled-components'
import { Line } from './Line'

const GridBG = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    z-index: 1;
`

GridBG.Line = Line

export default GridBG

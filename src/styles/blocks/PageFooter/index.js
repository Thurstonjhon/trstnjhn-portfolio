import styled from 'styled-components'
import { Connect } from './Connect'
import { Copyright } from './Copyright'

const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    padding: ${(props) => props.theme.spacing.lg};
    padding-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    z-index: 5;
`

Footer.Connect = Connect
Footer.Copyright = Copyright

export default Footer

import styled from 'styled-components'

import { Logo, LogoText } from './Logo'
import { Text } from './Text'
import { Menu, MenuItem } from './Menu'
import { Back } from './Back'
import { Visit } from './Visit'

const Header = styled.header`
    padding: ${(props) => props.theme.spacing.lg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    width: 100%;
    z-index: 5;
    // background-image: linear-gradient(
    //     to top,
    //     rgba(255, 255, 255, 0),
    //     rgba(33, 13, 75, 1) 90%
    // );
`

Header.Menu = Menu
Header.MenuItem = MenuItem
Header.Logo = Logo
Header.LogoText = LogoText
Header.Text = Text
Header.Back = Back
Header.Visit = Visit

export default Header

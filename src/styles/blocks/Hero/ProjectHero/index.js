import styled from 'styled-components'
import { Image } from './Image'
import { Background } from './Background'
import {
    Content,
    Info,
    Overview,
    Screenshots,
    RichContent,
    Development,
    Challenges,
    Header
} from './Content'
import { BackgroundText } from './BackgroundText'
import { Stack, StackWrapper } from './Stack'

const ProjectHero = styled.section`
    position: relative;
    overflow: hidden;
`

ProjectHero.Background = Background
ProjectHero.BackgroundText = BackgroundText
ProjectHero.Image = Image
ProjectHero.Content = Content
ProjectHero.Info = Info
ProjectHero.Info.RichContent = RichContent
ProjectHero.Overview = Overview
ProjectHero.Header = Header
ProjectHero.Development = Development
ProjectHero.Challenges = Challenges
ProjectHero.Screenshots = Screenshots
ProjectHero.StackWrapper = StackWrapper
ProjectHero.Stack = Stack

export default ProjectHero

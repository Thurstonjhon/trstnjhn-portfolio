import Grid from 'styles/blocks/GridBg'

const GridBackground = ({ ...rest }) => {
    return (
        <Grid {...rest}>
            <Grid.Line />
            <Grid.Line />
            <Grid.Line />
            <Grid.Line />
            <Grid.Line />
            <Grid.Line />
        </Grid>
    )
}

export default GridBackground

import { Box } from 'grommet'
import { FunctionComponent } from 'react'

const AppBar: FunctionComponent = props => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: 1 }}
    {...props}
  />
)

export default AppBar

import { Grommet } from 'grommet'
import type { AppProps } from 'next/app'
import { FunctionComponent } from 'react'
import theme from 'styles/theme'
import GlogalStyles from '../styles/globals'

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <Grommet theme={theme}>
    <GlogalStyles />
    <Component {...pageProps} />
  </Grommet>
)

export default MyApp

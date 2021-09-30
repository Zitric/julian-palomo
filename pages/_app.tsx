import { Grommet } from 'grommet'
import type { AppProps } from 'next/app'
import { FunctionComponent } from 'react'
import 'styles/globals.css'
import theme from 'styles/theme'

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <Grommet theme={theme}>
    <Component {...pageProps} />
  </Grommet>
)

export default MyApp

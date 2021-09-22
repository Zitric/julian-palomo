import { Grommet } from 'grommet'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import theme from '../styles/theme.js'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Grommet theme={theme}>
      <Component {...pageProps} />
    </Grommet>
  )
}
export default MyApp

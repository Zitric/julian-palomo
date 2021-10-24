import Head from 'next/head'
import { FunctionComponent } from 'react'
import { Wrapper, Main } from '../../styles/styles'

export const siteTitle = 'My personal web site'

const Layout: FunctionComponent = ({ children }) => {
  return (
    <Wrapper>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Info about myself' />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Main>{children}</Main>
    </Wrapper>
  )
}

export default Layout

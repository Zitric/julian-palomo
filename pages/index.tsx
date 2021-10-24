import AppBar from 'components/shared/AppBar'
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Layer,
  ResponsiveContext,
} from 'grommet'
import { FormClose, Notification } from 'grommet-icons'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent, useState } from 'react'
import styles from 'styles/Home.module.css'
import { Main } from '../styles/styles'

const Home: FunctionComponent<NextPage> = () => {
  const [showSidebar, setShowSidebar] = useState(true)

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box fill>
          <Head>
            <title>My personal web</title>
            <meta name='description' content='Generated by create next app' />
          </Head>
          <AppBar>
            <Heading level='3' margin='none'>
              My fucking web
            </Heading>
            <Button
              icon={<Notification />}
              onClick={() => setShowSidebar(!showSidebar)}
            />
          </AppBar>
          <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
            <Box flex align='center' justify='center'>
              <Main>
                <Image
                  src='/images/profile.jpg'
                  height={144} // Desired size with correct aspect ratio
                  width={144} // Desired size with correct aspect ratio
                  alt='Your Name'
                />
                <h1 className={styles.title}>
                  Welcome to my new web in{' '}
                  <a href='https://nextjs.org'>Next.js!</a>
                </h1>
              </Main>
            </Box>
            {!showSidebar || size !== 'small' ? (
              <Collapsible direction='horizontal' open={showSidebar}>
                <Box
                  flex
                  width='medium'
                  background='light-2'
                  elevation='small'
                  align='center'
                  justify='center'
                >
                  <h1 className='title'>
                    Read{' '}
                    <Link href='/work'>
                      <a>my work!</a>
                    </Link>
                  </h1>
                </Box>
              </Collapsible>
            ) : (
              <Layer>
                <Box
                  background='light-2'
                  tag='header'
                  justify='end'
                  align='center'
                  direction='row'
                >
                  <Button
                    icon={<FormClose />}
                    onClick={() => setShowSidebar(false)}
                  />
                </Box>
                <Box fill background='light-2' align='center' justify='center'>
                  sidebar
                </Box>
              </Layer>
            )}
          </Box>
          <footer className={styles.footer}>
            <a
              href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
              target='_blank'
              rel='noopener noreferrer'
            >
              In construction
            </a>
          </footer>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  )
}
export default Home

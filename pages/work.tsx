import Head from 'next/head'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import Layout from '../components/shared/Layout'

const WorkPage: FunctionComponent = () => {
  return (
    <Layout>
      <Head>
        <title>My work experience</title>
      </Head>
      <h1>Work page</h1>
      <h2>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}

export default WorkPage

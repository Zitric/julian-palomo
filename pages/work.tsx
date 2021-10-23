import Link from 'next/link'
import { Fragment, FunctionComponent } from 'react'

const WorkPage: FunctionComponent = () => {
  return (
    <Fragment>
      <h1>Work page</h1>
      <h2>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </h2>
    </Fragment>
  )
}

export default WorkPage

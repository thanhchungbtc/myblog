import React from 'react'
import PostLayouts, {Layout} from '../../layouts'
import PageError from '../PageError'
import {Link} from 'react-router'

import PageLoading from '../PageLoading'



export default ({isLoading, page, hasError}) => {

  if (hasError) {
    return <PageError error={page.error} />
  }
  return (
      <Layout>
        {isLoading && <PageLoading />}
        {!isLoading &&
        page.node && <PostLayouts.default {...page.node}/>
        }
      </Layout>
  )
};

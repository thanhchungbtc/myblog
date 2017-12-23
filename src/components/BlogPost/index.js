import React from 'react'
import PostLayouts, {Layout} from '../../layouts'
import PageError from '../PageError'
import {Link} from 'react-router'

export default ({isLoading, page, hasError}) => {

  const PostLayout = (page.node && PostLayouts[page.node.layout]) || PostLayouts.default
  if (hasError) {
    return <PageError error={page.error} />
  }

  return (
      <Layout>  
        {isLoading && "Loading..."}
        {!isLoading &&
        page.node && <PostLayout {...page.node}/>
        }
        <footer>
          <Link to="/">Go to home</Link>
        </footer>
      </Layout>
  )
};

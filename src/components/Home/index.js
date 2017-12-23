import React from 'react'
import Head from 'react-helmet'
import {Layout} from '../../layouts'
import {Link} from 'react-router'

export default ({isLoading, posts}) => (
    <Layout>
      <Head>
        <title>Hello World</title>
        <meta name="description" content="Everything awesome"/>
      </Head>
      <h1>Home1</h1>
      {isLoading && "Loading..."}
      {
        !isLoading && (
            <ul>
              {posts &&
              posts.node &&
              posts.node.list &&
              posts.node.list.map(post => (
                  <li key={post.id}>
                    <Link to={`/posts/${post.id}`}>{post.title || post.id}</Link>
                  </li>
              ))}
            </ul>
        )
      }
      <div>
        {posts.node &&
        posts.node.hasPreviousPage && (
            <Link
                to={posts.node.previousPageIsFirst ? "/" : `/after/${posts.node.previous}`}
            >
              Newer posts
            </Link>
        )}
      </div>
      <div>
        {posts.node &&
        posts.node.hasNextPage && (
            <Link to={`/after/${posts.node.next}/`}>Older posts</Link>
        )}
      </div>
    </Layout>
)

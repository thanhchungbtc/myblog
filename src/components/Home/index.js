import React, {Component} from 'react'
import Head from 'react-helmet'
import {Layout} from '../../layouts'
import {Link} from 'react-router'
import FaAngleLeft from 'react-icons/lib/fa/angle-left'
import FaAngleRight from 'react-icons/lib/fa/angle-right'

export default class Home extends Component {

  render() {
    const {isLoading, posts} = this.props

    return (
        <Layout>
          <Head>
            <title>ThanhChungBTC Blog</title>
            <meta name="description" content="Everything awesome"/>
          </Head>
          <div className={"home"}>
            {isLoading && "Loading..."}
            {
              !isLoading && (
                  <div className={"posts"}>
                    {posts &&
                    posts.node &&
                    posts.node.list &&
                    posts.node.list.map(post => {
                      return (

                          <div className={"post-teaser"} key={post.id}>
                            <header>
                              <h1>
                                <Link className={"post-link"} to={`/posts/${post.id}`}>{post.title || post.id}</Link>
                              </h1>
                              <p className={"meta"}>{post.date}</p>
                            </header>
                            <div className="excerpt">

                              <p>{post.description}</p>
                              <Link className={"button"} to={`/posts/${post.id}`}>Continue</Link>
                            </div>

                          </div>
                      )

                    })}


                  </div>
              )
            }

            <div id={"post-nav"}>
              {posts.node &&
              posts.node.hasPreviousPage && (
                  <Link
                      id={"next-post"}
                      to={posts.node.previousPageIsFirst ? "/" : `/after/${posts.node.previous}`}
                  >
                    Newer posts<br/><FaAngleLeft />
                  </Link>
              )}
              {posts.node &&
              posts.node.hasNextPage && (

                  <Link
                      id={"prev-post"}
                      to={`/after/${posts.node.next}/`}>
                    Older posts<br/><FaAngleRight/>
                  </Link>
              )}
            </div>

          </div>
        </Layout>
    )
  }
}

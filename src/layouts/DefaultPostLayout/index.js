import React from 'react'
import {textRenderer, BodyRenderer} from '@phenomic/preset-react-app/lib/client'
import Head from 'react-helmet'
import {Link} from 'react-router'
import FaAngleLeft from 'react-icons/lib/fa/angle-left'
import FaAngleRight from 'react-icons/lib/fa/angle-right'

export default class DefaultPostLayout extends React.Component {
  render() {
    const {title, body, thumbnail, date} = this.props
    console.log(this.props)
    return (
        <div>
          <Head>
            <title>{title}</title>
            <meta name={"description"} content={textRenderer(body).slice(0, 150) + '...'}/>

          </Head>

          <article className="feature-image">
            <header className="call-out" style={{backgroundImage: `url('/type-theme/img/sample_feature_img_2.png')`}}>
              <h1 className="title">{title}</h1>
              <p className="meta" style={{color: 'white'}}>{date}</p>
            </header>
            <section className="post-content">
              <BodyRenderer>{body}</BodyRenderer>

            </section>
          </article>

        </div>
    )
  }
}
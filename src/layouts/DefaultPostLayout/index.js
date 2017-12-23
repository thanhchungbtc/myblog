import React from 'react'
import {textRenderer, BodyRenderer} from '@phenomic/preset-react-app/lib/client'
import Head from 'react-helmet'

export default ({title, body}) => (
    <article>
      <Head>
        <title>{title}</title>
        <meta name={"description"} content={textRenderer(body).slice(0, 150) + '...'}/>
      </Head>
      <h1>{title}</h1>
      <BodyRenderer>{body}</BodyRenderer>
    </article>
)

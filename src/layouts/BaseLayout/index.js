import React from 'react'
import Head from 'react-helmet'

export default ({children}) => (
    <div>
      <Head>
        <meta charSet={"utf-8"}/>
        <meta name={"viewport"} content={"width=device-width, initial-scale=1"}/>
      </Head>
      <header>{/**/}</header>
      <div>{children}</div>
      <footer>{/**/}</footer>
    </div>
)
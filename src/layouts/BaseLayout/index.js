import React from 'react'
import Head from 'react-helmet'
import Header from '../../components/Header'

export default ({children}) => (
    <div>
      <Head>
        <meta charSet={"utf-8"}/>
        <meta name={"viewport"} content={"width=device-width, initial-scale=1"}/>
      </Head>
      <Header />

      <div className={"content"}>{children}</div>
      <footer className="site-footer">
        <p className="text">Powered by <a href="https://phenomic.io/">Phenomic</a> with <a href="https://github.com/rohanchandra/type-theme">Type Theme</a>
        </p>
      </footer>
    </div>
)
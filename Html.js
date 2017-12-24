import React from 'react'
import Head from 'react-helmet'
import App from './App'
import './src/sass/type-theme.css'

export default ({App, render}) => {
  const {Main, State, Script, Style} = render(<App/>);
  const helmet = Head.renderStatic()
  console.log(Style)
  return (
      <html {...helmet.htmlAttributes.toComponent()}>
      <head>
        {helmet.meta.toComponent()}
        {helmet.title.toComponent()}
        {helmet.base.toComponent()}
        <Style/>
        {helmet.link.toComponent()}
        {helmet.style.toComponent()}
        {helmet.script.toComponent()}
        {helmet.noscript.toComponent()}
      </head>
      <body {...helmet.bodyAttributes.toComponent()}>
      <Main/>
      <State/>
      <Script/>
      </body>
      </html>
  )
}
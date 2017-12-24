import React from 'react'
import {
  createApp, renderApp,
} from "@phenomic/preset-react-app/lib/client";
import routes from './src/routes'
import './src/sass/type-theme-theme.css'

export default createApp(routes)

if (module.hot) {
  module.hot.accept(() => renderApp(routes))
}



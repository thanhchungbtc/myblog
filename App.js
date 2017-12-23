import React from 'react'
import {
  createApp, renderApp,
  createContainer,
  BodyRenderer,
  textRenderer
} from "@phenomic/preset-react-app/lib/client";

import Head from 'react-helmet'
import routes from './src/routes'

export default createApp(routes)

if (module.hot) {
  module.hot.accept(() => renderApp(routes))
}



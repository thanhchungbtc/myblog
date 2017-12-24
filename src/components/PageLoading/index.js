import React, { Component } from "react"
import Helmet from "react-helmet"
import TopBarProgressIndicator from "react-topbar-progress-indicator"

TopBarProgressIndicator.config({
  barColors: {
    "0": "#1ABC9C",
    "1.0": "#1ABC9C",
  },
  shadowBlur: 5,
})

export default class PageLoading extends Component {

  render() {
    return (
        <div>
          <Helmet
              title={ "Loading..." }
          />
          <TopBarProgressIndicator />
          <div className="loader">
            <div className="spinner" />
          </div>
        </div>
    )
  }
}
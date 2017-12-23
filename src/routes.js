import React from 'react'
import {Router, Route, browserHistory} from "react-router";
import {
  HomeContainer,
  BlogPostContainer
} from './containers'
import PageError from './components/PageError'

export default () => (
      <Router history={browserHistory}>
        <Route path="/" component={HomeContainer}/>
        <Route path={"/after/:after"} component={HomeContainer}/>
        <Route path="/posts/*" component={BlogPostContainer}/>
        <Route path={"*"} component={PageError} />
      </Router>
)

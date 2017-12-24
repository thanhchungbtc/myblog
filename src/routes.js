import React from 'react'
import {Router, Route, browserHistory} from "react-router";
import {
  HomeContainer,
  BlogPostContainer,
} from './containers'
import About from './components/About'
import PageError from './components/PageError'

export default () => (
      <Router history={browserHistory}>
        <Route path="/" component={HomeContainer}/>
        <Route path="/about" component={About}/>
        <Route path={"/after/:after"} component={HomeContainer}/>
        <Route path="/posts/*" component={BlogPostContainer}/>
        <Route path={"*"} component={PageError} />
      </Router>
)

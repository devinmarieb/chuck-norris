import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import Header from './components/Header/Header'
import ClickForJokes from './components/ClickForJokes/ClickForJokes'
import './reset.css'
import './styles'


const router = (
  <Router history={ browserHistory }>
    <Route path='/' component={ Header }>
      <IndexRoute component={ ClickForJokes }/>
    </Route>
  </Router>
)


render(router, document.querySelector('.application'));

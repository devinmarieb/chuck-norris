import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, browserHistory, IndexRedirect } from 'react-router'
import SubHeader from './components/SubHeader/SubHeader'
import Header from './components/Header/Header'
import Jokes from './components/Jokes/Jokes'
import Settings from './components/Settings/Settings'
import Favorites from './components/Favorites/Favorites'
import NavBar from './components/NavBar/NavBar'

import './reset.css'
import './styles'


const router = (
  <Router history={ browserHistory }>
    <Route path='/' component={ Header }>
      <IndexRedirect to='/jokes' />
      <Route path='/jokes' component={ Jokes }/>
      <Route path='/settings' component={ Settings } />
      <Route path='/favorites' component={ Favorites } />
    </Route>
  </Router>
)


render(router, document.querySelector('.application'));

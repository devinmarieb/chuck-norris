import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import Header from './components/Header/Header'
import SubHeader from './components/SubHeader/SubHeader'
import ClickForJokes from './components/ClickForJokes/ClickForJokes'
import Jokes from './components/Jokes/Jokes'
import Settings from './components/Settings/Settings'
import Favorites from './components/Favorites/Favorites'
import NavBar from './components/NavBar/NavBar'


import './reset.css'
import './styles'


const router = (
  <Router history={ browserHistory }>
    <Route path='/' component={ Header }>
      <IndexRoute component={ ClickForJokes} />
      <Route path='/jokes' component={ Jokes }/>
      <Route path='/settings' component={ Settings } />
      <Route path='/favorites' component={ Favorites } />
    </Route>
  </Router>
)


render(router, document.querySelector('.application'));

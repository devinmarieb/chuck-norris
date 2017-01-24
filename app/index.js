import React from 'react'
import { render } from 'react-dom'
import Header from './components/Header/Header'
import SubHeader from './components/SubHeader/SubHeader'
import './reset.css'
import './styles'

const App = () => {
  return (
    <div>
      <Header />
      <SubHeader />
    </div>
  );
}

render(<App />, document.querySelector('.application'));

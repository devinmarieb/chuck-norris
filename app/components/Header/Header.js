import React, { Component } from 'react'
import { Link } from 'react-router'
import Button from '../Button/Button'
import Input from '../Input/Input'
import SubHeader from '../SubHeader/SubHeader'
import NavBar from '../NavBar/NavBar'

import './header-style'


export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      input: 5,
      randomJoke: '',
      jokeList: [],
      favoritesList: [],
      firstName: 'Chuck',
      lastName: 'Norris',
      explicit: '',
    }
  }

  componentWillMount() {
    let jokeRequest = ('http://api.icndb.com/jokes/random?escape=javascript')
    fetch(jokeRequest).then((response)=> {
      return response.json();
    }).then((response)=> {
      this.setState({ randomJoke: response.value.joke })
    })
  }

  getNewJoke() {
    let jokeRequest = `http://api.icndb.com/jokes/random/${this.state.input}/?escape=javascript&firstName=${this.state.firstName}&lastName=${this.state.lastName}&${this.state.explicit}`
    fetch(jokeRequest).then((response)=> {
      return response.json();
    }).then((inputData)=> {
      this.setState({ jokeList: inputData.value })
    })
  }

  showText() {
    if(this.state.jokeList.length === 0 && window.location.pathname === '/jokes') {
      return (<p className='no-favorites'> Enter the number of jokes you want and then click Get Jokes! </p>)
    }
  }

  updateName(e) {
    let fullName = e.target.value.split(' ')
    this.setState({ firstName: fullName[0], lastName: fullName[1] })
  }

  updateInput(e) {
    this.setState({ input: e.target.value })
  }

  resetControls() {
    this.setState({ firstName: 'Chuck', lastName: 'Norris', explicit: '' })
  }

  toggleParental() {
    if(this.state.explicit === '' ) {
      this.setState({ explicit: 'limitTo=[explicit]' })
    } else {
      this.setState({ explicit: '' })
    }
  }

  render(){
    return (
      <section className='sub-container'>
        <SubHeader />
        <h1 className='chuck-quote'> {this.state.randomJoke} </h1>
        {window.location.pathname === '/jokes' ?
          <NavBar getNewJoke={ this.getNewJoke.bind(this) } updateInput={ this.updateInput.bind(this) } defaultJokes={ this.state.input } />
          : <div/> }
          {window.location.pathname === '/favorites' ?
            <Link to='/jokes'><Button className='favorites-btn' title='Jokes' /></Link>
            : <Link to='/favorites'><Button className='favorites-btn' title='Favorites' /></Link> }
        { this.showText() }
        { React.cloneElement(this.props.children,
                            { jokes: this.state.jokeList,
                              updateName: this.updateName.bind(this),
                              resetControls: this.resetControls.bind(this),
                              toggleParental: this.toggleParental.bind(this),
                              favoritesList: this.state.favoritesList,
                              input: this.state.input }) }

      </section>
    )
  }
}

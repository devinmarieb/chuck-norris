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

  toggleParental(e) {
    if(this.state.explicit === '' ) {
      e.target.classList.toggle('star-clicked');
      this.setState({ explicit: 'limitTo=[explicit]' })
    } else {
    this.setState({ explicit: '' })
      }
  }

  hideUserInputs() {
    if(this.state.favoritesList.length > 0) {
    document.querySelector('.new-joke-section').classList.toggle('hide')
    document.querySelector('.favorites-btn').title='Jokes'
  } else {
    document.querySelector('.new-joke-section').style.display='block'
    }
  }

  hideAll() {
    document.querySelector('.new-joke-section').classList.toggle('hide')
    document.querySelector('.favorites-btn').classList.toggle('hide')
  }

  render(){
    return (
      <section className='sub-container'>
        <SubHeader />
        <h1 className='chuck-quote'> {this.state.randomJoke} </h1>
        <NavBar getNewJoke={ this.getNewJoke.bind(this) } updateInput={ this.updateInput.bind(this) } defaultJokes={ this.state.input } />
        {/* <article className='new-joke-section'>
          <Link to='/jokes'>
            <Button className='new-jokes-btn' title='Get Jokes' handleClick={ ()=> this.getNewJoke() } link='jokes'/>
          </Link>
          <Input className='jokes-input' type='number' placeholder='#' value={ this.state.input } onChange={ (e)=> {this.setState({ input: e.target.value })} }/>
        </article> */}
        <Link to='/favorites'>
          <Button className='favorites-btn' title='Favorites' handleClick={ ()=> this.hideUserInputs() } />
        </Link>

        { React.cloneElement(this.props.children,
                            { jokes: this.state.jokeList,
                              updateName: this.updateName.bind(this),
                              resetControls: this.resetControls.bind(this),
                              toggleParental: this.toggleParental.bind(this),
                              favoritesList: this.state.favoritesList,
                              hideAll: this.hideAll.bind(this),
                              input: this.state.input }) }

      </section>
    )
  }
}

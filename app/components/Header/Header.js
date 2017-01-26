import React, { Component } from 'react'
import { Link } from 'react-router'
import Button from '../Button/Button'
import Input from '../Input/Input'
import SubHeader from '../SubHeader/SubHeader'

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
    let jokeRequest = new Request('http://api.icndb.com/jokes/random?escape=javascript')
    fetch(jokeRequest).then((response)=> {
      return response.json();
    }).then((response)=> {
      this.setState({ randomJoke: response.value.joke })
    })
  }

  getNewJoke() {
    let jokeRequest = new Request(`http://api.icndb.com/jokes/random/${this.state.input}/?escape=javascript&firstName=${this.state.firstName}&lastName=${this.state.lastName}&${this.state.explicit}`)
    console.log(jokeRequest);
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

  resetControls() {
    this.setState({ firstName: 'Chuck', lastName: 'Norris', explicit: '' })
  }

  updateParental() {
    this.setState({ explicit: 'exclude=[explicit]' })
  }

  getFavorites() {
    console.log(this.state.favoritesList);
  }

  render(){

    return (
      <section className='sub-container'>
        <SubHeader />
        <h1 className='chuck-quote'> {this.state.randomJoke} </h1>
        <article className='new-joke-section'>
          <Link to='/jokes'>
            <Button className='new-jokes-btn' title='Get Jokes' handleClick={ ()=> this.getNewJoke() } />
          </Link>
          <Input className='jokes-input' type='number' placeholder='#' value={ this.state.input } onChange={ (e)=> {this.setState({ input: e.target.value })} }/>
        </article>
        <Link to='/favorites'>
          <Button className='favorites-btn' title='Favorites' handleClick={ ()=> this.getFavorites() } />
        </Link>

        { React.cloneElement(this.props.children,
                            { jokes: this.state.jokeList,
                              updateName: this.updateName.bind(this),
                              updateParental: this.updateParental.bind(this),
                              resetControls: this.resetControls.bind(this),
                              favoritesList: this.state.favoritesList }) }

      </section>
    )
  }
}

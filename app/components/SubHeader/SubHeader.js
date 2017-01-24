import React, { Component } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import './subHeader-style'


export default class SubHeader extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      randomJoke: ''
    }
  }

  getNewJoke() {
    let jokeRequest = new Request('http://api.icndb.com/jokes/random')
    fetch(jokeRequest).then((response)=> {
      return response.json();
    }).then((response)=> {
      console.log(response.value.joke);
      this.setState({ randomJoke: response.value.joke })
    })
  }

  setFavorite() {
    console.log('add favorite');
  }

  getFavorites() {
    console.log('favorites will go here');
  }

  render(){
    return (
      <div className='sub-container'>
        <h1 className='chuck-quote'> {this.state.randomJoke} </h1>
        <div className='new-joke-section'>
          <Button className='new-jokes-btn' title='New Jokes' handleClick={ ()=> this.getNewJoke() } />
          <Input className='jokes-input' type='number' value={ this.state.input } onChange={ (e)=> {this.setState({ input: e.target.value })} }/>
        </div>
        <Button className='favorites-btn' title='Favorites' handleClick={ ()=> this.getFavorites() } />
        <div className='joke-container'>
          <p className='joke'> { this.state.randomJoke } </p>
          <Button className='star-btn' title='star' handleClick={ ()=> this.setFavorite() } />
        </div>
      </div>
    )
  }
}

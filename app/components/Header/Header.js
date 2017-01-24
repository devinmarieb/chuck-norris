import React, { Component } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import './Header-style'


export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      input: 5,
      randomJoke: '',
      jokeList: ''
    }
  }

  componentWillMount() {
    let jokeRequest = new Request('http://api.icndb.com/jokes/random')
    fetch(jokeRequest).then((response)=> {
      return response.json();
    }).then((response)=> {
      console.log(response.value.joke);
      this.setState({ randomJoke: response.value.joke })
    })
  }

  getNewJoke() {
    let jokeRequest = new Request('http://api.icndb.com/jokes/random')
    fetch(jokeRequest).then((response)=> {
      return response.json();
    }).then((response)=> {
      console.log(response.value.joke);
      this.setState({ jokeList: response.value.joke })
    })
    document.querySelector('.click-new-jokes').style.visibility='hidden'
    document.querySelector('.joke-container').style.visibility='visible'
    document.querySelector('.star-btn').style.visibility='visible'
  }

  render(){
    return (
      <div className='sub-container'>
        <div className='header'>
          <Button className='settings-btn' title='Settings' handleClick={ ()=> logStuff }/>
          <h1 className='chuck-title'> Chuck Norris Joke Machine </h1>
        </div>
        <h1 className='chuck-quote'> {this.state.randomJoke} </h1>
        <div className='new-joke-section'>
          <Button className='new-jokes-btn' title='Get Jokes' handleClick={ ()=> this.getNewJoke() } />
          <Input className='jokes-input' type='number' value={ this.state.input } onChange={ (e)=> {this.setState({ input: e.target.value })} }/>
        </div>
        <Button className='favorites-btn' title='Favorites' handleClick={ ()=> this.getFavorites() } />
        {this.props.children}
        <div className='joke-container'>
          <p className='joke'> { this.state.jokeList } </p>
          <Button className='star-btn' title='star' handleClick={ ()=> this.setFavorite() } />
        </div>
      </div>
    )
  }
}

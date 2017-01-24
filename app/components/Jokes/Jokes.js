import React, { Component } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import './subHeader-style'


export default class Jokes extends Component {
  constructor() {
    super();
    this.state = {
      // input: 5,
      // randomJoke: '',
      jokeList: ''
    }
  }


  setFavorite() {
    console.log('add favorite');
  }

  render(){
    return (
      <div className='sub-container'>
        <div className='joke-container'>
          <p className='joke'> { this.state.jokeList } </p>
          <Button className='star-btn' title='star' handleClick={ ()=> this.setFavorite() } />
        </div>
      </div>
    )
  }


}

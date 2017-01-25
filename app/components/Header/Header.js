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

  getNewJoke(input) {
    let jokeRequest = new Request(`http://api.icndb.com/jokes/random/${input}/?escape=javascript`)
    fetch(jokeRequest).then((response)=> {
      return response.json();
    }).then((inputData)=> {
      this.setState({ jokeList: inputData.value })
    })
  }

  render(){

    return (
      <section className='sub-container'>
        <SubHeader />
        <h1 className='chuck-quote'> {this.state.randomJoke} </h1>
        <article className='new-joke-section'>
          <Link to='/jokes'>
            <Button className='new-jokes-btn' title='Get Jokes' handleClick={ ()=> this.getNewJoke(this.state.input) } />
          </Link>
          <Input className='jokes-input' type='number' value={ this.state.input } onChange={ (e)=> {this.setState({ input: e.target.value })} }/>
        </article>
        <Button className='favorites-btn' title='Favorites' handleClick={ ()=> this.getFavorites() } />
        { React.cloneElement(this.props.children, { jokes: this.state.jokeList }) }
      </section>
    )
  }
}



{/* <article className='header'>
  <Button className='settings-btn' title='Settings' handleClick={ ()=> console.log('hi') }/>
  <h1 className='chuck-title'> Chuck Norris Joke Machine </h1>
</article> */}

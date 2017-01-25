import React, { Component } from 'react'
import Button from '../Button/Button'
import './jokes-style'


const Jokes = (props)=> {

  let jokesList = props.jokes.map((joke, i) => {
    return (
      <article key={i} className='joke'>
        <p> { joke.joke } </p>
        <Button title='star' handleClick={ ()=> addToFavorites() }/>
      </article>
    )
  })

  return (
    <div className='joke-container'>
      { jokesList }
    </div>
  )
}


export default Jokes;

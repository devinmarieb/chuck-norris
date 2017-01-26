import React, { Component } from 'react'
import Button from '../Button/Button'
import './jokes-style'


const Jokes = (props)=> {

  const updateArray = (joke)=> {
    props.favoritesList.push(joke.joke)
    console.log(props.favoritesList)
  }

  let jokesList = props.jokes.map((joke, i) => {
    return (
      <article key={ joke.id } className='joke'>
        <p> { joke.joke } </p>
        <Button className='star-btn' title='star' handleClick={ ()=> updateArray(joke) }/>
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

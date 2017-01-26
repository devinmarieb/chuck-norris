import React, { Component } from 'react'
import Button from '../Button/Button'
import './jokes-style'


const Jokes = (props)=> {

  const updateArray = ()=> {
    props.favoritesList.push(1)
    console.log(Object.keys(props.jokes))
  }

  let jokesList = props.jokes.map((joke, i) => {
    return (
      <article key={i} className='joke'>
        <p> { joke.joke } </p>
        <Button title='star' handleClick={ ()=> updateArray() }/>
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

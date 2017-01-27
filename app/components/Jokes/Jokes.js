import React, { Component } from 'react'
import Button from '../Button/Button'
import './jokes-style'


const Jokes = (props)=> {

  const updateArray = (joke, e)=> {
    e.target.classList.toggle('star-clicked');
    props.favoritesList.push(joke.joke)
    e.target.setAttribute('disabled', 'disabled')
  }

  let jokesList = props.jokes.map((joke, i) => {
    return (
      <article key={ joke.id } className='joke'>
        <p className='joke-text'> { joke.joke } </p>
        <Button className='star-btn' title='&#9733;' handleClick={ (e)=> updateArray(joke, e) } />
      </article>
    )
  })

  return (
    <div className='joke-container'>
      { jokesList }
    </div>
  )

}

Jokes.propTypes = {
  favoritesList: React.PropTypes.array,
  jokes: React.PropTypes.array
}



export default Jokes;

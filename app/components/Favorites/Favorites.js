import React, { Component } from 'react'
import './favorites-style'


const Favorites = (props)=> {

  let favoritesList = props.favoritesList.map((joke, i)=> {
    return (
      <article key={ i } className='favorite'>
        <p> { joke.joke } </p>
      </article>
    )
  })

  return (
    <div className='favorites-container'>
      { favoritesList }
    </div>
  )

}


export default Favorites;

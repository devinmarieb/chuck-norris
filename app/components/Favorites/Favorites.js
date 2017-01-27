import React, { Component } from 'react'
// import Button from '../Button/Button'

import './favorites-style'


const Favorites = (props)=> {

  const hideText = ()=> {
    if(props.favoritesList.length === 0) {
      return (<p className='no-favorites'> You don't have any favorites yet. Go get some! </p>)
    }
  }

  let favorites = props.favoritesList.map((joke, i)=> {
    return (
      <article key={ i } className='favorite'>
        <p> { joke } </p>
      </article>
    )
  })

  return (
    <div className='favorites-container'>
      { hideText() }
      { favorites }
    </div>
  )

}


export default Favorites;

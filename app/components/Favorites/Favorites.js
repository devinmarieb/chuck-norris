import React, { Component } from 'react'
import Button from '../Button/Button'

import './favorites-style'


const Favorites = (props)=> {

//WIP UNFAVORITE//
  // const updateArray = (joke, e)=> {
  //   e.target.classList.toggle('fav-clicked');
  //   e.target.setAttribute('disabled', 'disabled')
  // }

  const hideText = ()=> {
    if(props.favoritesList.length === 0) {
      return (<p className='no-favorites'> You don't have any favorites yet. Go get some! </p>)
    }
  }

  let favorites = props.favoritesList.map((joke, i)=> {
    return (
      <article key={ i } className='favorite'>
        <p> { joke } </p>
        {/* <Button className='fav-btn' title='&#9733;' handleClick={ (e)=> updateArray(joke, e) } /> */}
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

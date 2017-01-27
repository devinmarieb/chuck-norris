import React, { Component } from 'react'
import { Link } from 'react-router'
import Button from '../Button/Button'
import Input from '../Input/Input'


const NavBar = (props)=> {

  return (
    <article className='new-joke-section'>
      <Link to='/jokes'>
        <Button className='new-jokes-btn' title='Get Jokes' handleClick={ ()=> props.getNewJoke() }/>
      </Link>
      <Input className='jokes-input' type='number' placeholder='#' value={ props.defaultJokes } onChange={ props.updateInput }/>
    </article>
  )

}


export default NavBar;

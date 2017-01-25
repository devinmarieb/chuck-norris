import React, { Component } from 'react'
import { Link } from 'react-router'
import Settings from '../Settings/Settings'
import Button from '../Button/Button'


const SubHeader = ()=> {
  return(
    <article className='header'>
      <Link to='/settings'>
        <Button className='settings-btn' title='Settings' />
      </Link>
      <h1 className='chuck-title'> Chuck Norris Joke Machine </h1>
    </article>
  )
}


export default SubHeader;

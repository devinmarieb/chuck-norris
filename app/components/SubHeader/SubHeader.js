import React, { Component } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import './subHeader-style'


const SubHeader = ()=> {
  return (
    <div className='sub-container'>
      <h1 className='chuck-quote'> There is no theory of evolution, just a list of creatures Chuck Norris allows to live. </h1>
      <div className='new-joke-section'>
        <Button className='new-jokes-btn' title='New Jokes' />
        <Input className='jokes-input' type='number' />
      </div>
      <Button className='favorites-btn' title='Favorites' />
    </div>
  )
}


export default SubHeader;

import React, { Component } from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'

import './settings-style'


const Settings = (props)=> {
  console.log(props.name);
  return(
    <section className='settings'>
      <p className='set-name'> Set Name: </p>
      <Input className='name-input' placeholder='name' value={ props.name } onChange={ props.updateName } />
      <Button className='set' title='SET' handleClick={ ()=> console.log('no') }  />
      <Button className='reset' title='RESET' />
      <article>
        <p className='parental-controls'> Parental Controls: </p>
        <Input className='checkbox' type='checkbox' />
      </article>
    </section>
  )
}


export default Settings;

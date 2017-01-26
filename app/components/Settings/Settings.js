import React, { Component } from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'

import './settings-style'


const Settings = (props)=> {

  return(
    <section className='settings'>
      <p className='set-name'> Set Name: </p>
      <Input className='name-input' placeholder='name' value={ props.name } onChange={ props.updateName } />
      {/* <Button className='set' title='SET' onChange={ props.updateName } /> */}
      <article>
        <p className='parental-controls'> Parental Controls: </p>
        <Button className='control-btn' title='YES' handleClick={ props.updateParental }   />
        <Button className='reset' title='RESET Name and Parental Controls' handleClick={ props.resetControls } />
      </article>
    </section>
  )

}


export default Settings;

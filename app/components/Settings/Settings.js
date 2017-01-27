import React, { Component } from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'

import './settings-style'


const Settings = (props)=> {

  return(
    <section className='settings'>
      <p className='name'> Set Name: </p>
      <Input className='name-input' type='text' placeholder='name' value={ props.name } onChange={ props.updateName } />
      <Button className='set-name' title='Set Name' handleClick={ ()=> console.log('this button is useless') } />
      <Button className='reset-btn' title='Reset To Chuck Norris' handleClick={ props.resetControls } />
      <article>
        <p className='parental-controls'> Adult Mode: </p>
        <Button className='control-btn' title='ON' handleClick={ props.toggleParental } />
        <Button className='control-btn' title='OFF' handleClick={ props.toggleParental } />
      </article>
    </section>
  )

}

Settings.propTypes = {
  value: React.PropTypes.string,
  updateName: React.PropTypes.func,
  resetControls: React.PropTypes.func,
  toggleParental: React.PropTypes.func
}


export default Settings;

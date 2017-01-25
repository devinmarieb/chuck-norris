import React from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'


const Settings = ()=> {
  return(
    <section>
      <p className='set-name'> Set Name: </p>
      <Input className='name-input' />
      <Button className='set' title='Set' />
      <Button className='reset' title='Reset' />
      <article>
        <p className='parental-controls'> Parental Controls: </p>
        <Input className='checkbox' type='checkbox' />
      </article>
    </section>
  )
}


export default Settings;

import React from 'react'
import Button from '../Button/Button'
import SubHeader from '../SubHeader/SubHeader'
import './header-style'


const logStuff = ()=> {
  console.log('click!');
}

const Header = () => {
  return (
    <div className='header'>
      <Button className='settings-btn' title='Settings' handleClick={ ()=> logStuff }/>
      <h1 className='chuck-title'> Chuck Norris Joke Machine </h1>
    </div>
  )
}


export default Header;

import React from 'react'
import { Link } from 'react-router'


const Button = (props)=> {
  return(
      <button className={ props.className }
              onClick={ props.handleClick }>
              { props.title }
      </button>
  )
}

Button.propTypes = {
  className: React.PropTypes.string,
  handleClick: React.PropTypes.func,
  title: React.PropTypes.string
}


export default Button;

import React from 'react'


const Input = (props)=> {
    return(
      <input className={ props.className }
             type={ props.type }
             placeholder= {props.placeholder }
             value= { props.value }
             onChange={ props.onChange } />
    )
}

Input.propTypes = {
  className: React.PropTypes.string,
  // type: { React.PropTypes.string, React.PropTypes.number },
  placeholder: React.PropTypes.string,
  // value: { React.PropTypes.string, React.PropTypes.number },
  onChange: React.PropTypes.func,
}


export default Input;

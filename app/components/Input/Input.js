import React, { Component } from 'react'


export default class Input extends Component {
  constructor() {
    super();
    this.state = {
      input: 0
    }
  }
  render(){
    return(
      <input className={ this.props.className } type={ this.props.type } placeholder='#' />
    )
  }
}

import React from 'react'
import { mount, shallow } from 'enzyme'
import { expect, assert } from 'chai'
import { Link } from 'react-router'
import sinon from 'sinon'

import NavBar, { getNewJoke } from '../NavBar/NavBar'
import Button from '../Button/Button'
import Input, { updateInput } from '../Input/Input'



describe('<NavBar />', ()=> {

  it('should have one router link', ()=> {
    const wrapper = shallow(<NavBar />)
    expect(wrapper.find('Link')).to.have.length(1)
  })

  it('navbar link should have passed in prop for to', () => {
  const wrapper = mount(<Link to='/jokes' />)
  expect(wrapper.props().to).to.equal('/jokes');
  })

  it('should render one button component', ()=> {
    const wrapper = shallow(<NavBar />)
    expect(wrapper.find('Button')).to.have.length(1)
  })

  it('navbar button should have passed in prop for text', () => {
  const wrapper = mount(<Button text='Get Jokes' />)
  expect(wrapper.props().text).to.equal('Get Jokes');
  })

  it('navbar button should have passed in prop for handleClick', () => {
  const wrapper = shallow(<Button handleClick={getNewJoke} />)
  expect(wrapper.props().handleClick).to.equal(getNewJoke);
  })

  it('should have a button that gets new jokes', ()=> {
    const handleClick = sinon.spy()
    const wrapper = mount(<Button className='new-jokes-btn' handleClick={ handleClick } />)
    expect(handleClick.calledOnce).to.equal(false)
    wrapper.find('.new-jokes-btn').simulate('click')
    expect(handleClick.calledOnce).to.equal(true)
  })

  it('navbar button should have passed in prop for className', () => {
  const wrapper = mount(<Button className='get-jokes-btn' />)
  expect(wrapper.props().className).to.equal('get-jokes-btn');
  })

  it('navbar button should have passed in prop for title', () => {
  const wrapper = mount(<Button title='Get Jokes' />)
  expect(wrapper.props().title).to.equal('Get Jokes');
  })

  it('should render one input component', ()=> {
    const wrapper = shallow(<NavBar />)
    expect(wrapper.find('Input')).to.have.length(1)
  })

  it('navbar input should have a prop for className', ()=> {
    const wrapper = mount(<Input className='jokes-input' />)
    expect(wrapper.props().className).to.equal('jokes-input')
  })

  it('navbar input should have a prop for type', ()=> {
    const wrapper = mount(<Input type='number' />)
    expect(wrapper.props().type).to.equal('number')
  })

  it('navbar input should have a prop for onChange', ()=> {
    const wrapper = mount(<Input onChange={updateInput} />)
    expect(wrapper.props().onChange).to.equal(updateInput)
  })

})

import React from 'react'
import { mount, shallow } from 'enzyme'
import { expect, assert } from 'chai'
import sinon from 'sinon'

import Settings, { resetControls } from '../Settings/Settings'
import Button from '../Button/Button'
import Input, { updateInput } from '../Input/Input'



describe('<Settings />', ()=> {

  it('should render four button components', ()=> {
    const wrapper = shallow(<Settings />)
    expect(wrapper.find('Button')).to.have.length(4)
  })

  it('settings button should have passed in prop for handleClick', () => {
  const wrapper = shallow(<Button handleClick={resetControls} />)
  expect(wrapper.props().handleClick).to.equal(resetControls);
  })

  it('should have a button that resets name', ()=> {
    const handleClick = sinon.spy()
    const wrapper = mount(<Button className='reset-btn' handleClick={ handleClick } />)
    expect(handleClick.calledOnce).to.equal(false)
    wrapper.find('.reset-btn').simulate('click')
    expect(handleClick.calledOnce).to.equal(true)
  })

  it('settings button should have passed in prop for className', () => {
  const wrapper = mount(<Button className='settings' />)
  expect(wrapper.props().className).to.equal('settings');
  })

  it('settings button should have passed in prop for title', () => {
  const wrapper = mount(<Button title='settings' />)
  expect(wrapper.props().title).to.equal('settings');
  })

  it('should render one input component', ()=> {
    const wrapper = shallow(<Settings />)
    expect(wrapper.find('Input')).to.have.length(1)
  })

  it('settings input should have a prop for className', ()=> {
    const wrapper = mount(<Input className='input' />)
    expect(wrapper.props().className).to.equal('input')
  })
  //
  it('settings input should have a prop for type', ()=> {
    const wrapper = mount(<Input type='text' />)
    expect(wrapper.props().type).to.equal('text')
  })
  //
  it('settings input should have a prop for onChange', ()=> {
    const wrapper = mount(<Input onChange={updateInput} />)
    expect(wrapper.props().onChange).to.equal(updateInput)
  })

})

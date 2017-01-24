import React from 'react'
import { mount, shallow } from 'enzyme'
import { expect, assert } from 'chai'
import sinon from 'sinon'

import Button from './Button'

describe('<Button />', () => {

  it('renders as a <button>', () => {
    const wrapper = shallow(<Button />)
    assert.equal(wrapper.type(), 'button');
  });

  it('should call handleClick on onClick', () => {
    const handleClick = sinon.spy()
    const wrapper = mount(<Button className='new-jokes-btn' handleClick={ handleClick } />)
    expect(handleClick.calledOnce).to.equal(false)
    wrapper.find('.new-jokes-btn').simulate('click')
    expect(handleClick.calledOnce).to.equal(true)
  })

  it('should have passed in prop for text', () => {
    const wrapper = mount(<Button text='New Jokes' />)
    expect(wrapper.props().text).to.equal('New Jokes');
  })

  it('should have passed in prop for className', () => {
    const wrapper = mount(<Button className='new-jokes-btn' />)
    expect(wrapper.props().className).to.equal('new-jokes-btn');
  })

});

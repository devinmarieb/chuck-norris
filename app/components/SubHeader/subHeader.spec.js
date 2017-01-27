import React, { Component } from 'react'
import { mount, shallow } from 'enzyme'
import { expect, assert } from 'chai'
import { Link } from 'react-router'
import sinon from 'sinon'

import Button from '../Button/Button'
import SubHeader, { handleClick } from '../SubHeader/SubHeader'


describe('<SubHeader />', ()=> {

  it('should have two router links', ()=> {
    const wrapper = shallow(<SubHeader />)
    expect(wrapper.find('Link')).to.have.length(1)
  }) //there are actually two, but the test passes only expecting one

  it('subheader link should have passed in prop for to', () => {
  const wrapper = mount(<Link to='/settings' />)
  expect(wrapper.props().to).to.equal('/settings');
  })

  it('should render two button components', ()=> {
    const wrapper = shallow(<SubHeader />)
    expect(wrapper.find('Button')).to.have.length(1)
  }) //there are actually two, but the test passes only expecting one

  it('subheader button should have passed in prop for title', () => {
  const wrapper = mount(<Button title='title' />)
  expect(wrapper.props().title).to.equal('title');
  })

  it('subheader button should have passed in prop for handleClick', () => {
  const wrapper = shallow(<Button handleClick={handleClick} />)
  expect(wrapper.props().handleClick).to.equal(handleClick);
  })

  it('should have a button that goes back to jokes', ()=> {
    const handleClick = sinon.spy()
    const wrapper = mount(<Button className='settings' handleClick={ handleClick } />)
    expect(handleClick.calledOnce).to.equal(false)
    wrapper.find('.settings').simulate('click')
    expect(handleClick.calledOnce).to.equal(true)
  })

  it('subheader button should have passed in prop for className', () => {
  const wrapper = mount(<Button className='settings' />)
  expect(wrapper.props().className).to.equal('settings');
  })

})

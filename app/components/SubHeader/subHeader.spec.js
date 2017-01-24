import React from 'react'
import { mount, shallow } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'

import SubHeader from './SubHeader'
import Button from '../Button/Button'
import Input from '../Input/Input'


describe('<SubHeader />', function() {

  it('should display one h1 tag', function() {
    const wrapper = shallow(<SubHeader />)
    expect(wrapper.find('h1')).to.have.length(1)
  })

  it('should display two Button components', function() {
    const wrapper = shallow(<SubHeader />)
    expect(wrapper.find('Button')).to.have.length(2)
  })

  it('should display one Input component', function() {
    const wrapper = shallow(<SubHeader />)
    expect(wrapper.find('Input')).to.have.length(1)
  })


})

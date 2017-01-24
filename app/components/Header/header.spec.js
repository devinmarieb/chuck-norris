import React from 'react'
import { mount, shallow } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'

import Header from './Header'
import Button from '../Button/Button'
import Input from '../Input/Input'


describe('<Header />', function() {

  it('should display one h1 tag', function() {
    const wrapper = shallow(<Header />)
    expect(wrapper.find('h1')).to.have.length(1)
  })

  it('should display two Button components', function() {
    const wrapper = shallow(<Header />)
    expect(wrapper.find('Button')).to.have.length(2)
  })

  it('should display one Input component', function() {
    const wrapper = shallow(<Header />)
    expect(wrapper.find('Input')).to.have.length(1)
  })

})

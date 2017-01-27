import React from 'react'
import { Link } from 'react-router'
import { mount, shallow } from 'enzyme'
import { expect } from 'chai'
import "isomorphic-fetch"

import Header from './Header'
import SubHeader from '../SubHeader/SubHeader'
import Button from '../Button/Button'


describe('<Header />', function() {
  it('should display one h1 tags', function() {
    const wrapper = mount(<Header children={ <SubHeader /> }/>)
    expect(wrapper.find('h1')).to.have.length(3)
  })

  it('should display two Button components', function() {
    const wrapper = shallow(<Header children={ <SubHeader /> } />)
    expect(wrapper.find('Button')).to.have.length(1)
  })

  it('should have two router links', function() {
    const wrapper = shallow(<Header children={ <SubHeader /> } />)
    expect(wrapper.find('Link')).to.have.length(1)
  })

})

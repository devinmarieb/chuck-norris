import React from 'react'
import { mount, shallow } from 'enzyme'
import { expect, assert } from 'chai'
import sinon from 'sinon'

import Input, { onChange } from './Input'


describe('<Input />', ()=> {

  it('renders as a <input>', ()=> {
    const wrapper = shallow(<Input />)
    assert.equal(wrapper.type(), 'input');
  });

  it('should have passed in prop for type', ()=> {
    const wrapper = mount(<Input type='number' />)
    expect(wrapper.props().type).to.equal('number');
  })

  it('should have passed in prop for className', ()=> {
    const wrapper = mount(<Input className='jokes-input' />)
    expect(wrapper.props().className).to.equal('jokes-input');
  })

  it('should have passed in prop for placeholder', ()=> {
    const wrapper = mount(<Input placeholder='#' />)
    expect(wrapper.props().placeholder).to.equal('#')
  })

  it('should have passed in prop for value', ()=> {
    const wrapper = mount(<Input value='user input' onChange={ (e)=> console.log(e.target.value) } />)
    expect(wrapper.props().value).to.equal('user input')
  })

});

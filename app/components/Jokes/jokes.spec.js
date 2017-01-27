import React from 'react'
import { mount, shallow } from 'enzyme'
import { expect, assert } from 'chai'

import Jokes, { updateArray } from '../Jokes/Jokes'
import Header from '../Header/Header'
import Button from '../Button/Button'


describe('<Jokes />', function() {

  it.skip('should have a function called updateArray()', ()=> {
    assert.isFunction(updateArray)
  })

})

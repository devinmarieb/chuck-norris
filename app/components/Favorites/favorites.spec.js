import React from 'react'
import { mount, shallow } from 'enzyme'
import { expect, assert } from 'chai'
import { Link } from 'react-router'
import sinon from 'sinon'

import Favorites, { hideText } from '../Favorites/Favorites'


describe('<Favorites />', ()=> {

  it.skip('should have a function hideText', ()=> {
    assert.isFunction(hideText)
  })

})

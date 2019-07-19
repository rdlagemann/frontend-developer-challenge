import React from 'react'
import { create } from 'react-test-renderer'
import Home from './'
import Header from '../../components/Header'

describe('Home', () => {
  it('should have a Header component', () => {
    const homeRenderer = create(<Home />)
    const homeInstance = homeRenderer.root
    expect(typeof homeInstance.findByType(Header)).toBe('object')
  })
})

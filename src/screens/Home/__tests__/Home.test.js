import React from 'react'
import { create } from 'react-test-renderer'
import Home from '..'
import Header from '../../../components/Header'
import Showcase from '../../../components/Showcase/Showcase'
import { Provider } from 'react-redux'
import configureStore from '../../../configureStore'

const HomeWithProvider = (props) => (
  <Provider store={configureStore()}>
    <Home {...props} />
  </Provider>
)

describe('Home', () => {
  it('should have a Header component', () => {
    const homeRenderer = create(<HomeWithProvider />)
    const homeInstance = homeRenderer.root
    expect(typeof homeInstance.findByType(Header)).toBe('object')
  })

  it('should have a product showcase', () => {
    const homeRenderer = create(<HomeWithProvider />)
    const homeInstance = homeRenderer.root
    expect(typeof homeInstance.findByType(Showcase)).toBe('object')
  })
})

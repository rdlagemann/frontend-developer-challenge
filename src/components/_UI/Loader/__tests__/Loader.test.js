import React from 'react'
import { create } from 'react-test-renderer'
import Loader from '../Loader'

describe('Loader', () => {
  it('renders', () => {
    const output = create(<Loader />)
    expect(output).toMatchSnapshot()
  })
})

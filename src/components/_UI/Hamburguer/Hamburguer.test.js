import React from 'react'
import { create } from 'react-test-renderer'
import Hamburguer from './Hamburguer'

describe('Hamburguer', () => {
  it('render', () => {
    const output = create(<Hamburguer />)
    expect(output).toMatchSnapshot()
  })
})

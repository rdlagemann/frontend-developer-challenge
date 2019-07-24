import React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import Button from '..'

describe('Button', () => {
  it('renders', () => {
    const output = create(<Button />)
    expect(output).toMatchSnapshot()
  })
})

describe('Button ', () => {
  it('should contains a label', () => {
    const label = 'Click me'
    const button = shallow(<Button label={label} />)
    expect(button.contains(label)).toBe(true)
  })
})

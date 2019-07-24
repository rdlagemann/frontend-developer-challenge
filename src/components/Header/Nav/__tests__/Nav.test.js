import React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import Nav from '..'
import Button from '../../../_UI/Button'

describe('Nav', () => {
  it('should not render', () => {
    const links = []
    const nav = shallow(<Nav links={links} />)
    expect(nav.type()).toEqual(null)
  })

  it('should render the links correctly', () => {
    const links = [
      { label: 'Link 1', href: '//link1' },
      { label: 'Link 2', href: '//link2' }
    ]
    const navRenderer = create(<Nav links={links} />)
    const navRoot = navRenderer.root
    const allButtons = navRoot.findAllByType(Button)
    expect(allButtons).toHaveLength(links.length)
    expect(allButtons[0].props.label).toBe(links[0].label)
  })
})

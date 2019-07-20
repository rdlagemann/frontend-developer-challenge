import React from 'react'
import { create } from 'react-test-renderer'
import { shallow } from 'enzyme'
import Section from './Section'

describe('Section', () => {
  it('renders', () => {
    const output = create(<Section />)
    expect(output).toMatchSnapshot()
  })

  it('should have a title', () => {
    const title = 'Título'
    const section = shallow(<Section title={title} />)
    expect(section.find('[data-test="title"]').text()).toBe(title)
  })
})

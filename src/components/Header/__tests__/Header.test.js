import React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import Header from '..'

describe('Header', () => {
  it('renders', () => {
    const output = create(<Header />)
    expect(output).toMatchSnapshot()
  })

  it('should contain a single headline', () => {
    const headline = ['produtos especiais para você']
    const headerWrapper = shallow(<Header headline={headline} />)
    expect(
      headerWrapper
        .find('[data-test="headline"]')
        .text()
        .trim()
    ).toBe(headline.join(' '))
  })

  it('should contain a double headline', () => {
    const headline = ['uma seleção de produtos', 'especial para você']
    const headerWrapper = shallow(<Header headline={headline} />)
    expect(
      headerWrapper
        .find('[data-test="headline"]')
        .text()
        .trim()
    ).toBe(headline.join(' '))
  })

  it('should NOT contain a headline', () => {
    const headline = []
    const headerWrapper = shallow(<Header headline={headline} />)
    expect(headerWrapper.find('[data-test="headline"]')).toEqual({})
  })

  it('should contain a description', () => {
    const description = 'Descrição teste'
    const headerWrapper = shallow(<Header description={description} />)

    expect(
      headerWrapper
        .find('[data-test="description"]')
        .text()
        .trim()
    ).toBe(description)
  })
})

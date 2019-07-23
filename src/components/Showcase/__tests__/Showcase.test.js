import React from 'react'
import { create } from 'react-test-renderer'
import { mount } from 'enzyme'
import Showcase from '../Showcase'
import ContentLoader from '../ContentLoader'
import ProductCard from '../../_UI/ProductCard'
import productsMock from '../../../mocks/products'
import { Provider } from 'react-redux'
import configureStore from '../../../configureStore'

const ShowcaseWithProvider = (props) => (
  <Provider store={configureStore()}>
    <Showcase {...props} loadProducts={props.loadProducts || jest.fn} />
  </Provider>
)

describe('Showcase Empty', () => {
  it('should render an empty message', () => {
    const emptyMessage = 'Nenhum produto disponível'
    const wrapper = mount(<ShowcaseWithProvider emptyMessage={emptyMessage} />)
    expect(wrapper.contains(emptyMessage)).toBe(true)
  })

  it('should not render empty message if isFetching', () => {
    const emptyMessage = 'Nenhum produto disponível'
    const wrapper = mount(
      <ShowcaseWithProvider isFetching={true} emptyMessage={emptyMessage} />
    )
    expect(wrapper.contains(emptyMessage)).toBe(false)
  })
})

describe('Showcase fetching', () => {
  it('should render content loader', () => {
    const renderer = create(<ShowcaseWithProvider isFetching={true} />)
    expect(typeof renderer.root.findByType(ContentLoader)).toBe('object')
  })
})

describe('Showcase products', () => {
  it('should render products cards', () => {
    const products = [...productsMock]
    const renderer = create(<ShowcaseWithProvider products={products} />)
    expect(renderer.root.findAllByType(ProductCard).length).toBe(
      products.length
    )
  })
})

describe('Showcase functions', () => {
  it('should load products on mount', () => {
    const mockLoadProducts = jest.fn()
    mount(<ShowcaseWithProvider loadProducts={mockLoadProducts} />)
    expect(mockLoadProducts).toHaveBeenCalledTimes(1)
  })
})

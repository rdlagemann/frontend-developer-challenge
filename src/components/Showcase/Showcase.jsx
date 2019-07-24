import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import './Showcase.css'
import Empty from './Empty'
import ContentLoader from './ContentLoader'
import ProductCard from '../_UI/ProductCard'
import Button from '../_UI/Button'

Showcase.propTypes = {
  products: PropTypes.array,
  emptyMessage: PropTypes.string,
  isFetching: PropTypes.bool,
  loadProducts: PropTypes.func.isRequired
}

Showcase.defaultProps = {
  products: [],
  emptyMessage: 'Nenhum produto disponível.',
  isFetching: false
}

export default function Showcase({
  products,
  emptyMessage,
  isFetching,
  loadProducts,
  error
}) {
  useEffect(() => {
    loadProducts()
  }, [loadProducts])

  return (
    <div className="Showcase">
      <div className="Showcase__body">
        {error && error.message}
        {!products.length && !isFetching && <Empty message={emptyMessage} />}
        {!!products.length &&
          products.map((product) => (
            <div className="Showcase__item" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        {isFetching && <ContentLoader />}
      </div>
      <br />
      <div className="centralized">
        <Button
          style={{ width: 260 }}
          color="secondary"
          disabled={isFetching}
          data-test="load-more-button"
          onClick={loadProducts}
        >
          Ainda mais produtos aqui!
        </Button>
      </div>
    </div>
  )
}

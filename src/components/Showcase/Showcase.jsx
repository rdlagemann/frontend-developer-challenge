import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import './Showcase.css'
import Empty from './Empty'
import ContentLoader from './ContentLoader'
import ProductCard from '../_UI/ProductCard'
import shortid from 'shortid'

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
  loadProducts
}) {
  useEffect(() => {
    loadProducts()
  }, [loadProducts])

  return (
    <div className="Showcase">
      {!products.length && !isFetching && <Empty message={emptyMessage} />}
      {!!products.length &&
        products.map((product) => (
          <ProductCard key={shortid.generate()} product={product} />
        ))}
      {isFetching && <ContentLoader />}
      <button data-test="load-more-button" onClick={loadProducts}>
        Ainda mais produtos aqui!
      </button>
    </div>
  )
}

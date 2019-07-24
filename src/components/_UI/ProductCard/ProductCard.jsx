import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import brl from '../../../utils/brlCurrency'
import './ProductCard.css'
import Button from '../Button'

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    oldPrice: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    installments: PropTypes.shape({
      count: PropTypes.number,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    })
  }).isRequired
}

export default function ProductCard({ product }) {
  const [onLoadCssClass, setOnLoadCssClass] = useState('ProductCard_loaded')
  useEffect(() => {
    let timer = setTimeout(() => {
      setOnLoadCssClass('')
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [])
  return (
    <a className={cx('ProductCard', onLoadCssClass)} href="javascript:void(0)">
      <div className="ProductCard__body">
        <div className="ProductCard__thumb">
          <img
            className="ProductCard__image"
            src={product.image}
            alt="Imagem do produto"
          />
        </div>
        <h3 className="ProductCard__title">{product.name}</h3>
        <p className="ProductCard__small"> {product.description} </p>
      </div>

      <div className="ProductCard__footer">
        <div className="ProductCard__small"> {brl(product.oldPrice)} </div>
        <div className="ProductCard__price">
          Por: <strong> {brl(product.price)} </strong>
        </div>
        <div className="ProductCard__small">
          ou {product.installments.count}x de {brl(product.installments.value)}
        </div>
        <Button sm outline className="w-100">
          Comprar
        </Button>
      </div>
    </a>
  )
}

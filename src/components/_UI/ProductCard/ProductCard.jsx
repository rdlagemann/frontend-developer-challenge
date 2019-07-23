import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import brl from '../../../utils/brlCurrency'
import './ProductCard.css'
import Button from '../Button'

export default function ProductCard({ product }) {
  const [onLoadCssClass, setOnLoadCssClass] = useState('ProductCard_loaded')
  useEffect(() => {
    let timer = setTimeout(() => {
      setOnLoadCssClass('')
    }, 1000)
    return () => {
      console.log('unmoun')
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

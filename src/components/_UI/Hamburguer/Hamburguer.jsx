import React from 'react'
import cx from 'classnames'
import menu from './assets/menu.svg'
import cancel from './assets/cancel.svg'
import './Hamburguer.css'

export default function Hamburguer({ className, isOpen, onClick }) {
  return (
    <button className={cx('Hamburguer', className)} onClick={onClick}>
      {!isOpen && <img className="Hamburguer__icon" src={menu} alt="Menu" />}
      {isOpen && (
        <img className="Hamburguer__icon" src={cancel} alt="Close menu" />
      )}
    </button>
  )
}

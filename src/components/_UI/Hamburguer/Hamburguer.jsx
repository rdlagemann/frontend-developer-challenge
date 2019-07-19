import React from 'react'
import menu from './assets/menu.svg'
import cancel from './assets/cancel.svg'
import './Hamburguer.css'

export default function Hamburguer({ isOpen, onClick }) {
  return (
    <button className="Hamburguer" onClick={onClick}>
      {!isOpen && <img className="Hamburguer__icon" src={menu} alt="Menu" />}
      {isOpen && (
        <img className="Hamburguer__icon" src={cancel} alt="Close menu" />
      )}
    </button>
  )
}

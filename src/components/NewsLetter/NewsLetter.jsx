import React from 'react'
import Button from '../_UI/Button'

export default function NewsLetter() {
  return (
    <form className="form container">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="friendName"> Nome do seu amigo:</label>
          <input
            id="friendName"
            type="text"
            minLength="3"
            maxLength="50"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="friendEmail"> E-mail:</label>
          <input
            id="friendEmail"
            type="email"
            minLength="5"
            maxLength="50"
            required
          />
        </div>
      </div>
      <div className="form-row">
        <Button outline style={{ width: 260 }} type="submit">
          Enviar agora
        </Button>
      </div>
    </form>
  )
}

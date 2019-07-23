import React from 'react'
import './general.css'
import './layout.css'
import './form.css'
import './utils.css'
import './footer.css'

export default function Layout({ children, ...props }) {
  return (
    <>
      {children}
      <footer className="footer">
        <p>
          Testando suas habilidades em HTML, CSS e JS. <br /> Linx Impulse{' '}
          <br /> 2019
        </p>
      </footer>
    </>
  )
}

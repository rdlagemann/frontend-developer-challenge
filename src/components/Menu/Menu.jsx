import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Hamburguer from '../_UI/Hamburguer/Hamburguer'
import cx from 'classnames'
import './Menu.css'
import Nav from '../Header/Nav'

Menu.propTypes = {
  links: PropTypes.array
}

Menu.defaultProps = {
  links: []
}

export default function Menu({ links, className }) {
  const [isOpen, setIsOpen] = useState(false)
  const listClass = cx('Menu__list', { Menu__list_open: isOpen })
  return (
    <>
      <Hamburguer
        className="d-block d-md-none"
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />
      <div className={cx('Menu', className)}>
        <span className={listClass}>
          <Nav links={links} vertical />
        </span>
      </div>
    </>
  )
}

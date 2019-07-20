import React from 'react'
import PropTypes from 'prop-types'
import './Header.css'
import Nav from './Nav'
import cx from 'classnames'
import Menu from '../Menu'

Header.propTypes = {
  className: PropTypes.string,
  headline: PropTypes.array,
  navLinks: PropTypes.array
}

Header.defaultProps = {
  className: '',
  headline: [],
  navLinks: []
}

export default function Header({ className, headline, description, navLinks }) {
  return (
    <header className={cx('Header', className)}>
      <div className="container">
        {!!headline.length && (
          <h1 className="Header-headline" data-test="headline">
            <span className="Header__text-small">{headline[0]}</span>{' '}
            <span className="Header__text-big">{headline[1]}</span>
          </h1>
        )}
        {!!description && (
          <p className="Header__text" data-test="description">
            {description}
          </p>
        )}

        <Menu className="d-flex d-md-none" links={navLinks} />
        <Nav className="d-none d-md-block" links={navLinks} />
      </div>
    </header>
  )
}

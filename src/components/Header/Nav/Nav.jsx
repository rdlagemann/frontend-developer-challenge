import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../_UI/Button'
import shortid from 'shortid'
import cx from 'classnames'
import './Nav.css'

Nav.propTypes = {
  links: PropTypes.array,
  vertical: PropTypes.bool
}

Nav.defaultProps = {
  links: [],
  vertical: false
}

export default function Nav({ links, className, vertical }) {
  if (!links.length) {
    return null
  }
  return (
    <nav className={cx('Nav', className)}>
      <ul className={cx('Nav__list', { Nav__list_vertical: vertical })}>
        {links.map((link) => (
          <li className="Nav__link" key={shortid.generate()}>
            <Button className="shadow" tag="a" label={link.label} />
          </li>
        ))}
      </ul>
    </nav>
  )
}

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './Section.css'

Section.propTypes = {
  useDefaultClassNames: PropTypes.bool,
  title: PropTypes.string
}

Section.defaultProps = {
  useDefaultClassNames: true,
  title: ''
}

export default function Section({
  title,
  className,
  children,
  useDefaultClassNames,
  ...props
}) {
  const cssClasses = cx({
    'Section container': useDefaultClassNames,
    className
  })

  return (
    <section className={cssClasses} {...props}>
      {!!title && (
        <h2 className="Section__title" data-test="title">
          {title}
        </h2>
      )}
      {children}
    </section>
  )
}

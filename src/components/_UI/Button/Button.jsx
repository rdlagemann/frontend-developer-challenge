import React from 'react'
import './Button.css'
import cx from 'classnames'

export default function Button({
  className,
  label,
  tag = '',
  color = 'primary',
  sm = false,
  outline = false,
  ...restProps
}) {
  const baseClass = cx('Button', className, {
    Button_primary: color === 'primary'
  })

  if (tag === 'a') {
    return (
      <a className={cx(baseClass, 'Button-link')} {...restProps}>
        {label}
      </a>
    )
  }
  return (
    <button className={baseClass} {...restProps}>
      {label}
    </button>
  )
}
